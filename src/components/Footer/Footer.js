import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>© 2023 Piyush Malviya</p>
        <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=100006901068589">
            Facebook
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          
          <a href="https://www.instagram.com/malviya_piyush090/">
            InstaGram
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/piyush-malviya-aa902b226/">
            Linked In
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="https://github.com/piyushmalviya12">
          <i className="fab fa-github"></i>Github
          
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

