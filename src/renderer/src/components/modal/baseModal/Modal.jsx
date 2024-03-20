// ModalSimples.js
import React from 'react';
import Modal from 'react-modal';

export default function CategoryModal({ isOpen, onRequestClose, children, style }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldFocusAfterRender={true}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        content: style
      }}
      appElement={document.getElementById('root')}
    >
      
        {children}
      

    </Modal>
  );
};
