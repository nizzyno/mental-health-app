import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import './Header.css';

const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-left">
      <div className="container flex-row justify-space-between-lg justify-right align-right">
        <Link to="/">
          <h1 className="haven">HAVEN</h1>
        </Link>

        <nav className="text-center">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>

        </nav>
      </div>
    </header>
  );
};

export default Header;
