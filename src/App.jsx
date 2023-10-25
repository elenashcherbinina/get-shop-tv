import React, { useState, useEffect } from 'react';

import './styles/style.css';
import video from './assets/video-freepik.mp4';
import Home from './components/Home';
import Promo from './components/Promo';

const TIMEOUT = 5000;

function App() {
  const [banner, setBanner] = useState(false);
  const [promo, setPromo] = useState(false);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const interval =
      !banner &&
      setTimeout(() => {
        setBanner(true);
      }, TIMEOUT);

    return () => {
      clearInterval(interval);
    };
  }, [banner]);

  return (
    <div className='container'>
      <div className='content'>
        {promo ? (
          <Promo submit={submit} setSubmit={setSubmit} />
        ) : (
          <>
            <video className='content__video' muted loop autoPlay src={video}></video>
            {banner && <Home setPromo={setPromo} />}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
