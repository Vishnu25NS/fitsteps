import React from 'react';
import { IoAdd } from 'react-icons/io5';
import './FloatingActionButton.css';

function FloatingActionButton({ onClick }) {
  return (
    <button
      className="fab-button"
      onClick={onClick}
      aria-label="Add new activity"
    >
      <IoAdd className="fab-icon" />
    </button>
  );
}

export default FloatingActionButton;
