import React from 'react';
import { appleStock } from '@vx/mock-data';
import SampleHeader from '../components/SampleHeader';

import { extent } from 'd3-array';
import { scaleTime } from 'd3-scale';

import { AreaChart, Area, XAxis, YAxis, Label } from 'recharts';

const RechartsSample = () => {
  // Epoch-ify dates so we can work with them as numbers
  const data = appleStock.map(d => {
    return {
      ...d,
      date: new Date(d.date).getTime()
    };
  });

  // Use D3 to get a domain so we can generate ticks.
  const domain = scaleTime().domain(extent(data, d => d.date));

  // D3 magically picks years as ticks - https://github.com/d3/d3-scale#time_ticks
  const ticks = domain.ticks();

  return (
    <div>
      <SampleHeader text="Recharts" link="http://recharts.org" />

      <AreaChart
        width={750}
        height={400}
        data={data}
        margin={{ top: 10, right: 30, left: 50, bottom: 0 }}
      >
        <XAxis
          dataKey="date"
          type="number"
          scale="time"
          domain={['auto', 'auto']}
          ticks={ticks}
          tickFormatter={tick => new Date(tick).getFullYear()}
          height={50}
        >
          <Label value="Years" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis>
          <Label
            value="Close Price ($)"
            offset={0}
            position="insideLeft"
            angle={-90}
          />
        </YAxis>
        <Area
          type="monotone"
          dataKey="close"
          stroke=""
          fill="url(#esriGradient)"
          fillOpacity={1}
        />
        <defs>
          <linearGradient x1="0" y1="0" x2="0" y2="1" id="esriGradient">
            <stop offset="0%" stopColor="#007ac2" />
            <stop offset="100%" stopColor="#36ad47" />
          </linearGradient>
        </defs>
      </AreaChart>
    </div>
  );
};

export default RechartsSample;
