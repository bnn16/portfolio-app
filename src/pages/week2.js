import React from 'react';
import './week.css';
import gtwg1 from '../../src/assets/gtwg.png';
import gtwg2 from '../../src/assets/gtwg1.png';

function Week2() {
  return (
    <div id="week">
      <h1 id="head">Week 2</h1>
      <h1 id="para_heading">A quick little summary of Week 2</h1>

      <ol id="key_list">
        <li>
          <span>Started learning python</span>
        </li>
        <li>
          <span>Had the 1-1 talk with Leo</span>
        </li>
        <li>
          <span>Set new goals for myself</span>
        </li>
      </ol>

      <p id="text">
        In week 2 I got more comfortable with classmates and started freely
        talking in lectures and expressing myself. In that week I had my first
        talk with the student coach (Leo) and I was set on continuing my path
        with ICT and Software engineering.
      </p>
      <p id="text">
        I started doing the css+html for the Guess the word game and I
        accidentally made the whole game, instead of just the main page. <br />
        <a
          href="https://i501077.hera.fhict.nl"
          style={{ 'text-decoration': 'underline' }}
        >
          https://i501077.hera.fhict.nl/
        </a>
        <br />( you can see the whole game, but it doesn’t have working
        functionality for guessing the word or etc. It just follows the design I
        did in Figma <br />
        The code (it has more code this is just the main functions) it also
        contains a while loop that keeps looping until the word gets guessed or
        the player has 0 lives left
      </p>
      <img id="pic1" src={gtwg1} alt=""></img>
      <p id="text">
        The css file contains over 300 lines of styling for every single page.
        Also there are only 6 html pages that I`m going to use DOM manipulation
        later to make the functionality for the game (maybe using javascript or
        flash/python)
      </p>
      <img id="pic1" src={gtwg2} alt=""></img>
      <h1 id="para_heading">
        Overall I didn't do anything specific this week, it was actually really
        chill and I was just out exploring Eindhoven most of the time.
      </h1>
    </div>
  );
}

export default Week2;
