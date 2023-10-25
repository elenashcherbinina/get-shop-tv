import React, { useState, useRef, useEffect } from 'react';
import InputMask from 'react-input-mask';

import validate from '../utils/validation';
import SubmitBtn from './SubmitBtn';

const Numpad = ({ setSubmit }) => {
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'cтереть', 0];
  const [phone, setPhone] = useState('');
  const [checked, setChecked] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const maskRef = useRef(null);

  const currentInputClass = isValid ? 'promo__input' : 'promo__input invalid';

  const handleClick = (e) => {
    if (phone.length >= 10) {
      return;
    }
    setPhone(phone + e.target.value);
  };

  const handleRemove = () => {
    setPhone('');
    setIsValid(true);
    setChecked(false);
  };

  useEffect(() => {
    if (phone.length === 10) {
      validate(phone).then((data) => {
        if (data.valid) {
          setIsValid(true);
        } else {
          setIsValid(false);
        }
      });
    }
  });

  return (
    <>
      <h2 className='promo__header'>Введите ваш номер мобильного телефона</h2>
      <InputMask
        className={currentInputClass}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        mask='+7(999)999-99-99'
        ref={maskRef}
        alwaysShowMask={true}
        type='tel'
      />
      <p className='promo__text'>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
      <div className='promo__numpad'>
        <ul className='numpad'>
          {buttons.map((el) => {
            if (el !== 'cтереть') {
              return (
                <li onClick={handleClick} className='numpad__item' key={el} value={el}>
                  {el}
                </li>
              );
            }
            return (
              <li
                onClick={handleRemove}
                className='numpad__item numpad__item-remove'
                key={el}
                value={el}
              >
                {el}
              </li>
            );
          })}
        </ul>
      </div>
      {isValid ? (
        <div className='promo__agreement'>
          <input
            className='checkbox__input'
            type='checkbox'
            id='checkbox'
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <label className='checkbox__label' htmlFor='checkbox'>
            Согласие на обработку
            <br />
            персональных данных
          </label>
        </div>
      ) : (
        <div className='promo__feedback'>
          <p className='invalid'>Неверно введён номер</p>
        </div>
      )}
      <SubmitBtn phone={phone} checked={checked} setSubmit={setSubmit} />
    </>
  );
};

export default Numpad;
