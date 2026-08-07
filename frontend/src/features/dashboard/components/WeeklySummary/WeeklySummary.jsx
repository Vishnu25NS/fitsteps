import React from 'react';
import Card from '../../../../components/common/Card';
import './WeeklySummary.css';

const DEFAULT_WEEKLY_DATA = [
  { day: 'Mon', heightPercent: 40, isPeak: false },
  { day: 'Tue', heightPercent: 60, isPeak: false },
  { day: 'Wed', heightPercent: 85, isPeak: true },
  { day: 'Thu', heightPercent: 50, isPeak: false },
  { day: 'Fri', heightPercent: 30, isPeak: false },
  { day: 'Sat', heightPercent: 70, isPeak: false },
  { day: 'Sun', heightPercent: 45, isPeak: false },
];

function WeeklySummary({ data = DEFAULT_WEEKLY_DATA }) {
  return (
    <section className="weekly-summary-section">
      <h2 className="weekly-summary-title">Weekly Summary</h2>
      <Card className="weekly-summary-card">
        {/* Background grid lines */}
        <div className="chart-grid-lines">
          <div className="grid-line" />
          <div className="grid-line" />
          <div className="grid-line" />
          <div className="grid-line" />
        </div>

        {/* Bar columns */}
        {data.map((item) => (
          <div
            key={item.day}
            className={`bar-column ${item.isPeak ? 'is-peak' : ''}`}
          >
            <div className="bar-wrapper">
              <div
                className="bar"
                style={{ height: `${item.heightPercent}%` }}
              >
                {item.isPeak && (
                  <div className="peak-tooltip">Peak</div>
                )}
              </div>
            </div>
            <span className="bar-label">{item.day}</span>
          </div>
        ))}
      </Card>
    </section>
  );
}

export default WeeklySummary;
