import {
  Container,
  Heading,
  VStack,
  FormLabel,
  Input,
  Button,
  Box,
  Avatar,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/actions/user';

export const fileUploadCss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  width: '110%',
  border: 'none',
  height: '100%',
  color: '#FF4122',
  backgroundColor: 'white',
};

const fileUploadStyle = {
  '&::file-selector-button': fileUploadCss,
};

const Register = () => {
  const [name,  setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [imgPrev, setImgPrev] = useState();
  const [image, setImg] = useState();
  
  const changeImageHandle = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.readAsDataURL(file);
    
    reader.onloadend = () => {
      setImgPrev(reader.result);
      setImg(file);
    };
  };
  
  const dispatch = new useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("name",name);
    myForm.append("email",email);
    myForm.append("password",password);
    myForm.append("file", image);
    dispatch(register(myForm));
  };

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children={'Register to LearnTube'} />

        <form style={{ width: '100%' }} onSubmit={submitHandler}>
          <Box my={'4'} display={'flex'} justifyContent={'center'}>
            <Avatar src={imgPrev} size={'2xl'} />
          </Box>

          <FormLabel htmlFor="name" children={'Name'} />
          <Input
            required
            id="name"
            value={name}
            onChange={e =>  setName(e.target.value)}
            placeholder={'Enter your name'}
            type="text"
            focusBorderColor="red.500"
          />

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

          <FormLabel htmlFor="password" children={'Password'} />
          <Input
            required
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder={'Enter a Password'}
            type="password"
            focusBorderColor="red.500"
          />

          <Box my={'4'}>
            <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
            <Input
              accept="Image/*"
              onChange={changeImageHandle}
              required
              id="chooseAvatar"
              type="file"
              focusBorderColor="red.500"
              css={fileUploadStyle}
            />
          </Box>

          <Button colorScheme="red" my={'4'} type="submit">
            Sign Up
          </Button>
          <Box>
            Already a name?{' '}
            <Link to="/signin">
              <Button colorScheme="red" variant="link">
                Sign in
              </Button>
            </Link>{' '}
            here
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
