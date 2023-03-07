import React from 'react';
import {
  NavLink, Routes, Route,
} from 'react-router-dom';
import logo from '../assets/logo.png';
import MyProfile from './MyProfile';
import Missions from './Missions';
import RocketsFunction from './Rockets';

const Header = () => (
  <>
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span className="title">Space Travelers&apos;s Hub</span>
      </div>
      <nav>
        <ul className="menuLinks">
          <li>
            <NavLink to="/rockets" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink to="/missions" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-profile" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <Routes>
      <Route path="/rockets" element={<RocketsFunction />} />
      <Route path="/my-profile" element={<MyProfile />} />
      <Route path="/missions" element={<Missions />} />
    </Routes>

  </>
);

export default Header;
