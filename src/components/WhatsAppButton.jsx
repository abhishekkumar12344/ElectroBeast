
import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/916207112780" // 👉 Replace with your WhatsApp number
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* WhatsApp SVG Logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="whatsapp-icon"
      >
        <path
          fill="#25D366"
          d="M16 0C7.2 0 0 7.2 0 16c0 2.8.7 5.5 2 7.9L0 32l8.3-2.2c2.3 1.3 5 2 7.7 2 8.8 0 16-7.2 16-16S24.8 0 16 0z"
        />
        <path
          fill="#FFF"
          d="M24.5 19.4c-.4-.2-2.4-1.2-2.8-1.4s-.6-.2-.9.2-1.1 1.4-1.3 1.7c-.2.2-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.5-2.2-2.9-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7s-.9-2.2-1.2-3c-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.2s1.3 3.7 1.5 3.9c.2.2 2.5 3.8 6 5.3 3.6 1.6 3.6 1.1 4.2 1s2.1-1 2.4-1.6c.3-.6.3-1.2.2-1.4-.1-.2-.4-.3-.8-.5z"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
