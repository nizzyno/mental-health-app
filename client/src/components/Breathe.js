
import React from 'react';
import './Breathe.css';
import { breathe } from '../utils/breathe';

function Breathe() {
  return (
    <div>
      <div className="container">
        <div className="solid-circle"></div>
        <p id="text"></p>
        <div className="pointer-container">
          <div className="pointer"></div>
        </div>
        <div className="gradient-circle"></div>
      </div>
      <button onClick={breathe}></button>
    </div>
  );
}

export default Breathe;
