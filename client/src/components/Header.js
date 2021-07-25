import React from 'react';
import { Link } from 'react-router-dom';
// import Auth from '../../utils/auth';

const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1>Haven</h1>
        <button>Sign-In</button>
        <Link to="/">
          <h1>Mental Health</h1>
        </Link>

        <nav className="text-center">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
