import React from 'react';
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';

const SpiderChart = () => {
  const data = [
    { subject: 'A', A: 5 },
    { subject: 'B', A: 4 },
    { subject: 'C', A: 3 },
    { subject: 'D', A: 2 },
    { subject: 'E', A: 1 },
  ];

  return (
    <div>
      <h2>Gráfico de Araña (Radar) con Recharts</h2>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Dataset A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpiderChart;
