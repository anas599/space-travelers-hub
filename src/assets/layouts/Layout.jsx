import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default Layout;
