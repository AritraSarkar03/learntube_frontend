import { Grid, Box, Heading, TableContainer, Table, TableCaption, Thead, Th, Tr, Tbody, Td, HStack, Button } from '@chakra-ui/react'
import React, { useEffect } from 'react';
import cursor from '../../../Assets/images/cursor.png';
import Sidebar from '../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getAllUsers, updateUserRole } from '../../../Redux/actions/admin';
import toast from 'react-hot-toast';
import { getAllCourses } from '../../../Redux/actions/course';

const User = () => {

  const dispatch = useDispatch();

  const { user, loading, error, message } = useSelector(state => state.admin);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    dispatch(getAllCourses());

    dispatch(getAllUsers());
  }, [dispatch, error, message]);


  const updateHandler = userId => {
    dispatch(updateUserRole(userId));
  };

  const deleteHandler = userId => {
    dispatch(deleteUser(userId));
  };

  return (
    <Grid css={{
      cursor: `url(${cursor}), deafult`,
    }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box padding={['0', '16']} overflowX={'auto'} >
        <Heading textTransform={'uppercase'} children='All Users' my={'16'} textAlign={['center', 'left']} />
        <TableContainer w={['100vh', 'full']} >

          <Table variant={'simple'} size={'lg'}>

            <TableCaption>All Available users in the database</TableCaption>

            <Thead>

              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th status='active'>Subscription</Th>
                <Th isNumeric>Action</Th>


              </Tr>

            </Thead>

            <Tbody>

              {
                user && user.map(item => {
                  return <Row updateHandler={updateHandler} deleteHandler={deleteHandler} key={item._id} item={item} loading={loading} />
                })
              }

            </Tbody>

          </Table>

        </TableContainer>
      </Box>

      <Sidebar />
    </Grid>
  )
}

export default User;

function Row({ item, updateHandler, deleteHandler,loading }) {
  return (
    <Tr>

      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription && item.subscription.status === 'active' ? 'Active' : 'Not Active'}</Td>


      <Td isNumeric>
        <HStack justifyContent={'flex-end'} >

          <Button onClick={() => updateHandler(item._id)} variant='outline'
            color='orange.500' children='Change Role' isLoading={loading} />
          <Button onClick={() => deleteHandler(item._id)} color={'orange.600'} isLoading={loading} >
            <RiDeleteBin7Fill />
          </Button>

        </HStack>
      </Td>

    </Tr>
  );
}
