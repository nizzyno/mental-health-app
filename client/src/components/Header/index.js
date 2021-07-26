import React from 'react';
import brain from '../../assets/header/havenbrain.png'
import haven from '../../assets/header/haven.png'


function NavBar(props) {
const navBarLinks = [
  {
    navLink: 'Home',
    image: brain
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
        <img src={haven} className='haven-header' alt='logo'></img>
      </div>
      </nav>
    </header>
  );
};

export default Header;
