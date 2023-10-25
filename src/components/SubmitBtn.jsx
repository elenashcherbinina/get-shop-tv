import React, { useEffect, useRef } from 'react';

const SubmitBtn = ({ checked, phone, setSubmit }) => {
  const btnRef = useRef(null);

  const handleNumberSubmit = () => {
    setSubmit(true);
  };

  useEffect(() => {
    if (checked && phone.length === 10) {
      btnRef.current.classList.add('promo__btn-active');
    } else {
      btnRef.current.classList.remove('promo__btn-active');
    }
  }, [checked, phone.length]);

  return (
    <button onClick={handleNumberSubmit} ref={btnRef} className='promo__btn'>
      Подтвердить номер
    </button>
  );
};

export default SubmitBtn;
