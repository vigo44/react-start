import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'header__link header__link_disaibled' : 'header__link'
          }
        >
          Home
        </NavLink>
        <span> </span>
        <NavLink
          to="/about"
          end
          className={({ isActive }) =>
            isActive ? 'header__link header__link_disaibled' : 'header__link'
          }
        >
          About Us
        </NavLink>
      </div>
    );
  }
}

export default Header;
