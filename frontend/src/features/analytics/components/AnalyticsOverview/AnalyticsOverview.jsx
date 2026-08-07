import React from 'react';
import {
  MdDirectionsWalk,
  MdCheckCircle,
  MdLocalFireDepartment,
  MdEmojiEvents,
  MdTimer,
  MdStar,
} from 'react-icons/md';
import Card from '../../../../components/common/Card';
import './AnalyticsOverview.css';

function AnalyticsOverview({ metrics = {} }) {
  const {
    weeklyAverageSteps = 0,
    goalCompletionRate = 0,
    currentStreak = 0,
    longestStreak = 0,
    bestDay = 'None',
    totalCalories = 0,
    totalActiveMinutes = 0,
  } = metrics;

  return (
    <div className="analytics-overview-container">
      {/* Row 1: Weekly Average & Completion Rate */}
      <div className="analytics-grid-row">
        <Card className="analytics-card" hoverable>
          <div className="analytics-card-header">
            <div className="analytics-card-icon steps">
              <MdDirectionsWalk />
            </div>
            <span className="analytics-card-label">Weekly Avg</span>
          </div>
          <div>
            <span className="analytics-card-val">
              {weeklyAverageSteps.toLocaleString()}
            </span>
            <p className="analytics-card-subtext">steps / day</p>
          </div>
        </Card>

        <Card className="analytics-card" hoverable>
          <div className="analytics-card-header">
            <div className="analytics-card-icon completion">
              <MdCheckCircle />
            </div>
            <span className="analytics-card-label">Goal Rate</span>
          </div>
          <div>
            <span className="analytics-card-val">{goalCompletionRate}%</span>
            <p className="analytics-card-subtext">completed</p>
          </div>
        </Card>
      </div>

      {/* Row 2: Streak info */}
      <div className="analytics-grid-row">
        <Card className="analytics-card" hoverable>
          <div className="analytics-card-header">
            <div className="analytics-card-icon streak">
              <MdStar />
            </div>
            <span className="analytics-card-label">Current Streak</span>
          </div>
          <div>
            <span className="analytics-card-val">{currentStreak} days</span>
            <p className="analytics-card-subtext">active streak</p>
          </div>
        </Card>

        <Card className="analytics-card" hoverable>
          <div className="analytics-card-header">
            <div className="analytics-card-icon trophy">
              <MdEmojiEvents />
            </div>
            <span className="analytics-card-label">Best Streak</span>
          </div>
          <div>
            <span className="analytics-card-val">{longestStreak} days</span>
            <p className="analytics-card-subtext">all-time record</p>
          </div>
        </Card>
      </div>

      {/* Row 3: Total Calories & Active Minutes */}
      <div className="analytics-grid-row">
        <Card className="analytics-card" hoverable>
          <div className="analytics-card-header">
            <div className="analytics-card-icon fire">
              <MdLocalFireDepartment />
            </div>
            <span className="analytics-card-label">Total Calories</span>
          </div>
          <div>
            <span className="analytics-card-val">
              {totalCalories.toLocaleString()}
            </span>
            <p className="analytics-card-subtext">kcal burned</p>
          </div>
        </Card>

        <Card className="analytics-card" hoverable>
          <div className="analytics-card-header">
            <div className="analytics-card-icon clock">
              <MdTimer />
            </div>
            <span className="analytics-card-label">Active Time</span>
          </div>
          <div>
            <span className="analytics-card-val">{totalActiveMinutes} mins</span>
            <p className="analytics-card-subtext">exercise duration</p>
          </div>
        </Card>
      </div>

      {/* Full width Card: Best Day */}
      <Card className="analytics-card analytics-card-full" hoverable>
        <div className="analytics-card-header">
          <div className="analytics-card-icon trophy">
            <MdEmojiEvents />
          </div>
          <span className="analytics-card-label">Best Single Day Performance</span>
        </div>
        <span className="analytics-card-val" style={{ fontSize: '18px' }}>
          {bestDay}
        </span>
      </Card>
    </div>
  );
}

export default AnalyticsOverview;
