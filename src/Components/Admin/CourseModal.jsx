import {
  Box,
  Grid,
  Heading,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  Stack,
  Button,
  Text,
  VStack,
  Input,
  ModalFooter,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { fileUploadCss } from '../Auth/Register';

const CourseModal = ({
  isOpen,
  onClose,
  id,
  deleteButtonhandler,
  addLectureHandler,
  courseTitle,
  lectures = [],
  loading
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');
  const [videoPrev, setVideoPrev] = useState('');

  const handleClose = () => {
    setTitle('');
    setDescription('');
    setVideo('');
    setVideoPrev("");
    onClose();
  }

  const changeVideoHandle = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };

  return (
    <Modal isOpen={isOpen} size={'full'} onClose={handleClose} scrollBehavior='inside'>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>

        <ModalCloseButton />

        <ModalBody p="16">
          <Grid templateColumns={['1fr', '3fr 1fr']}>
            <Box px={['0', '16']}>
              <Box my={'5'}>
                <Heading children={courseTitle} />
                <Heading children={`#${id}`} size={'sm'} opacity={0.4} />
              </Box>

              <Heading children="Lectures" size={'lg'} />

             {
              lectures.map((item,i) => (
                <VideoCard
                key={i}
                title={item.title}
                description={item.description}
                num={i + 1}
                lectureId={item._id}
                courseId={id}
                deleteButtonhandler={deleteButtonhandler}
                isLoading={loading}
              />
              ))
             }
            </Box>

            <Box>
              <form
                onSubmit={e =>
                  addLectureHandler(e, id, title, description, video)
                }
              >
                <VStack spacing={'4'}>
                  <Heading
                    children="Add Lecture"
                    size={'md'}
                    textTransform={'uppercase'}
                  />
                  <Input
                    focusBorderColor="orange.300"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                  <Input
                    focusBorderColor="orange.300"
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                  <Input
                    accept="video/mp4"
                    onChange={changeVideoHandle}
                    required
                    type="file"
                    focusBorderColor="orange.500"
                    css={{
                      '&::file-selector-button': {
                        ...fileUploadCss,
                        color: 'orange',
                      },
                    }}
                  />
                  {videoPrev && (
                    <video
                      controlsList="nodownload"
                      controls
                      src={videoPrev}
                    ></video>
                  )}

                  <Button w={'full'} colorScheme='orange' type='submit' isLoading={loading} >Upload</Button>


                </VStack>
              </form>
            </Box>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleClose} >Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CourseModal;

function VideoCard({
  title,
  description,
  num,
  lectureId,
  courseId,
  deleteButtonhandler,
  loading
}) {
  return (
    <Stack
      direction={['column', 'row']}
      my="8"
      borderRadius="lg"
      boxShadow={'0 0 10px rgba(255, 145, 0, 0.5)'}
      justifyContent={['flex-start', 'space-between']}
      p={['4', '8']}
    >
      <Box>
        <Heading size={'sm'} children={`#${num} ${title}`} />
        <Text children={description} />
      </Box>

      <Button
        color={'orange.600'}
        onClick={() => deleteButtonhandler(courseId, lectureId)}
        isLoading={loading} 
      >
        <RiDeleteBin7Line />
      </Button>
    </Stack>
  );
}
