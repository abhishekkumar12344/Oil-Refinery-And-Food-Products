import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/916207112780" // Replace with your actual number
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;
