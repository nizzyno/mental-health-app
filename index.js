import React from 'react';

import brain from '../../assets/cover/header/havenbrain.png'

function NavBar(props) {
const navBarLinks = [
  {
    navLink: 'Home',
  },
  {
      navLink: 'Login',
  },
  {
      navLink: 'Logout',
  },
  {
      navLink: 'SignUp',
  }]

const Header = () => {
  return (
    <header>
      <nav className="bg-secondary mb-4 py-2 flex-row align-left">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <p> Haven Image Here </p>
      </div>
      </nav>
    </header>
  );
};

export default Header;
