import React from 'react';
import './week.css';
import r1 from '../../src/assets/r1.png';
import r2 from '../../src/assets/r2.png';
import r3 from '../../src/assets/r3.png';

function week3() {
  return (
    <div id="week">
      <h1 id="head">Week 3</h1>
      <h1 id="para_heading">A quick little summary of Week 3</h1>

      <ol id="key_list">
        <li>
          <span>Started working on the PEP website</span>
        </li>
        <li>
          <span>Got feedback from the 2 technical teachers</span>
        </li>
        <li>
          <span>Did research on how to make a full stack app</span>
        </li>
      </ol>
      <p id="text">
        In week 3 I started working on the website for my pep. I had a talk with
        the technical teachers if I can try to make the guess the word game
        using React+Flast (basically make a full stack application) Using React
        (javascript) for front-end and Flask (python) for back-end. Both of them
        said it was okay if I’m learning new things and growing as a programmer.
        <br />
        After that talk I started searching up on how can I do it and I found
        some pretty interesting websites : 1-
        <a href="https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project">
          https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project
        </a>
      </p>

      <p id="text">
        After figuring out how to make the full-stack application I started
        working on my PEP website. I started off by creating a react app and I
        started building onto it.
      </p>
      <img id="pic1" src={r1} alt="" />
      <img id="pic1" src={r2} alt="" />
      <img id="pic1" src={r3} alt="" />
      <p id="text">
        After that I started off by making the footer and the card components in
        the research tab which you can find how it looks while browsing the
        site.
      </p>
    </div>
  );
}

export default week3;
