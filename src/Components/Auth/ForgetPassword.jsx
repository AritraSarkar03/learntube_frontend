import React, {useState} from 'react';
import { Container, Heading, FormLabel, Input, Button } from '@chakra-ui/react'

const ForgetPassword = () => {
    const [email, setEmail] = useState();

  return (
    <Container h={'90vh'} py={'16'}>
      <form>
        <Heading children='Forget Password' my='16' textAlign={['center','left']} />
        <FormLabel htmlFor='email' children={'Email Address'} />
      <Input required id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'Enter your Email'} type='email' focusBorderColor='red.500'/>
      <Button w={'full'} colorScheme='red' my={'4'} type='submit'>Send Reset Link</Button>
      </form>
    </Container>
  )
}

export default ForgetPassword
