import {
  Container,
  Heading,
  Box,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';
import React from 'react';

const Subscribe = () => {
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
          <Button my={'8'} w="full" colorScheme="red">
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
