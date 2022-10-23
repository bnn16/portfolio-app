import React from 'react';
import './week.css';
import logo from '../../src/assets/logo.png';
import w71 from '../../src/assets/w71.png';
import w72 from '../../src/assets/w72.png';

function week7() {
  return (
    <div id="week">
      <h1 id="head">Week 7</h1>
      <h1 id="para_heading">A quick little summary of Week 7</h1>
      <ol id="key_list">
        <li>
          <span>Started working on the prototype</span>
        </li>
        <li>
          <span>Got feedback from my groupmates</span>
        </li>
        <li>
          <span>sick again... </span>
        </li>
      </ol>
      <h1 id="para_heading">Prototyping</h1>
      <p id="text">
        I started off this week by being sick and having high temprature 38.5
        degrees... <br />
        Anyways, I asked my group members on what should the colours and the
        thematicity of the site should be. At first I had the idea to use the
        video game characters Mario and Luigi, the team agreed and told me to
        use{' '}
        <a
          style={{ 'text-decoration': 'underline' }}
          href="https://coolors.co/palette/386641-6a994e-f2e8cf-d73833-84291f"
        >
          this colour palette
        </a>
        <br />
        After a few more talks with the team I came up with the following design
        for the website logo :
      </p>
      <img style={{ width: 300 }} id="pic1" src={logo} alt="" />
      <p id="text">
        After that I started work on the prototype. <br />
        My original idea was to create a user-friendly/online ordering page
        where you can access it directly in the restaurant or online to order.
      </p>
      <img id="pic1" src={w71} alt=""></img>
      <p id="text">
        As every UI/UX designer ever I started making everything, without
        thinking how can I code this or how can I make this work with just
        python, html and css....
      </p>
      <h1 id="para_heading">Every programmers nightmare...</h1>
      <p id="text">
        I made the design of the main page with multiple menu items/sections so
        the user can access them quickly and efficiently
      </p>
      <img id="pic1" src={w72} alt=""></img>
      <h1 id="para_heading">
        Anyways I didn't really do much besides working on the prototype this
        week and going out to the gym and working on myself like usual. <br />
        You can see the whole prototype{' '}
        <a
          style={{ 'text-decoration': 'underline' }}
          href="https://www.figma.com/file/n8yUGHbsxa9TfZF7kPN7hP/Pizza?node-id=0%3A1"
        >
          here
        </a>
        .
      </h1>
    </div>
  );
}

export default week7;
