import React from 'react';
import { useState } from 'react';
import { MenuItems } from '../../constants/MenuItems';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const clickHandler = () => setClick(!click);

  const [color, setColor] = useState(false);
  const colorHandler = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', colorHandler);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to="/">
        <h1>Bogdan's Portfolio</h1>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <div className="hamburger" onClick={clickHandler}>
        {click ? (
          <FaTimes size={20} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={20} style={{ color: '#fff' }} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
