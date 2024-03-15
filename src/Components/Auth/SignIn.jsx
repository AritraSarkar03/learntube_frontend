import {
  Container,
  Heading,
  VStack,
  FormLabel,
  Input,
  Button,
  Box,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../Redux/actions/user';

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children={'Welcome to LearnTube'} />
        <form onSubmit={submitHandler} style={{ width: '100%' }}>
        <Box my={'4'}>
          <FormLabel htmlFor="email" children={'Email Address'} />
          <Input
            required
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={'Enter your Email'}
            type="email"
            focusBorderColor="red.500"
          />
          </Box>
         <Box my={'4'}>
         <FormLabel htmlFor="password" children={'Password'} />
          <Input
            required
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder={'Enter the Password please'}
            type="password"
            focusBorderColor="red.500"
          />
         </Box>
          <Box>
            <Link to="/forgetpassword">
              <Button
                variant={'link'}
                fontSize={'sm'}
                children={'forget password?'}
              />
            </Link>
          </Box>
          <Button colorScheme="red" my={'4'} type="submit">
            Sign In
          </Button>
          <Box>
            New User?{' '}
            <Link to="/register">
              <Button variant={'link'} colorScheme="red" children={'Sign Up'} />
            </Link>{' '}
            here
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default SignIn;
