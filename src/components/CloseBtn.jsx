import React from 'react';

import close from '../assets/out.svg';
import closeSubmit from '../assets/out-submit.svg';

const CloseBtn = ({ submit }) => {
  return (
    <a href='/'>
      {submit ? (
        <img className='promo__close' src={closeSubmit} alt='close-button' />
      ) : (
        <img className='promo__close' src={close} alt='close-button' />
      )}
    </a>
  );
};

export default CloseBtn;
