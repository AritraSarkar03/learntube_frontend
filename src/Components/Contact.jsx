import { Container, Heading, VStack, FormLabel, Input, Button, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {

    const [name, setName] = useState();
    const [message, setMessage] = useState();
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
      <FormLabel htmlFor='text' children={'Your Message'} />
      <Input  h={'20'}  required id='text' value={message} onChange={(e) => setMessage(e.target.value)} placeholder={'Enter Your Message'} type='text' focusBorderColor='red.500'/>
      <Button colorScheme='red' my={'4'} type='submit'>Send Message</Button>
      <Box>
        Asking for a new course? <Link to='/requestcourse'><Button variant={'link'} colorScheme='red' children={'Click'}/></Link>{' '} here
      </Box>
      </form>
    </VStack>
    </Container>
  )
}

export default Contact
