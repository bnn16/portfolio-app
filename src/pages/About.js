import React from 'react';
import './week.css';
import me from '../../src/assets/me.jpg';

function About() {
  return (
    <div id="week">
      <h1 id="para_heading">About Me</h1>
      <img id="pic1" src={me} alt=""></img>
      <h1 id="para_heading">Bogdan Nikolov</h1>
      <p id="text">
        I'm a 19 y/o student at Fontys. I love coding, gym and cars, especailly
        bmws
      </p>
    </div>
  );
}

export default About;
