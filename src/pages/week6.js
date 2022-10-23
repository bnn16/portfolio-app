import React from 'react';
import './week.css';
import w6 from '../../src/assets/w6.png';
import w61 from '../../src/assets/w61.png';
import w62 from '../../src/assets/w62.png';
import w63 from '../../src/assets/w63.png';

function week6() {
  return (
    <div id="week">
      <h1 id="head">Week 6</h1>
      <ol id="key_list">
        <li>
          <span>Got feedback from Coen</span>
        </li>
        <li>
          <span>Got separated into a group for the group project.</span>
        </li>
        <li>
          <span>
            Made the tomato farm/sensor project working with multiple sensors,
            which btw was also a horrible experience
          </span>
        </li>
      </ol>
      <h1 id="para_heading">Feedback from Coen about Assignment 5.1</h1>
      <p id="text">
        Coen saw that Assignment 5.1 was fully working for me on Monday and told
        me goodjob! Yay :D
      </p>
      <img id="pic1" src={w6} alt="" />
      <h1 id="para_heading">Assignment 6.1 (insert dramatic music)</h1>
      <p id="text">
        Another disaster, after countless hours of watching videos, looking at
        stackoverflow and learning about different flask libraries I finnaly
        managed the app to work with 2 things: <br />
        1 - wtforms <br />2 - werkzeug.util
      </p>
      <p id="text">
        After asking my classmate Beatrice, lovely gal, to send me data to my
        server, it finally worked and the data is dynamically updated via
        uplaoding it.
      </p>
      <img id="pic1" src={w61} alt="" />
      <p id="text">
        The code is actually really simple, I'm using the os library to use the
        function os.path.join(os.path.abspath(os.path.dirname(__file__))) to
        check if the file is uploaded and it's name and then I use a csv reader
        to read the data and display it dynamically as the data is uploaded.
      </p>
      <img id="pic1" src={w62} alt="" />
      <h1 id="para_heading">Group project</h1>
      <p id="text">
        After workign with Gido and Beatrice in a group in week4 and week5 I
        asked if we can be working together in the upcoming group project, as I
        got the executive type from the test we did the week prior. And Gido,
        Beatrice and me were such a good team so I tought we can make things
        faster and more efficient with them, since we all know our strenghts and
        weaknesess.
      </p>
      <img id="pic1" src={w63} alt="" />
    </div>
  );
}

export default week6;
