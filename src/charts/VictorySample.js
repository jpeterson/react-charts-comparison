import React from 'react';
import SampleHeader from '../components/SampleHeader';
import { appleStock } from '@vx/mock-data';
// import { extent } from 'd3-array';

import { VictoryArea, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const VictorySample = () => {
  const data = appleStock;

  const chartTheme = {
    ...VictoryTheme.material,
    chart: {
      width: 750,
      height: 400,
      padding: 50
    }
  };

  return (
    <div>
      <SampleHeader
        text="Victory"
        link="https://formidable.com/open-source/victory/"
      />

      <div style={{ height: '400px', width: '750px' }}>
        <VictoryChart theme={chartTheme}>
          <VictoryAxis label="Years" scale="time" height={400} />
          <VictoryAxis dependentAxis label="Close Price ($)" width={500} />
          <VictoryArea
            data={data}
            x={d => new Date(d.date)}
            y="close"
            style={{ data: { fill: 'url(#esriGradient)' } }}
          />
        </VictoryChart>
      </div>

      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient x1="0" y1="0" x2="0" y2="1" id="esriGradient">
            <stop offset="0%" stopColor="#007ac2" />
            <stop offset="100%" stopColor="#36ad47" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default VictorySample;
