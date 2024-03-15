import React from 'react';
import { HStack, VStack, useDisclosure } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiDashboardFill, RiLogoutBoxLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../Redux/actions/user';

const Header = ({isAuthenticated,user}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();
  const logoutHandler = () => {
    onClose();
    dispatch(logout());
  };

  const LinkButton = ({ url, title }, onClose) => (
    <Link to={url}>
      <Button onClick={onClose} variant="ghost">{title}</Button>
    </Link>
  );
  return (
    <div>
      <Button
        onClick={onOpen}
        colorScheme={'red'}
        width="12"
        zIndex={'overlay'}
        height={'12'}
        rounded={'full'}
        position={'fixed'}
        top={'4'}
        left={'6'}
      >
        <AiOutlineMenu />
      </Button>
      <ColorModeSwitcher />
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth={'1px'}>LearnTube</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'} spacing={'4'}>
              <LinkButton url="/" title="Home" />
              <LinkButton url="/courses" title="Browse Courses" />
              <LinkButton url="/requestcourse" title="Request for a Course" />
              <LinkButton url="/contactus" title="Contact Us" />
              <LinkButton url="/about" title="About Us" />
            </VStack>
            <HStack position={'absolute'} bottom={'2rem'} justifyContent={'space-evenly'} width={'80%'}>
              {isAuthenticated?
              (<VStack>
              <HStack justifyContent={'space-evenly'}>
              <Link to='/profile'>
              <Button onClick={onClose}  colorScheme="red" variant="outline">
                Profile
              </Button>
              </Link>
              <Button onClick={logoutHandler} >
                <RiLogoutBoxLine/>
                Sign out
              </Button>
              </HStack>

              { user && user.role === 'admin' && (
                <Link to='/admin/dashboard'>
                <Button onClick={onClose}  colorScheme="red" variant="ghost">
                  <RiDashboardFill style={{margin:'4px'}}/>
                  Dashboard
                </Button>
                </Link>
              )}
              </VStack>
              ) : (
                <>
                <HStack>
                <Link to='/signin'>
                <Button onClick={onClose}  colorScheme="red" variant="outline">
                  Sign in
                </Button>
                </Link>
                <p>OR</p>
                <Link to='/register'>
                <Button onClick={onClose}  colorScheme="red" variant="outline">
                  Sign up
                </Button>
                </Link>
                </HStack>
                </>
              )
              }
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Header;
