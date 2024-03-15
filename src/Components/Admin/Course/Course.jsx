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
import React from 'react';
import cursor from '../../../Assets/images/cursor.png';
import Sidebar from '../Sidebar';
import CourseModal from '../CourseModal';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const Course = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const courses = [
    {
      _id: 'sdkdshfkj',
      title: 'Next.js Course',
      category: 'Web Development',
      poster: {
        url: 'https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_960_720.jpg',
      },
      createdBy: 'Aritra Sarkar',
      views: '1200',
      numOfVideos: '188',
    },
  ];

  const courseDetailHandler = userId => {
    onOpen();
  };

  const deleteLectureButtonhandler = (courseId, lectureId) => {
    console.log(courseId);
    console.log(lectureId);
  };

  const addLectureButtonhandler = (e,couseId,title,description,video) => {
 e.preventDefault();
  }

  const deleteHandler = userId => {
    console.log(userId);
  };

  return (
    <Grid
      css={{
        cursor: `url(${cursor}), deafult`,
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
              {courses.map(item => {
                return (
                  <Row
                    courseDetailHandler={courseDetailHandler}
                    deleteHandler={deleteHandler}
                    key={item._id}
                    item={item}
                  />
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>

        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          id={'hjdskjds'}
          courseTitle={'React Course'}
          deleteButtonhandler={deleteLectureButtonhandler}
          addButtonhandler={addLectureButtonhandler}
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Course;

function Row({ item, courseDetailHandler, deleteHandler }) {
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
            onClick={() => courseDetailHandler(item._id)}
            variant="outline"
            color="orange.500"
            children="View Lectures"
          />
          <Button onClick={() => deleteHandler(item._id)} color={'orange.600'}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
