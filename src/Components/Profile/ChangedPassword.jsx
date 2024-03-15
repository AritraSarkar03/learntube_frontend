import { Container, Heading, Input, VStack, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const ChangedPassword = () => {

  const [oldPassword,setOldPassword] = useState();
  const [newPassword,setNewPassword] = useState();

  return (
    <Container py={'16'} minH={'90vh'}>
      <form>
        <Heading
          textTransform={'uppercase'}
          my={'16'}
          textAlign={['center', 'left']}
          children="Change Password"
        />

        <VStack spacing={'8'}>
    
          <Input
            required
            id="password"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            placeholder={'Enter old Password'}
            type="password"
            focusBorderColor="red.500"
          />

<Input
            required
            id="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder={'Enter New Password'}
            type="password"
            focusBorderColor="red.500"
          />
   <Button w='full' colorScheme='red'>
       Change Password
   </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ChangedPassword;
