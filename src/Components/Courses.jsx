import { Button, Container, HStack, Heading, Input, Stack, Text, Image, VStack, Link } from '@chakra-ui/react';
import React, { useState } from 'react';
import './Home/Home.css';



const Course = ({views,title,id,addToPlaylist,ImgSrc,creator,description,lectureCount}) => {
  return (
    <VStack className='courses' paddingY={'2rem'} alignItems={['center','flex-start']}>
      <Image boxSize={'60'} objectFit={'contain'} src={ImgSrc} />
      <Heading fontSize='sm' textAlign={['center','left']} maxW={'200'} noOfLines={'2'} children={title}/>
      <Text noOfLines={'2'} children={description}/>
      <HStack>
      <Text fontWeight={'bold'} children={'CREATOR'}/>
      <Text textTransform={'uppercase'} children={creator}/>
      </HStack>
      <Heading fontSize='xs' textTransform={'uppercase'} children={`lectures- ${lectureCount}`}/>
      <Heading fontSize='xs' children={`Views- ${views}`}/>
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
        <Button size={'sm'} children={'Watch NOW'} colorScheme='red' />
        <Button marginLeft={'6px'} size={'sm'} children={'Add to Playlist'} onClick={()=>{addToPlaylist(id)}}/>
        </Link>
      </Stack>
    </VStack>
  )
}

const Courses = () => {
  const [keyword, setKeyword] = useState();
  const [category, setCategory] = useState();

  const addToPlaylist = () => {
    console.log('added bhai added!')
  }

  const categories = [
    'Web Development',
    'App Development',
     'Digital Marketing',
     'Machine Learning',
      'VFX Mastery',
      'Photography',
      'Data Structure',
      'Photoshop',
      'Cooking Basics'
  ]
  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'10'}>
      <Heading children="All Courses" m={'8'} />
      <Input
        value={keyword}
        placeholder="Search courses"
        onChange={(e) => setKeyword(e.target.value)}
      />
      
      <HStack overflowX={'auto'} paddingY={'8px'} css={{"&::-webkit-scrollbar":{display: "none"}}}>
      {categories.map((item,index) => {
        return <Button key={index} onClick={()=>{setCategory(item)}} minW={'60'}>
          <Text children={item}/>
          </Button>
      }
      )};
      </HStack>
      <Stack
      direction={['column','row']}
      flexWrap={'wrap'}
      justifyContent={['flex-start','space-evenly']}
      alignItems={['center','flex-start']}
      >
        <Course 
        views={'100'}
        title={'sample'}
        id={'sample'}
        ImgSrc={'https://pixabay.com/images/id-7927866/'}
        creator={'sample'}
        description={'sample'}
        lectureCount={'8'}
        addToPlaylist={addToPlaylist}
        />
      </Stack>

    </Container>
  );
};

export default Courses;
