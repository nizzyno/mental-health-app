import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import './Header.css';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-left">
      <div className="container flex-row justify-space-between-lg justify-right align-right">
        <Link to="/">
          <h1 className="haven">HAVEN</h1>
        </Link>

        <nav>
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                LOGOUT
              </a>
            </>
          ) : (
            <div>
              <Link className="nav" to="/login">
                SIGNIN
              </Link>
              <Link className="nav" to="/signup">
                SIGNUP
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
