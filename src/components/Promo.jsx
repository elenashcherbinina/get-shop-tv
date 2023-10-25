import React from 'react';

import Numpad from './NumPad';
import SubmitMessage from './SubmitMessage';
import CloseBtn from './CloseBtn';
import QR from './QR';

const Promo = ({ submit, setSubmit }) => {
  return (
    <div className='content__promo'>
      {!submit ? (
        <div className='promo__left'>
          <Numpad setSubmit={setSubmit} />
        </div>
      ) : (
        <div className='promo__left-submit'>
          <SubmitMessage />
        </div>
      )}

      <div className='promo__right'>
        <CloseBtn submit={submit} />
        <QR />
      </div>
    </div>
  );
};

export default Promo;
