import React from 'react';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      onClick={onClose} // click outside to clos4
    >
      {/* Modal content card */}
      <div
        className="relative w-full max-w-lg mx-4 bg-white  rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800  text-xl font-bold cursor-pointer focus:outline-none"
          aria-label="Close modal"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
};

// Compound components
function ModalHeader({ children, className = '' }) {
  return (
    <div className={`px-6 py-5 border-b border-gray-200  text-xl font-semibold ${className}`}>
      {children}
    </div>
  );
}

function ModalBody({ children, className = '' }) {
  return (
    <div className={`px-6 py-6 ${className}`}>
      {children}
    </div>
  );
}

function ModalFooter({ children, className = '' }) {
  return (
    <div className={`px-6 py-5 border-t border-gray-200  flex justify-end gap-3 ${className}`}>
      {children}
    </div>
  );
}

// Attach compound components
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;