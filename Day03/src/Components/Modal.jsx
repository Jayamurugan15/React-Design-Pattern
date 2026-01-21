import React from 'react';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-blue-100"
      onClick={onClose} // click outside to close
    >
      {/* Modal content card */}
      <div
        className="relative w-full max-w-lg mx-4 bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 text-xl font-bold focus:outline-none"
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
    <div className={`px-6 py-5 border-b border-gray-200 dark:border-gray-700 text-xl font-semibold ${className}`}>
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
    <div className={`px-6 py-5 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-3 ${className}`}>
      {children}
    </div>
  );
}

// Attach compound components
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;