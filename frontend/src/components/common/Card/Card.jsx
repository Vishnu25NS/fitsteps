import React from 'react';
import './Card.css';

function Card({ children, className = '', hoverable = false, ...props }) {
  return (
    <div
      className={`common-card ${hoverable ? 'common-card--hoverable' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
