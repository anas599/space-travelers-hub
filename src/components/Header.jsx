import React from 'react';
import logo from '../assets/logo.png';

const Header = () => (
  <header>
    <div className="logo">
      <img src={logo} alt="Logo" />
      <span className="title">Space Travelers&apos;s Hub</span>
    </div>
    <nav>
      <ul className="menuLinks">
        <li>Rockets</li>
        <li>Missions</li>
        <li>My Profile</li>
      </ul>
    </nav>
  </header>
);

export default Header;
