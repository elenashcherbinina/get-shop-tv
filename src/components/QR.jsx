import React from 'react';

import qrCode from '../assets/qr-code.png';

const QR = () => {
  return (
    <div className='promo__qr'>
      <p>Сканируйте QR-код для получения дополнительной информации</p>
      <img src={qrCode} alt='qr-code' />
    </div>
  );
};

export default QR;
