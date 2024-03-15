import { Box, Heading, VStack, Container, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <Container h='90vh' p='16' >
      
      <Heading my='8' textAlign={'center'}>You have a pro pack</Heading>
      <VStack boxShadow={'lg'} pb={'16'} alignItems={'center'} borderRadius={'lg'} >
        
        <Box w={'full'} bg={'red.500'} p={'4'} css={{ borderRadius: '8px 8px 0 0' }} >
            <Text color='black' fontWeight={'bold'} >Payment Success!</Text>
        </Box>
  <Box p={'4'} >
    <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'} >
        <Text>
            Congrats! You are a ultra pro member. You have access to premium content!!!
        </Text>
    </VStack>
  </Box>

  <Heading size={'4xl'}>
            <RiCheckboxCircleFill/>
        </Heading>

        <Link to={'/profile'}>
            <Button variant='ghost' >Go to profile</Button>
        </Link>

        <Heading size={'xs'}>Reference: somethingsomething</Heading>
      </VStack>
    </Container>
  )
}

export default PaymentSuccess
