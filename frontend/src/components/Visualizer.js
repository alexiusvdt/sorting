import React from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
// Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

const Visualizer= ({ fetchedData }) => {
  console.log('fetcheddata', fetchedData)  
  const startData = fetchedData[0]
  console.log('starting data', startData)

    return (
      <div className='wrapper' width={500} height={500} position="fixed" top="50%" left="50%" >
        <ResponsiveContainer width="100%" height={400}>
          <BarChart width={150} height={4000} data={startData}>
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

export default Visualizer;