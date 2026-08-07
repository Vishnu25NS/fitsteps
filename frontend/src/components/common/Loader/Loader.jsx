import React from 'react';
import './Loader.css';

function Loader({ size = 'medium', className = '' }) {
  return (
    <div className={`common-loader common-loader--${size} ${className}`}>
      <div className="common-loader-spinner" />
    </div>
  );
}

export default Loader;
