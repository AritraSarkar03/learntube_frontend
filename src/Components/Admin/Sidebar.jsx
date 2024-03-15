import { VStack, Button } from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  RiAddCircleFill,
  RiDashboardFill,
  RiEyeFill,
  RiUser3Fill,
} from 'react-icons/ri';

const Sidebar = () => {
  const location = useLocation();

  return (
    <VStack
      spacing={'8'}
      p={'16'}
      boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    >
      <LinkButton
        Icon={RiDashboardFill}
        text="Dashboard"
        url="dashboard"
        active={location.pathname === '/admin/dashboard'}
      />
      <LinkButton
        Icon={RiAddCircleFill}
        text="Create Course"
        url="createcourse"
        active={location.pathname === '/admin/createcourse'}
      />
      <LinkButton
        Icon={RiEyeFill}
        text="Courses"
        url="admincourses"
        active={location.pathname === '/admin/admincourses'}
      />
      <LinkButton
        Icon={RiUser3Fill}
        text="User"
        url="user"
        active={location.pathname === '/admin/user'}
      />
    </VStack>
  );
};

export default Sidebar;

function LinkButton({ url, text, Icon, active }) {
  return (
    <Link to={`/admin/${url}`}>
      <Button
        fontSize={'larger'}
        variant={'ghost'}
        colorScheme={active ? 'orange' : ''}
      >
        <Icon style={{ margin: '4px' }} />
        {text}
      </Button>
    </Link>
  );
}
