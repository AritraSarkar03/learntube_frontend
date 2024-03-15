import React, {useState} from 'react';
import { Container, Heading, FormLabel, Input, Button } from '@chakra-ui/react';
 import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const params = useParams();

     console.log(params.token)

  return (
    <Container h={'90vh'} py={'16'}>
      <form>
        <Heading children='Reset Password' my='16' textAlign={['center','left']} />
        <FormLabel htmlFor='password' children={'Enter New Password'} />
      <Input required id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder={'Enter new Password'} type='password' focusBorderColor='red.500'/>
      <Button w={'full'} colorScheme='red' my={'4'} type='submit'>Send Reset Link</Button>
      </form>
    </Container>
  )
}

export default ResetPassword
