import { Container, Heading, Input, VStack, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateprofile } from '../../Redux/actions/profile';
import { loadUser } from '../../Redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';

const UpdateProfile = ({user}) => {

  const [name,setName] = useState(user.name);
  const [email,setEmail] = useState(user.email);

  const navigate = useNavigate()
  const dispatch = new useDispatch();
  const submitHandler = async (e) => {

    e.preventDefault();
    await dispatch(updateprofile(name,email));
    dispatch(loadUser());
    navigate('/profile');
  };

  const {loading} = useSelector(state=>state.profile)

  return (
    <Container py={'16'} minH={'90vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          textTransform={'uppercase'}
          my={'16'}
          textAlign={['center', 'left']}
          children="Update Profile"
        />

        <VStack spacing={'8'}> 
    
          <Input
            id="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder={'Enter Name'}
            type="text"
            focusBorderColor="red.500"
          />

<Input
            required
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={'Enter Email'}
            type="email"
            focusBorderColor="red.500"
          />
   <Button isLoading={loading}  w='full' colorScheme='red' type='submit'>
       Update Profile
   </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;


