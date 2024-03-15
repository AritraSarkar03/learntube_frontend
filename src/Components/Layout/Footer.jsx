import { Stack, VStack, Heading, Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { TiSocialYoutube, TiSocialInstagramCircular } from 'react-icons/ti'
import { DiGithubBadge } from 'react-icons/di'

const Footer = () => {
  return (
    <Box bg={'blackAlpha.900'} padding={'4'} h={'10vh'}>
      <Stack direction={['column','row']} >
        <VStack alignItems={['center','flex-start']} width={'full'} >
            <Heading color={'white'} children={'AllRights Reserved'}/>
            <Heading size={'sm'} color={'white'} children={'@Aritra Sarkar'}/>
        </VStack>
        <HStack spacing={['2','10']} justifyItems={'center'} color={'white'} fontSize={'50'}>
           <a href='https://youtube.com' target='blank'>
            <TiSocialYoutube/>
           </a>
           <a href='https://instagram.com' target='blank'>
            <TiSocialInstagramCircular/>
           </a>
           <a href='https://github.com' target='blank'>
             <DiGithubBadge/>
           </a>
        </HStack>
      </Stack>
    </Box>
  )
}

export default Footer


