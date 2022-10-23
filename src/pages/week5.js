import React from 'react';
import './week.css';
import ard1 from '../../src/assets/ard1.png';
import ard2 from '../../src/assets/ard2.png';
import ard3 from '../../src/assets/ard3.png';

function week5() {
  return (
    <div id="week">
      <h1 id="head">Week 5</h1>
      <h1 id="para_heading">A quick little summary of Week 5</h1>

      <ol id="key_list">
        <li>
          <span>Understanding arduino</span>
        </li>
        <li>
          <span>
            Reading the flask documentation, so I have a better understanding on
            how it works
          </span>
        </li>
        <li>
          <span>Improving my presenting skills</span>
        </li>
      </ol>
      <h1 id="para_heading">Arduino...</h1>
      <p id="text">
        This week was probably the hardest because it was a pain in the a*s to
        get arduino to work on my mac, let alone getting the data and writing it
        to a csv...
      </p>
      <img src={ard1} id="pic1" alt="" />
      <h1 id="para_heading">Arduino part2...</h1>
      <p id="text">
        After finally managing to make the arduino work it was time now to use
        the stupid flask app, which I don't get btw why would you use flask to
        create a webapp instead of just using plain JS but nvm... <br />
        so with sweat and tears I finally managed to get the arduino and flask
        to run by creating 2 separate files, one to read other to write.
      </p>
      <img src={ard2} id="pic1" alt="" />
      <img src={ard3} id="pic1" alt="" />
      <p id="text">
        This week was by far the worst week at fontys. Nothing was working,
        everything was breaking, just a total disaster (the code I mean... hah)
      </p>
      <h1 id="para_heading">TIP to the professors reading this : </h1>
      <p id="text">
        Please for the love of god ditch the python webapp and just use
        javascript, for the arduino just use C or C++, it's way easier that
        way...
      </p>
    </div>
  );
}

export default week5;
