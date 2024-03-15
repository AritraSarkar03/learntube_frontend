import { Avatar, Container, VStack, Text, Heading, Stack, Button, HStack, Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndCondition from '../Assets/docs/termAndCondition';

const Founder = () => (
    <Stack direction={['column','row']} spacing={['4','16']} padding={'8'}>
       <VStack>
        <Avatar boxSize={['40','48']}/>
        <Text children='Co-founder' opacity={'0.7'}/>
      </VStack>
    
      <VStack>
        <Heading children={'Aritra Sarkar'} size={['md','xl']} />
        <Text textAlign={['center','left']} children={'A developer who love developing cause is unknown to him,A developer who love developing cause is unknown to him,A developer who love developing cause is unknown to him,A developer who love developing cause is unknown to him'}/>
      </VStack>

    </Stack>
);


const TandC = ({termsAndCondition}) => (
     <Box>
       <Heading size={'md'} children={'Terms & Condition'} textAlign={['center','left']} my={'4'} /> 
    
      <Box h={'sm'} p={'4'} overflowY={'scroll'} >
        <Text textAlign={['center','left']} letterSpacing={'widest'}>{termsAndCondition}</Text>
        <Heading my={'4'} size={'xs'} children={'Refund only available with 7 days.'}/>
      </Box>
     </Box>
);



const AboutUs = () => {
  return (
    <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
      <Heading children='About Us' textAlign={['center', 'left']}/>
      <Founder/>
      
      <Stack m={'8'} direction={['column','row']} alignItems={'center'} >
         <Text>
            Worlds No.1 video streaming platform where you can find the ulmitate courses available only for premium members. Our courses is soo premium you cant find something like this! Mein likhke deta hoon dhoondne par bhi nahi milega!!!
         </Text>

         <Link to='/subscribe'>
            <Button variant={'ghost'} colorScheme='red'>
                Checkout Our Platform
            </Button>
         </Link>
      </Stack>

     <TandC termsAndCondition={termsAndCondition}></TandC>


       <HStack my={'4'} p={'4'}>
        <RiSecurePaymentFill/>
        <Heading size={'xs'} fontFamily={'sans-serif'} textTransform={'uppercase'} children='Payment is secured by Razorpay' />
       </HStack>

    </Container>
  )
}

export default AboutUs
