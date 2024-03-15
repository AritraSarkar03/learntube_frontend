import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import { background } from '@chakra-ui/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

export const LineChart = () => {
  const labels = getLastYearMonth();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Yearly Views',
      },
    },
  };

  const data = {
    labels,
    datasets: [
        {
            label:'Views',
            data:[1,2,3,4,5],
            borderColor:'rgba( 255, 165, 0, 0.5)',
            backgroundColor: '#ffa500',
        },
    ],
  };

  return <Line options={options} data={data}></Line>;
};


export const DoughnutChart = () => {



  const data = {
    labels:['Subcribed','Not Subcribed'],
    datasets: [
        {
            label:'Views',
            data:[3, 20],
            borderColor:['rgba( 255, 15, 0)','rgba( 255, 105, 0)'],
            backgroundColor: ['rgba( 255, 15, 0, 0.5)','rgba( 255, 105, 0,0.5)'],
            borderWidth: 1,
        },
    ],
  };
 
  return <Doughnut data={data}></Doughnut>;

};


function getLastYearMonth() {
  const labels = [];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  
  const currentMonth = new Date().getMonth();
  console.log(currentMonth);
  const remain = 11 - currentMonth;
   for( let i = currentMonth; i < months.length; i-- ) {
   const element = months[i];
   labels.unshift(element);
   if(i === 0) break;
 }

   for( let i = 11; i > remain; i-- ) {
    const element = months[i];
    labels.unshift(element);
    if(i === currentMonth) break;
  }
  return labels;
}
getLastYearMonth();