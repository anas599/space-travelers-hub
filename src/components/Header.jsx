import React from 'react';
import {
  NavLink, Routes, Route,
} from 'react-router-dom';
import logo from '../assets/logo.png';
import MyProfile from './MyProfile';
import Missions from './Missions';
import Rockets from './Rockets';

const Header = () => (
  <header>
    <div className="logo">
      <img src={logo} alt="Logo" />
      <span className="title">Space Travelers&apos;s Hub</span>
    </div>
    <nav>
      <ul className="menuLinks">
        <li>
          <NavLink to="/Rockets" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink to="/Missions" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink to="/MyProfile" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/Rockets" element={<Rockets />} />
      <Route path="/MyProfile" element={<MyProfile />} />
      <Route path="/Missions" element={<Missions />} />
    </Routes>
  </header>
);

export default Header;
