import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

const Cards = () => {
  return (
    <div className="cards">
      <h1>PEP Weeks</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://data.1freewallpapers.com/download/system-unit-computer-motherboard-technology-1440x1080.jpg"
              title="Week 1"
              text="What is the feedback + what work I did in week 1."
              label="week1"
              path="/week1"
            />
            <CardItem
              src="https://www.popsci.com/uploads/2020/10/08/2SBEMF6ECZE3XL46H36EQ4YM24.jpg?auto=webp&width=1440&height=1080"
              title="Week 2"
              text="What is the feedback + what work I did in week 2"
              label="week2"
              path="/week2"
            />
          </ul>
          <br />
          <ul className="cards__items">
            <CardItem
              src="https://media.wired.com/photos/5fb2cc575c9914713ead03de/master/pass/Gear-Apple-MacBook-Air-top-down-SOURCE-Apple.jpg"
              title="Week 3"
              text="What is the feedback + what work I did in week 3."
              label="week3"
              path="/week3"
            />
            <CardItem
              src="https://s.yimg.com/uu/api/res/1.2/kxy_AeoAwvwByQob1BNsyQ--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-11/c8aea820-28a0-11eb-9f89-5ddd62987703.cf.jpg"
              title="Week 4"
              text="What is the feedback + what work I did in week 4"
              label="week4"
              path="/week4"
            />
          </ul>
          <br />
          <ul className="cards__items">
            <CardItem
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--BcXcD88z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/5sn1ah1x2i3kh1pqi1kg.jpg"
              title="Week 5"
              text="What is the feedback + what work I did in week 5."
              label="week5"
              path="/week5"
            />
            <CardItem
              src="https://9to5mac.com/wp-content/uploads/sites/6/2021/10/macbook-pro-display.jpg?quality=82&strip=all&w=1000"
              title="Week 6"
              text="What is the feedback + what work I did in week 6"
              label="week6"
              path="/week6"
            />
          </ul>
          <br />
          <ul className="cards__items">
            <CardItem
              src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cnViaW58ZW58MHx8MHx8&w=1000&q=80"
              title="Week 7"
              text="What is the feedback + what work I did in week 7."
              label="week7"
              path="/week7"
            />
            <CardItem
              src="https://9to5mac.com/wp-content/uploads/sites/6/2021/10/MacBook-Pro-notch.jpg?quality=82&strip=all&w=1600"
              title="Week 8"
              text="What is the feedback + what work I did in week 8"
              label="week8"
              path="/week8"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
