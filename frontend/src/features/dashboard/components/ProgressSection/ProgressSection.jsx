import React from 'react';
import { IoFlame, IoTimer } from 'react-icons/io5';
import Card from '../../../../components/common/Card';
import './ProgressSection.css';

function ProgressSection({
  currentSteps = 8432,
  goalSteps = 10000,
  calories = 1200,
  activeMinutes = 45,
}) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progressRatio = Math.min(Math.max(currentSteps / goalSteps, 0), 1);
  const strokeDashoffset = circumference * (1 - progressRatio);

  return (
    <section className="progress-section">
      {/* Large Step Progress Ring Card */}
      <Card className="steps-card">
        <h2 className="steps-card-title">Today's Steps</h2>
        <div className="progress-ring-container">
          <svg className="progress-ring-svg" viewBox="0 0 100 100">
            <circle
              className="progress-ring-bg"
              cx="50"
              cy="50"
              r={radius}
            />
            <circle
              className="progress-ring-fg"
              cx="50"
              cy="50"
              r={radius}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>
          <div className="progress-ring-content">
            <span className="steps-count">{currentSteps.toLocaleString()}</span>
            <span className="steps-goal">/ {goalSteps.toLocaleString()}</span>
          </div>
        </div>
      </Card>

      {/* Calories Burned Card */}
      <Card className="metric-card" hoverable>
        <div className="metric-icon-badge calories">
          <IoFlame className="metric-icon" />
        </div>
        <div>
          <span className="metric-value">{calories.toLocaleString()}</span>
          <span className="metric-label">kcal burned</span>
        </div>
      </Card>

      {/* Active Minutes Card */}
      <Card className="metric-card" hoverable>
        <div className="metric-icon-badge active-time">
          <IoTimer className="metric-icon" />
        </div>
        <div>
          <span className="metric-value">{activeMinutes}</span>
          <span className="metric-label">min active</span>
        </div>
      </Card>
    </section>
  );
}

export default ProgressSection;
