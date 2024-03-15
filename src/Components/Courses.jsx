import { Button, Container, HStack, Heading, Input, Stack, Text, Image, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../Redux/actions/course';
import { toast } from 'react-hot-toast';
import { addToPlaylist } from '../Redux/actions/user'
import './Home/Home.css';

const Course = ({views,title,id,addToPlaylistHandler,ImgSrc,creator,description,lectureCount}) => {
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
        <Link to={`/courses/${id}`}>
        <Button size={'sm'} children={'Watch NOW'} colorScheme='red' />
        </Link>
        <Button marginLeft={'6px'} size={'sm'} children={'Add to Playlist'} onClick={()=>{addToPlaylistHandler(id)}}/>
      </Stack>
    </VStack>
  ) 
}

const Courses = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const {loading,course,error} = useSelector(state=>state.course)

  const addToPlaylistHandler = courseId => {
    dispatch(addToPlaylist(courseId))
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

  useEffect(() => {
    dispatch(getAllCourses(category,keyword));
    if(error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
  }, [category,keyword,dispatch]);

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
        {
  course && course.map((item) => (
    <Course 
      key={item._id}
      title={item.title}
      description={item.description}
      views={item.views}
      ImgSrc={item.poster.url}
      id={item._id}
      creator={item.createdBy}
      lectureCount={item.numOfVideos}
      addToPlaylistHandler={addToPlaylistHandler}
    />
  ))
}
        {/* : <Heading opacity={0.5} mt="4" children="Course Not Found"/> */}
      </Stack>

    </Container>
  );
};

export default Courses;
