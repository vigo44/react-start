import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="wrapperMain">
          <Outlet />
        </main>
      </>
    );
  }
}

export default Layout;
