import { Grid, Input, Container, Heading, VStack, Select, Image, Button } from '@chakra-ui/react';
import React, { useState,useEffect } from 'react';
import cursor from '../../../Assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { fileUploadCss } from '../../Auth/Register';
import { createCourse } from '../../../Redux/actions/admin';
import { useDispatch,useSelector } from 'react-redux';
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [imagePrev, setImgPrev] = useState();
  const [image, setImg] = useState();
  const navigate = useNavigate();

  const { loading,error,message } = useSelector(state=>state.admin);
  const dispatch = useDispatch();

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

  useEffect(() => {
    if(error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if(message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
      navigate('/admin/admincourses');
    }
}, [dispatch, error, message]);



  const submitHandler = (e) =>{
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("title",title);
    myForm.append("description",description);
    myForm.append("category",category);
    myForm.append("createdBy",createdBy);
    myForm.append("file", image);
    
    dispatch(createCourse(myForm));
  }

  return (
    <Grid
      css={{
        cursor: `url(${cursor}), deafult`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Container py={'16'}>
        <form onSubmit={submitHandler}>
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

<Button width={'full'} colorScheme='orange' type='submit' isLoading={loading} >Create</Button>


          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
