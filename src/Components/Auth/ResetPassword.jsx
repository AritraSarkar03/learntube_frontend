import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Heading, FormLabel, Input, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { resetpassword } from '../../Redux/actions/profile';
import { toast } from 'react-hot-toast';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const { token } = useParams();

  const { loading, message, error } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetpassword(token, password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'profile/clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'profile/clearMessage' });
      navigate('/signin');
    }
  }, [dispatch, error, message, navigate]);

  return (
    <Container h={'90vh'} py={'16'}>
      <form onSubmit={submitHandler}>
        <Heading children='Reset Password' my='16' textAlign={['center', 'left']} />
        <FormLabel htmlFor='password' children={'Enter New Password'} />
        <Input
          required
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={'Enter new Password'}
          type='password'
          focusBorderColor='red.500'
        />
        <Button isLoading={loading} w={'full'} colorScheme='red' my={'4'} type='submit'>
          Change Password
        </Button>
      </form>
    </Container>
  );
};

export default ResetPassword;