import './Hero.css';
import React from 'react';
import IMG from '../../assets/pic.jpeg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IMG} alt="" />
      </div>
      <div className="content">
        <h2 style={{ color: 'rgb(0, 179, 195)' }}>Bogdan Nikolov</h2>
        <h1>Aspiring Developer</h1>
        <div>
          <Link to="/research" className="btn">
            Research
          </Link>
          <Link to="/about" className="btn btn-light">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
