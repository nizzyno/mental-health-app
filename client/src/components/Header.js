import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1>Haven</h1>
        <button>Sign-In</button>
      </div>
    </header>
  );
};

export default Header;
