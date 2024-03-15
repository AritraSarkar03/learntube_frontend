import { Container, Heading, Input, VStack, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changepassword } from '../../Redux/actions/profile';
import toast from 'react-hot-toast';

const ChangedPassword = () => {
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const { loading, message, error } = useSelector(state => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(changepassword(oldPassword, newPassword));
  };

  return (
    <Container py={'16'} minH={'90vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          textTransform={'uppercase'}
          my={'16'}
          textAlign={['center', 'left']}
          children="Change Password"
        />

        <VStack spacing={'8'}>
          <Input
            required
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder={'Enter old Password'}
            type="password"
            focusBorderColor="red.500"
          />

          <Input
            required
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder={'Enter New Password'}
            type="password"
            focusBorderColor="red.500"
          />

          <Button isLoading={loading} w="full" colorScheme="red" type="submit">
            Change Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ChangedPassword;
