import {
  Grid,
  Box,
  Text,
  Heading,
  Stack,
  HStack,
  Progress,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import cursor from '../../../Assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { DoughnutChart, LineChart } from './Chart';
import { Doughnut } from './Chart';
import { getAdminStats } from '../../../Redux/actions/admin';
import Loader from '../../Layout/Loader.jsx';

const Databox = ({ title, profit, qty, qtyPercentage }) => (
  <Box
    w={['full', '20%']}
    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    p={'8'}
    borderRadius={'lg'}
  >
    <Text children={title} />

    <HStack spacing={'8'}>
      <Text fontSize={'2xl'} fontWeight={'bold'} children={qty} />

      <HStack>
        <Text children={`${qtyPercentage}%`} />
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowDownLine color="red" />
        )}
      </HStack>
    </HStack>
    <Text opacity={0.6} children={'Since Last Month'} />
  </Box>
);

const Bar = ({ title, value, profit }) => (
  <Box py={'4'} px={['0', '20']}>
    <Heading size={'sm'} children={title} mb={'2'} />

    <HStack w="full" alignItems={'center'}>
      <Text children={profit ? '0%' : `-${value}%`} />

      <Progress w="full" value={profit ? value : 0} colorScheme="orange" />

      <Text children={`${value > 100 ? value : 100}`} />
    </HStack>
  </Box>
);

const Dashboard = () => {

  const { loading,
    stats,
    usersCount,
    subscriptionCount,
    viewsCount,
    subscriptionPercentage,
    viewsPercentage,
    usersPercentage,
    subscriptionProfit,
    viewsProfit,
    usersProfit
  } = useSelector(state => state.admin);

  console.log(usersPercentage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminStats());
  }, [dispatch]);

  return (
    <Grid
      css={{
        cursor: `url(${cursor}), defult`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      {
        loading ? <Loader color='orange.300' /> :
          <Box boxSizing="border-box" py={'16'} px={['4', '0']}>
            <Text
              textAlign={'center'}
              opacity={'0.5'}
              children={`Last change was on ${String(stats && stats[11] && new Date(stats[11].createdAt)).split('G')[0]
            }`}
            /> 

            <Heading
              children="Dashboard"
              ml={['0', '16']}
              mb={'16'}
              textAlign={['center', 'left']}
            />

            <Stack
              direction={['column', 'row']}
              minH={'24'}
              justifyContent={'space-evenly'}
            >
              <Databox title="Views" qty={viewsCount} qtyPercentage={viewsPercentage} profit={viewsProfit} />
              <Databox title="User" qty={usersCount} qtyPercentage={usersPercentage} profit={usersProfit} />
              <Databox
                title="Subscription"
                qty={subscriptionCount}
                qtyPercentage={subscriptionPercentage}
                profit={subscriptionProfit}
              />
            </Stack>

            <Box
              m={['0', '16']}
              borderRadius={'lg'}
              p={['0', '16']}
              mt={['4', '16']}
              boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
            >
              <Heading
                textAlign={['center', 'left']}
                size={'md'}
                children="Views Graph"
                pt={['8', '0']}
                ml={['0', '16']}
              />

               <LineChart views={stats && stats.map(item=>item.views)} /> 
            </Box>

            <Grid templateColumns={['1fr', '2fr 1fr']}>
              <Box p="4">
                <Heading
                  textAlign={['center', 'left']}
                  size={'md'}
                  children="Progress Bar"
                  my={'8'}
                  ml={['0', '16']}
                />

                <Box>
                  <Bar profit={viewsProfit} title="Views" value={viewsPercentage} />
                  <Bar profit={usersProfit} title="Users" value={usersPercentage} />
                  <Bar profit={subscriptionProfit} title="Subscription" value={subscriptionPercentage} />
                </Box>

              </Box>

              <Box p={['0', '16']} boxSizing='border-box' py={'4'} >

                <Heading textAlign={'center'} size={'md'} mb='4' children='Users' />

                <DoughnutChart users={[subscriptionCount, usersCount - subscriptionCount]} />
              </Box>

            </Grid>
          </Box>
      }
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
