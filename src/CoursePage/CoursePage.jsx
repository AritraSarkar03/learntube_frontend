import { Grid, Box, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import exVid from '../Assets/videos/exVid.mp4';

const CoursePage = () => {

  const [lectureNumber,setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: 'ysdgd',
      title: 'sample',
      description: "this is enough to make a grown man cry and that's okay",
      video: {
        url: 'somethimg',
      },
    },
    {
      _id: 'ysdgd',
      title: 'sample8',
      description: "this is enough to make a grown man cry and that's okay",
      video: {
        url: 'somethimg8',
      },
    },
    {
      _id: 'ysdgd',
      title: 'sample9',
      description: "this is enough to make a grown man cry and that's okay",
      video: {
        url: 'somethimg',
      },
    },
    {
      _id: 'ysdgd',
      title: 'sample10',
      description: "this is enough to make a grown man cry and that's okay",
      video: {
        url: 'somethimg',
      },
    },
  ];

  return (
    <Grid minH="90vh" templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={exVid}
        ></video>

        <Heading
          m="4"
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />

        <Heading m={'4'} children={lectures[lectureNumber].description} />

        <Text m="4" children="abol tabol kichhu akta" />
      </Box>

      <VStack>
        {lectures.map((element, index) => (
          <button
          onClick={()=>setLectureNumber(index)}
            key={element._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: '0',
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1} {element.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
