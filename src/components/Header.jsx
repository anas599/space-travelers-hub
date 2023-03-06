import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="logo">
      <img src="" alt="Logo" />
      <span className="title">Space Travelers&apos;s Hub</span>
    </div>
    <nav>
      <ul className="menuLinks">
        <li><NavLink to="/rockets">Rockets</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
