import React from 'react';
import pic from '../../src/assets/flight.jpeg';
import pic2 from '../../src/assets/friends.jpeg';
import pic3 from '../../src/assets/sketch1.png';
import pic4 from '../../src/assets/sketch2.png';
import pic5 from '../../src/assets/sketch3.png';
import './week.css';

function Week1() {
  return (
    <div id="week">
      <h1 id="head">Week 1</h1>
      <h1 id="para_heading">A quick little summary of Week 1</h1>
      <h2 id="key_head">Key take away</h2>
      <ol id="key_list">
        <li>
          <span>Got out of my comfort zone</span>
        </li>
        <li>
          <span>Adapted to the environment</span>
        </li>
        <li>
          <span>Set high goals for myself this semester</span>
        </li>
      </ol>
      <p id="text">
        In week 1 I had a tough time adapting to the new environment. New
        country, new people, all alone. It was a mess. But I set high goals for
        myself that week. My main goal was to start getting out of my comfort
        zone and meeting/talking to new people. I got to meet some of the
        professors, because I had a flight issue and missed the first 3 days of
        uni.
      </p>
      <img id="pic1" src={pic} alt="" />
      <p id="text">
        (A picture from my flight on the 31st ^^)
        <br />
        Because I`m an introvert at heart and it was really tough for me to get
        out and be uncomfortable, but it was for the greater good and it helped
        me get out of my comfort zone and grow as an individual. I met a lot of
        students, made new friends and I`m proud of myself for doing that.I
        think I made a good impression to the technical teachers because I
        already have knowledge of programming/coding. The things I had to work
        on on week 1 was to get out of my comfort zone and start talking to
        people, because I`m an introvert and it was hard at first but now I`m
        okay with talking to people.
      </p>
      <img id="pic1" src={pic2} alt="" />
      <p id="text">
        As you can see in the photo above, I made new friends and started
        socializing so I can ease-in on the cultural difference.
      </p>
      <p id="text">
        I started off doing the flowchart for the “guess the word” game and the
        first attempt was horrific. Then I decided to redo it, because I thought
        it wasn`t good enough so I resubmitted it.
      </p>
      <div id="row">
        <img id="column" src={pic3} alt="" style={{ width: '20%' }} />
        <img id="column" src={pic4} alt="" style={{ width: '50%' }} />
      </div>
      <p id="text">
        Also I made a rough sketch and the Figma demo of my Guess the word game
        <br />
        <a
          id="links"
          href="https://www.figma.com/proto/FOJtwHLE7om7hlQ4Ze9BEH/Untitled?scaling=scale-down&page-id=0%3A1&node-id=0%3A1&starting-point-node-id=1%3A2"
        >
          Link here
        </a>
      </p>
      <img id="pic1" src={pic5} alt="" style={{ width: '50%' }} />
    </div>
  );
}

export default Week1;
