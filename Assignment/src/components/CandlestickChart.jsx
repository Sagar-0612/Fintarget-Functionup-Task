
import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';

const CandlestickChartComponent = ({ data, color }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          name="Candlestick"
          dataKey="candle"
          fill={color}
          stroke={color}
          strokeWidth={2}
          strokeDasharray="3 3"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CandlestickChartComponent;
