import React, {useState,useEffect} from 'react';
import { Container, Heading, FormLabel, Input, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { forgetpassword } from '../../Redux/actions/profile'
import { toast } from 'react-hot-toast';

const ForgetPassword = () => {
    const [email, setEmail] = useState();

    const {loading,message,error} = useSelector(state=>state.profile);

    const dispatch = useDispatch();
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(forgetpassword(email));
    };

    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch({ type: 'clearError' }); // Corrected
      }
      if (message) {
        toast.success(message); // Use success instead of error for success message
        dispatch({ type: 'clearMessage' }); // Corrected
      }
    }, [dispatch, error, message]);
    

  return (
    <Container h={'90vh'} py={'16'}>
      <form onSubmit={submitHandler}>
        <Heading children='Forget Password' my='16' textAlign={['center','left']} />
        <FormLabel htmlFor='email' children={'Email Address'} />
      <Input required id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'Enter your Email'} type='email' focusBorderColor='red.500'/>
      <Button isLoading={loading} w={'full'} colorScheme='red' my={'4'} type='submit'>Send Reset Link</Button>
      </form>
    </Container>
  )
}

export default ForgetPassword
