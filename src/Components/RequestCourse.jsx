import { Container, Heading, VStack, FormLabel, Input, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
// import { Link } from 'react-router-dom';

const RequestCourse = () => {
    const [name, setName] = useState();
    const [request, setRequest] = useState();
    const [email, setEmail] = useState();

  return (
    <Container h={'90vh'}>
       <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
     <Heading children={'Welcome to LearnTube'}/>
     <form style={{ width: '100%' }}>
      <FormLabel htmlFor='text' children={'Your Name'} />
      <Input required id='text' value={name} onChange={(e) => setName(e.target.value)} placeholder={'Enter Your Name'} type='text' focusBorderColor='red.500'/>
      <FormLabel htmlFor='email' children={'Email Address'} />
      <Input required id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'Enter your Email'} type='email' focusBorderColor='red.500'/>
      <FormLabel htmlFor='text' children={'Your Request'} />
      <Input required id='text' value={request} onChange={(e) => setRequest(e.target.value)} placeholder={'Type Your Request'} type='text' focusBorderColor='red.500'/>
      <Button colorScheme='red' my={'4'} type='submit'>Send Request</Button>
      </form>
    </VStack>
    </Container>
  )
}

export default RequestCourse
