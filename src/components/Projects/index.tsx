import React, { FC } from 'react';
import { LineChart, Line, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';

/**
 * Rechart value: http://recharts.org/en-US/guide/getting-started
 */

interface Evolution {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

interface Projects {
  id: number;
  name: string;
  description: string;
  color: string;
  evolution: Evolution[];
}

interface ProjectProps {
  title: string;
}

/**
 *
 * #fcce58
 * #2493ff
 * #9f4cf1
 *
 *
 *
 */

const Project: FC<ProjectProps> = (props: ProjectProps) => {
  // const projects: Projects = {
  //   name: 'Ciner',
  //   description: 'DevOps',
  //   color: '#8884d8',
  //   id: 1,
  //   evolution: [
  //     { name: 'Page A', uv: 400, pv: 600, amt: 2400 },
  //     { name: 'Page A', uv: 200, pv: 400, amt: 2400 },
  //     { name: 'Page A', uv: 300, pv: 900, amt: 2400 },
  //     { name: 'Page A', uv: 600, pv: 100, amt: 2400 },
  //     { name: 'Page A', uv: 400, pv: 300, amt: 2400 },
  //   ],
  // };

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>
      <h1>{props.title}</h1>
      <AreaChart width={400} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#9f4cf1" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#9f4cf1" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2493ff" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#2493ff" stopOpacity={0} />
          </linearGradient>
        </defs>
        {/* <XAxis dataKey="name" />
        <YAxis /> */}
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        {/* <Tooltip /> */}
        <Area type="monotone" dataKey="uv" stroke="#9f4cf1" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="pv" stroke="#2493ff" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
    </div>
  );
};

export default Project;
