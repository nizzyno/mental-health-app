import React from 'react';
import { Link } from 'react-router-dom';
// import Auth from '../../utils/auth';

const Header = () => {
  return (
    <header className="">
      <div className="">
        <h1>HAVEN</h1>

        <nav className="text-center">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
