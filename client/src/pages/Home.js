import React from 'react';
import SignIn from '../components/Signin';
import Breathe from '../components/Breathe.js';
import '../../src/index.css';

function Home() {
  return (
    <div>
      <SignIn />
      <Breathe />
    </div>
  );
}

export default Home;
