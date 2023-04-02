import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="header_wrapper-title">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'header__title ' : 'header__title header__title_disaibled'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          end
          className={({ isActive }) =>
            isActive ? 'header__title ' : 'header__title header__title_disaibled'
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/form"
          end
          className={({ isActive }) =>
            isActive ? 'header__title ' : 'header__title header__title_disaibled'
          }
        >
          Form
        </NavLink>
        <NavLink
          to="/404"
          end
          className={({ isActive }) =>
            isActive ? 'header__title ' : 'header__title header__title_disaibled'
          }
        >
          404Page
        </NavLink>
      </div>
      <div className="header_wrapper-link">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'header__link header__link_disaibled' : 'header__link'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/form"
          end
          className={({ isActive }) =>
            isActive ? 'header__link header__link_disaibled' : 'header__link'
          }
        >
          Form
        </NavLink>
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
    </header>
  );
}

export default Header;
