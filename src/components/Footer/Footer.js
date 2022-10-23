import React from 'react';
import './Footer.css';
import { FaGithub, FaHome, FaLinkedin, FaMailBulk } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <div className="phone">
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            +359 899897078
          </div>
          <div className="email">
            <FaMailBulk
              size={20}
              style={{ color: '#fff', marginRight: '2rem' }}
            />
            Bogdan.Nikolov4@outlook.com
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>This is me Bogdan Nikolov, ICT student. I love making projects.</p>
          <div className="social">
            <FaGithub
              size={30}
              style={{ color: '#fff', marginRight: '2rem' }}
            />
            <FaLinkedin
              size={30}
              style={{ color: '#fff', marginRight: '2rem' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
