import { Container, Heading, VStack, FormLabel, Input, Button, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { contactUs } from '../Redux/actions/other';
import { toast } from 'react-hot-toast'

const Contact = () => {

    const [name, setName] = useState();
    const [message, setMessage] = useState();
    const [email, setEmail] = useState();

    const dispatch = useDispatch();

    const {loading, error, message: stateMessage } = useSelector(state=>state.other);

    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(contactUs(name,email,message));
    }

    useEffect(()=>{
      if(error) {
        toast.error(error);
        dispatch({ type: 'clearError' });
      }
      if(stateMessage) {
        toast.success(stateMessage);
        dispatch({ type: 'clearMessage' });
      }
    }, [dispatch,error,stateMessage]);

  return (
    <Container h={'90vh'}>
       <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
     <Heading children={'Welcome to LearnTube'}/>
     <form onSubmit={submitHandler} style={{ width: '100%' }}>
      <FormLabel htmlFor='text' children={'Your Name'} />
      <Input required id='text' value={name} onChange={(e) => setName(e.target.value)} placeholder={'Enter Your Name'} type='text' focusBorderColor='red.500'/>
      <FormLabel htmlFor='email' children={'Email Address'} />
      <Input required id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'Enter your Email'} type='email' focusBorderColor='red.500'/>
      <FormLabel htmlFor='text' children={'Your Message'} />
      <Input  h={'20'}  required id='text' value={message} onChange={(e) => setMessage(e.target.value)} placeholder={'Enter Your Message'} type='text' focusBorderColor='red.500'/>
      <Button isLoading={loading} colorScheme='red' my={'4'} type='submit'>Send Message</Button>
      <Box>
        Asking for a new course? <Link to='/requestcourse'><Button variant={'link'} colorScheme='red' children={'Click'}/></Link>{' '} here
      </Box>
      </form>
    </VStack>
    </Container>
  )
}

export default Contact
