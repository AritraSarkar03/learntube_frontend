import {
  Container,
  Heading,
  Box,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { server } from '../../Redux/Store';
import { useDispatch,useSelector } from 'react-redux';
import { buySubscription } from '../../Redux/actions/user';
import { toast } from 'react-hot-toast';

const Subscribe = ({user}) => {
  const dispatch = useDispatch();
  const { error:courseError } = useSelector(state=>state.course);
  const [key,setKey] = useState();
  
  const {loading,error,subscriptionId} = useSelector(state=>state.subscription);

  const onClickHandler = async () => {
    const {data} = await axios.get(`${server}/razorpaykey`);
    setKey(data.key);
    if (!key) {
      console.log("key");
    }
    dispatch(buySubscription());
  };

  useEffect(() => {
    if(error) {
      toast.error(courseError);
      // dispatch({ type: 'clearError' });
    }
    if(courseError) {
      toast.error(error);
      // dispatch({ type: 'clearError' });
    }
    if(subscriptionId) {
      const openPopUp = ()=>{
        const options = {
          key,
          name: "Learntube",
          description:"Get access to all premium content",
          subscription_id:subscriptionId,
          callback_url:`${server}/paymentverification`,
          prefill:{
            name:user.name,
            email:user.email,
            contact:""
          },
          notes:{
            address:"Aritra Sarkar"
          },
          theme:{
            color: "#ff2c2c"
          }
        };

        const  razor = new window.Razorpay(options);
        razor.open();
      };
      openPopUp();
    }
  }, [dispatch,error,courseError,user.name,user.email,key,subscriptionId]);

  return (
    <Container h={'90vh'} padding={'16'}>
      <Heading children={'Join LearnTube'} my={'8'} textAlign={'center'} />
      <VStack
        boxShadow={'lg'}
        alignItems={'stretch'}
        borderRadius={'lg'}
        spacing={'0'}
      >
        <Box bg={'red.500'} p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
          <Text
            color="black"
            fontWeight={'bold'}
            children={'Pro Pack - ₹299'}
          />
        </Box>
        <Box p="4">
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text
              children={'Join Pro to get access to all content  🗿'}
            />
            <Heading size={'md'} children="₹299 only" />
          </VStack>
          <Button isLoading={loading} my={'8'} w="full" colorScheme="red" onClick={onClickHandler}>
            Buy Now
          </Button>
        </Box>

        <Box
          bg="blackAlpha.600"
          p={'4'}
          css={{ borderRadius: ' 0 0 8px 8px ' }}
        >
          <Heading
            color={'white'}
            textTransform={'uppercase'}
            size={'sm'}
            children="50% refund at cancellation"
          />

          <Text fontSize={'xs'} color={'white'}  children={'*Terms & Condition Apply'}/>
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
