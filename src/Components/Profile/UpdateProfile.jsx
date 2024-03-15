import { Container, Heading, Input, VStack, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const UpdateProfile = () => {

  const [name,setName] = useState();
  const [email,setEmail] = useState();

  return (
    <Container py={'16'} minH={'90vh'}>
      <form>
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
            onChange={e => setEmail(e.target.vale)}
            placeholder={'Enter Email'}
            type="email"
            focusBorderColor="red.500"
          />
   <Button w='full' colorScheme='red'>
       Update Profile
   </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
