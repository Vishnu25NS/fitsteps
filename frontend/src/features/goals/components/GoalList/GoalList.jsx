import React from 'react';
import { MdFlag } from 'react-icons/md';
import GoalCard from '../GoalCard';
import Card from '../../../../components/common/Card';
import Button from '../../../../components/common/Button';
import './GoalList.css';

function GoalList({ goals = [], onEdit, onDelete, onCreateClick }) {
  if (goals.length === 0) {
    return (
      <Card className="goals-empty-state">
        <MdFlag className="empty-state-icon" />
        <h3 className="empty-state-heading">No Goals Yet</h3>
        <p className="empty-state-text">
          Set daily step, workout, or active minute goals to kickstart your fitness journey.
        </p>
        <Button
          variant="primary"
          className="create-first-goal-btn"
          onClick={onCreateClick}
        >
          Create Your First Goal
        </Button>
      </Card>
    );
  }

  return (
    <div className="goal-list-container">
      <h2 className="goal-list-title">Your Goals</h2>
      {goals.map((goal) => (
        <GoalCard
          key={goal.id}
          goal={goal}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default GoalList;
