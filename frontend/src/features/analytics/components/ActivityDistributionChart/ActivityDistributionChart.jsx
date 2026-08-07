import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import Card from '../../../../components/common/Card';
import './ActivityDistributionChart.css';

const CustomPieTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-chart-tooltip">
        <p>{`${payload[0].name}: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

function ActivityDistributionChart({ data = [] }) {
  return (
    <Card className="distribution-chart-card">
      <div>
        <h3 className="chart-header-title">Activity Breakdown</h3>
        <p className="chart-header-subtitle">Distribution of exercise types</p>
      </div>

      <div className="donut-chart-container">
        <div className="donut-wrapper">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={68}
                paddingAngle={4}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`pie-cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomPieTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="legend-list">
          {data.map((item) => (
            <div key={item.name} className="legend-item">
              <div className="legend-left">
                <span
                  className="legend-dot"
                  style={{ backgroundColor: item.color }}
                />
                <span className="legend-name">{item.name}</span>
              </div>
              <span className="legend-val">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default ActivityDistributionChart;
