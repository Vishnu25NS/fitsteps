import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import Card from '../../../../components/common/Card';
import './GoalCompletionChart.css';

const CustomAreaTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-chart-tooltip">
        <p>{`${label}: ${payload[0].value}% completion`}</p>
      </div>
    );
  }
  return null;
};

function GoalCompletionChart({ data = [] }) {
  return (
    <Card className="goal-chart-card">
      <div>
        <h3 className="goal-chart-title">Goal Completion Trend</h3>
        <p className="goal-chart-subtitle">Weekly goal success percentage</p>
      </div>

      <div className="goal-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0058be" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#0058be" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="week"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#424754' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: '#727785' }}
              domain={[0, 100]}
              unit="%"
            />
            <Tooltip content={<CustomAreaTooltip />} />
            <Area
              type="monotone"
              dataKey="rate"
              stroke="#0058be"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorRate)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default GoalCompletionChart;
