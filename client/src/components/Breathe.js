import React from 'react';
import './Breathe.css';

function Breathe() {
  // const container = document.querySelector('.container');
  // let text = document.querySelector('#text');

  // const totalTime = 7500;
  // const breatheTime = (totalTime / 5) * 2;
  // const holdTime = totalTime / 5;

  // text = 'Breathe In';

  // setTimeout(() => {
  //   text = 'Hold';

  //   setTimeout(() => {
  //     text = 'Breathe Out';
  //   }, holdTime);
  // }, breatheTime);

  return (
    <div>
      {/* <h2>Breathe Functionality</h2> */}
      <div className="container">
        <div className="solid-circle"></div>
        <p id="text"></p>
        <div className="pointer-container">
          <div className="pointer"></div>
        </div>
        <div className="gradient-circle"></div>
      </div>
    </div>
  );
}

export default Breathe;
