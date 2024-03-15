import { Grid, Input, Container, Heading, VStack, Select, Image, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import cursor from '../../../Assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { fileUploadCss } from '../../Auth/Register';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [imagePrev, setImgPrev] = useState();
  const [image, setImg] = useState();

  const changeImageHandle = e => {


    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImgPrev(reader.result);
      setImg(file);
    };
  };

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


  return (
    <Grid
      css={{
        cursor: `url(${cursor}), deafult`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Container py={'16'}>
        <form>
          <Heading
            textTransform={'uppercase'}
            children="Create course"
            my="16"
            textAlign={['center', 'left']}
          />

          <VStack m={'auto'} spacing={'8'}>
             <Input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder={'Enter Name'}
              type="text"
              focusBorderColor="orange.500"
            />
            <Input
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder={'Write Description'}
              type="text"
              focusBorderColor="orange.500"
            />
             <Input
              value={createdBy}
              onChange={e => setCreatedBy(e.target.value)}
              placeholder={'Creator..'}
              type="text"
              focusBorderColor="orange.500"
            />
             <Select focusBorderColor='orange.500' value={category} 
             onChange={e => setCategory(e.target.value)}
             >
              <option value=''>Category</option>

              {categories.map(item=> (
                 <option key={item} value={item}>{item}</option>
              ))}
             </Select>

             <Input
              accept="Image/*"
              onChange={changeImageHandle}
              required
              id="chooseAvatar"
              type="file"
              focusBorderColor="orange.500"
              css={{
                '&::file-selector-button': {
                  ...fileUploadCss,
                  color: 'orange',
                }
              }}
            />

{imagePrev && (
  <Image src={imagePrev} boxSize='64' objectFit='contain' />
)}

<Button width={'full'} colorScheme='orange' type='submit' >Create</Button>


          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
