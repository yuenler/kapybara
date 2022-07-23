import React, { useState } from 'react';
import capy from './capy.jpg';
import confetti from './confetti.jpg';

import './App.css';

function App() {
  const [width, setWidth] = useState(100);
  const [show, setShow] = useState(true);
  if (width > 300) {
    setShow(false)
    setWidth(100)
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      {show ?
        <button onClick={() => setWidth(width + 10)}>
          <img src={capy} width={width} alt="logo" />
        </button>
        :
        <div>
          <div>
            <img src={confetti} width={500} />
          </div>
          <button onClick={() => setShow(true)}> CLICK TO RESTART</button>
        </div>
      }

    </div >
  );
}

export default App;
