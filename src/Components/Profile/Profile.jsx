import { fileUploadCss } from '../Auth/Register';
import {
  Avatar,
  Container,
  HStack,
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
  useDisclosure,
  ModalHeader,
} from '@chakra-ui/react';
import { RiDeleteBin7Fill } from 'react-icons/ri'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const user = {
    name: 'Aritra Sarkar',
    email: 'aritra@gmail.com',
    createdAt: String(new Date().toISOString()),
    role: 'user',
    subscription: {
      status: 'active',
    },
    playlist: [
      {
        course: 'something',
        poster: 'another',
      },
    ],
  };


  const removeFromPlaylistHandler = (id) => {
    console.log('ui ma')
  };

 const changeImageSubmitHandler = (e, image) =>{
  e.preventDefault();
  console.log(image)
 }

  const { isOpen,onClose,onOpen } = useDisclosure()

  return (
    <Container h={'95vh'} maxW="container.lg" py="8">
      <Heading children="Profile" m="8" textTransform={'uppercase'} />

      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding={'8'}
      >
        <VStack>
          <Avatar boxSize={'48'} />
          <Button onClick={onOpen} colorScheme="red" variant="ghost" children="Change Photo" />
        </VStack>

        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight="bold" />
            <Text children={user.name} />
          </HStack>
          {''}
          <HStack>
            <Text children="Email" fontWeight="bold" />
            <Text children={user.email} />
          </HStack>
          {''}
          <HStack>
            <Text children="Created At" fontWeight="bold" />
            <Text children={user.createdAt.split('T')[0]} />
          </HStack>
          {''}
          {user.role !== 'admin' && (
            <HStack>
              <Text children="Subscription" fontWeight="bold" />
              {user.subscription.status === 'active' ? (
                <Button color={'red.500'} variant={'unstyled'}>
                  Cancel Subscription
                </Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme="red">Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}

          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to={'/updateprofile'}>
              <Button>Update Profile</Button>
            </Link>
            <Link to={'/changepassword'}>
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <Heading children="Playlist" size={'md'} my={'8'} />
      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          p="4"
        >
          {user.playlist.map((element, index) => (
            <VStack w={'48'} m='2' key={element.course} >
              <HStack><Image boxSize={'full'} objectFit={'contain'} src={element.poster} ></Image></HStack>
           <HStack>
           <Link to={`/course/${element.course}`}>

<Button variant={'ghost'} colorScheme='red' >Watch Now</Button>

            </Link>
            <Button onClick={()=>removeFromPlaylistHandler(element.course)} >
              <RiDeleteBin7Fill />
            </Button>
           </HStack>
            </VStack>

          ))}
        </Stack>
      )}

  <ChangePhotoBox changeImageSubmitHandler={changeImageSubmitHandler} isOpen={isOpen} onClose={onClose} />

    </Container>
  );
};

export default Profile;


function ChangePhotoBox({isOpen,onClose,changeImageSubmitHandler}) {

  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');

const ChangeImage = (e) => {
  
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onloadend = () => {
   setImagePrev(reader.result);
   setImage(file);
  }
}

const closeHandler = () => {
  onClose();
  setImagePrev('');
  setImage('');
}

  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdrop={'blur(10px)'} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
         
         <Container>

         <form onSubmit={(e)=>changeImageSubmitHandler(e,image)}>

          <VStack spacing={'8'} >
            {
              imagePrev && <Avatar src={imagePrev} boxSize={'48'} />
            }
            <Input type='file' css={{'&::file-selector-button':fileUploadCss}} onChange={ChangeImage} />
            <Button w='full' colorScheme='red' type='submit' >Change</Button>
          </VStack>
         </form>

         </Container>


        </ModalBody>

        <ModalFooter>
          <Button mr='3' onClick={onClose} >Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

