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
          <img src={capy} width={width} alt="capybara" />
        </button>
        :
        <div>
          <div>
            <img src={confetti} width={500} alt="confetti" />
          </div>
          <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
            <button onClick={() => setShow(true)}> CLICK TO RESTART</button>
          </div>
        </div>
      }

    </div >
  );
}

export default App;
