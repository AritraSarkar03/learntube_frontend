import React from 'react';
import { Button, Heading, Link, Stack, VStack, Text, Box, HStack } from "@chakra-ui/react";
import './Home.css';
import { CgYoutube,CgGoogle } from  "react-icons/cg";
import { SiCoursera, SiUdemy } from  "react-icons/si";
import { DiAws } from  "react-icons/di";
// import logo from '../../Assets/images/logo.png'

const Home = () => {
  return (
    <section className='home'>
      <div className='container'>
        <Stack
          direction={['column', 'row']}
          height={'100%'}
          justifyContent={['center','space-between']}
          alignItems='center'
          spacing={['16' , '56']}
        >
          {/* <Image src={logo}  boxSize={'md'}/> */}
          <VStack width={'full'} alignItems={['center','flex-start']}>
            <Heading children="Learn from the Expert" size={'2xl'}/>
            <Text children="High value skills in a fair price"/>
            <Link to='/courses'>
            <Button size={'lg'} colorScheme='red'>Show courses</Button>
              </Link>
          </VStack>
        </Stack>
      </div>
          <Box padding={'8'} bg={'blackAlpha.800'}>
            <Heading children="Our Brands" size={'lg'}  color={'red.500'} textAlign={'center'} fontFamily={'body'}/>
            <HStack className='brands' justifyContent={'space-evenly'} mt={'4'}>
              <CgYoutube/>
              <CgGoogle/>
              <SiCoursera/>
              <SiUdemy/>
              <DiAws/>
            </HStack>
          </Box>
    </section>
  )
}

export default Home

