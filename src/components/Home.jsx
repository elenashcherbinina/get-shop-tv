import React from 'react';

import qrCode from '../assets/qr-code.png';

const Home = ({ setPromo }) => {
  const handleClick = () => {
    setPromo(true);
  };

  return (
    <div className='content__banner'>
      <h1 className='banner__header'>
        Исполните мечту вашего малыша! <br />
        Подарите ему собаку!
      </h1>
      <img className='banner__img' src={qrCode} alt='qr-code' />
      <p className='banner__text'>
        Сканируйте QR-код <br /> или нажмите ОК
      </p>
      <button onClick={handleClick} className='banner__btn'>
        ОК
      </button>
    </div>
  );
};

export default Home;
