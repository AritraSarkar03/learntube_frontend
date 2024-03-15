import {
  Grid,
  Box,
  Heading,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
  HStack,
  Button,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import cursor from '../../../Assets/images/cursor.png';
import Sidebar from '../Sidebar';
import CourseModal from '../CourseModal';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useSelector,useDispatch } from 'react-redux';
import {getAllCourses,getCourseLectures} from '../../../Redux/actions/course';
import {deleteCourse,addLectures, deleteLectures} from '../../../Redux/actions/admin';
import {toast} from 'react-hot-toast';

const Course = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const [courseId, setCourseId] = useState("");
  const [courseTitle, setCourseTitle] = useState("");

  const {course,lectures} = useSelector(state=>state.course)

  const {loading,error,message} = useSelector(state=>state.admin)
  
  const courseDetailHandler = courseId => {
    dispatch(getCourseLectures(courseId));
    onOpen();
    setCourseId(courseId);
    setCourseTitle(courseTitle);
  };
  
  const deleteLectureButtonhandler = async (courseId, lectureId) => {
     dispatch(deleteLectures(courseId, lectureId));
  };
  
  const addLectureButtonhandler = async (e,courseId,title,description,video) => {
    e.preventDefault();
    const myForm = new FormData();
    
    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("file", video);
    
    await dispatch(addLectures(courseId, myForm));
    dispatch(getCourseLectures(courseId));
  }
  
  const deleteHandler = courseId => {
    dispatch(deleteCourse(courseId))
  };
  
  useEffect(()=>{
    if(error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if(message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    dispatch(getAllCourses());
    console.log(course)
  }, [dispatch,error,message]);
  return (
    <Grid
      css={{
        cursor: `url(${cursor}), default`,
      }}
      minH={'100vw'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box padding={['0', '8']} overflowX={'auto'}>
        <Heading
          textTransform={'uppercase'}
          children="All Users"
          my={'16'}
          textAlign={['center', 'left']}
        />
        <TableContainer w={['100vh', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All Available courses in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {course && course.map(item => {
                return (
                  <Row
                    courseDetailHandler={courseDetailHandler}
                    deleteHandler={deleteHandler}
                    key={item._id}
                    item={item}
                    loading={loading}
                  />
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>

        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          id={courseId}
          courseTitle={courseTitle}
          deleteButtonhandler={deleteLectureButtonhandler}
          addLectureHandler={addLectureButtonhandler}
          lectures={lectures}
          loading={loading}
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Course;

function Row({ item, courseDetailHandler, deleteHandler,loading }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => courseDetailHandler(item._id,item.title)}
            variant="outline"
            color="orange.500"
            children="View Lectures"
            isLoading={loading}
          />
          <Button onClick={() => deleteHandler(item._id)} color={'orange.600'}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
