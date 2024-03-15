import { Grid, Box, Heading, TableContainer, Table, TableCaption, Thead, Th, Tr, Tbody, Td, HStack, Button } from '@chakra-ui/react'
import React from 'react';
import cursor from '../../../Assets/images/cursor.png';
import Sidebar from '../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri';

const User = () => {

  const users = [{
     _id: 'sdkdshfkj',
     name: 'Aritra',
     role: 'admin',
     subscription: {
      status:'active'
     },
     email: 'abc@gmail.com'
  }];


  const updateHandler = userId => {
    console.log(userId);
  };

  const deleteHandler = userId => {
    console.log(userId);
  };

  return (
    <Grid css={{
        cursor: `url(${cursor}), deafult`,
    }}
    minH={'100vw'}
    templateColumns={['1fr','5fr 1fr']}
    >
      <Box padding={['0','16']} overflowX={'auto'} > 
        <Heading textTransform={'uppercase'} children='All Users' my={'16'} textAlign={['center','left']} />
        <TableContainer w={['100vh','full']} >

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
  users.map(item=>{
   return <Row updateHandler={updateHandler} deleteHandler={deleteHandler} key={item._id} item={item} />
  })
}

 </Tbody>

</Table>

        </TableContainer>
      </Box>
      <Sidebar/>
    </Grid>
  )
}

export default User;

function Row({ item, updateHandler, deleteHandler }) {
  return (
    <Tr>

<Td>#{item._id}</Td>
<Td>{item.name}</Td>
<Td>{item.email}</Td>
<Td>{item.role}</Td>
<Td>{item.subscription.status==='active'? 'Active' : 'Not Active'}</Td>


<Td isNumeric>
  <HStack justifyContent={'flex-end'} >
   
<Button onClick={()=> updateHandler(item._id)} variant='outline' color='orange.500' children='Change Role' />
<Button onClick={()=> deleteHandler(item._id)} color={'orange.600'} >
  <RiDeleteBin7Fill/>
</Button>

  </HStack>
</Td>

    </Tr>
  );
}
