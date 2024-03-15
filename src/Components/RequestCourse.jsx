import { Container, Heading, VStack, FormLabel, Input, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { courseRequest } from '../Redux/actions/other';
import { toast } from 'react-hot-toast'
// import { Link } from 'react-router-dom';

const RequestCourse = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [course, setCourse] = useState();

    const dispatch = useDispatch();
    
    const {loading, error, message: stateMessage } = useSelector(state=>state.other);

    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(courseRequest(name,email,course));
    }

    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch({ type: 'clearError' });
      }
      if (stateMessage) {
        toast.success(stateMessage);
        dispatch({ type: 'clearMessage' });
      }
    }, [dispatch, error, stateMessage]);
    

  return (
    <Container h={'90vh'}>
       <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
     <Heading children={'Welcome to LearnTube'}/>
     <form onSubmit={submitHandler} style={{ width: '100%' }}>
      <FormLabel htmlFor='text' children={'Your Name'} />
      <Input required id='text' value={name} onChange={(e) => setName(e.target.value)} placeholder={'Enter Your Name'} type='text' focusBorderColor='red.500'/>
      <FormLabel htmlFor='email' children={'Email Address'} />
      <Input required id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'Enter your Email'} type='email' focusBorderColor='red.500'/>
      <FormLabel htmlFor='text' children={'Your Request'} />
      <Input required id='text' value={course} onChange={(e) => setCourse(e.target.value)} placeholder={'Type Your Request'} type='text' focusBorderColor='red.500'/>
      <Button isLoading={loading} colorScheme='red' my={'4'} type='submit'>Send Request</Button>
      </form>
    </VStack>
    </Container>
  )
}

export default RequestCourse
