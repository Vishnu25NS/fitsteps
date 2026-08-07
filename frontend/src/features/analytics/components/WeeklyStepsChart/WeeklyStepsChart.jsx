import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ReferenceLine,
} from 'recharts';
import Card from '../../../../components/common/Card';
import './WeeklyStepsChart.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-chart-tooltip">
        <p>{`${label}: ${payload[0].value.toLocaleString()} steps`}</p>
      </div>
    );
  }
  return null;
};

function WeeklyStepsChart({ data = [] }) {
  return (
    <Card className="chart-card">
      <div className="chart-header">
        <div>
          <h3 className="chart-title">Weekly Steps</h3>
          <p className="chart-subtitle">Daily step counts vs 10,000 target</p>
        </div>
      </div>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#424754' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: '#727785' }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
            <ReferenceLine y={10000} stroke="#ba1a1a" strokeDasharray="3 3" />
            <Bar dataKey="steps" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.steps >= 10000 ? '#0058be' : '#adc6ff'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default WeeklyStepsChart;
