import React from 'react';
import './week.css';
import w81 from '../../src/assets/w81.png';
import w82 from '../../src/assets/w82.png';
import w83 from '../../src/assets/w83.png';
import w84 from '../../src/assets/w84.png';

function week8() {
  return (
    <div id="week">
      <h1 id="head">Week 8</h1>
      <h1 id="para_heading">A quick little summary of Week 8</h1>
      <ol id="key_list">
        <li>
          <span>
            Started working and finishing the JavaScript, HTML and css for the
            front-end.
          </span>
        </li>
        <li>
          <span>
            Working with the team on connecting the front and back-end
          </span>
        </li>
        <li>
          <span>Going home for the vacation!!!</span>
        </li>
      </ol>
      <h1 id="para_heading">Front-end...</h1>
      <p id="text">
        After countless of hours on working on the css, html and javascript to
        make the menu fully function inside a single html file was a huge
        success for me.
      </p>
      <img id="pic1" src={w81} alt=""></img>
      <p id="text">
        The css was the hardest part for me because at first I didn't have any
        idea on how to make the menu appear only needed items but then I got an
        idea to use id's and querySelector and ID selectors using DOM
        manipulation from javascript
      </p>
      <img id="pic1" src={w82} alt=""></img>
      <p id="text">
        After that I used a lot of css (421 lines of css to be exact) to make it
        work{' '}
      </p>
      <img id="pic1" src={w83} alt=""></img>
      <h1 id="para-heading">
        Showing it to the team and making front and backed work
      </h1>
      <p id="text">
        After showing it to the team we quickly realized we had to connect the
        front and backend, since the backend is in python and frontend is
        javascript, html and css...
        <br />
        So the solutuon was to use AJAX requests!
      </p>
      <img id="pic1" src={w84} alt=""></img>
      <p id="text">
        After the whole logig on the cart system, every order is send via a json
        to the serverside :D! and it's fully functional and working. <br />
        Only thing that is left is the timer to be sent to the customer
      </p>
      <h1 id="para-heading">Going home!</h1>
      <p id="text">I'm finally going back home after long 2 months!</p>
    </div>
  );
}

export default week8;
