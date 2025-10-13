import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="bg-gradient-to-br from-base to-base-dark text-white py-12 px-5 text-center border-t-[3px] border-brand md:py-16">
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center gap-6 mb-6 flex-wrap md:gap-8">
        <a
          href="mailto:jonathantey@byteforge.com.my"
          aria-label="Email"
          className="text-white transition-all duration-300 inline-block hover:text-brand hover:-translate-y-1"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a
          href="https://linkedin.com/in/jonathantey"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white transition-all duration-300 inline-block hover:text-brand hover:-translate-y-1"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/jontey"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-white transition-all duration-300 inline-block hover:text-brand hover:-translate-y-1"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://thoughts.jonathantey.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Blog"
          className="text-white transition-all duration-300 inline-block hover:text-brand hover:-translate-y-1"
        >
          <FontAwesomeIcon icon={faNewspaper} size="2x" />
        </a>
      </div>
      <div className="mt-6">
        <p className="text-sm text-white/70 border-t border-white/20 pt-5 mt-5">
          &copy; 2025 Jonathan Tey. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
