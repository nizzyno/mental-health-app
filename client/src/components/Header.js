
import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth.js';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };


  return (
    <header className="">
      <div className="">
        <h1>HAVEN</h1>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (

            <>
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
