import { Heading, VStack, Container, Button } from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container h='90vh' >
      
      <VStack justifyContent={'center'} h='full' spacing={'4'} >
        <RiErrorWarningFill size={'5rem'}/>
      <Heading textTransform={'uppercase'} >Payment Fail</Heading>
        

        <Link to='/'>
            <Button variant='ghost' >Try Again</Button>
        </Link>
      </VStack>
    </Container>
  )
}

export default NotFound
