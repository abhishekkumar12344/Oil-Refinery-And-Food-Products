import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p><strong>Phone:</strong> +91-9876543210</p>
        <p><strong>Email:</strong> contact@refineryindia.com</p>
        <p><strong>Address:</strong> Near ABC Chowk, Patna, Bihar - 800001</p>
      </div>
      <p className="footer-note">© 2025 Oil Refinery Industries. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
