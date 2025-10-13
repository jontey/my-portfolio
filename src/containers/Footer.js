import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="contact-footer">
    <div className="footer-content">
      <div className="social-links">
        <a href="mailto:jonathantey@byteforge.com.my" aria-label="Email" className="social-link">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a href="https://linkedin.com/in/jonathantey" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/jontey" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://thoughts.jonathantey.com" target="_blank" rel="noopener noreferrer" aria-label="Blog" className="social-link">
          <FontAwesomeIcon icon={faNewspaper} size="2x" />
        </a>
      </div>
      <div className="footer-info">
        <p className="copyright">&copy; 2025 Jonathan Tey. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
