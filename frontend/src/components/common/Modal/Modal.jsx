import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="common-modal-overlay" onClick={onClose}>
      <div className="common-modal-content" onClick={(e) => e.stopPropagation()}>
        {title && <h3 className="common-modal-title">{title}</h3>}
        <div className="common-modal-body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
