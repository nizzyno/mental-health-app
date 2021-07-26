import React from 'react';

function NavBar(props) {
const navBarLinks = [
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
        <h1>Haven</h1>
      </div>
      </nav>
    </header>
  );
};

export default Header;
