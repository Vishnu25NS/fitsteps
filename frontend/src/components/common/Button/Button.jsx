import React from 'react';
import './Button.css';

function Button({
  children,
  onClick,
  variant = 'primary',
  className = '',
  ariaLabel,
  disabled = false,
  type = 'button',
  ...props
}) {
  const variantClass = `common-button--${variant}`;

  return (
    <button
      type={type}
      className={`common-button ${variantClass} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
