import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import classNames from 'classnames';

import validate from '../utils/validation';
import useKeys from '../hooks/useKeys';
import SubmitBtn from './SubmitBtn';

const Numpad = ({ setSubmit }) => {
  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'стереть', '0'];
  const [phone, setPhone] = useState('');
  console.log('phone', phone);
  const [checked, setChecked] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const focused = useKeys('1', phone, setPhone);
  console.log('focused', focused);

  const currentInputClass = isValid ? 'promo__input' : 'promo__input invalid';

  const handleClick = (value) => {
    if (value === 'стереть') {
      setPhone('');
      setIsValid(true);
      setChecked(false);
    } else if (phone.length === 10) {
      return;
    } else {
      setPhone(phone + value);
    }
  };

  // useEffect(() => {
  //   window.addEventListener('keydown', handleKeyDown);
  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [handleKeyDown, phone]);

  useEffect(() => {
    if (phone.length >= 10) {
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
        alwaysShowMask={true}
        type='tel'
        readOnly
        required
      />
      <p className='promo__text'>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
      <div className='promo__numpad'>
        <ul className='numpad'>
          {buttons.map((el) => {
            const currentNumClass = classNames({
              numpad__item: true,
              'numpad__item-remove': el === 'стереть',
              focused: el === focused,
            });

            return (
              <li onClick={() => handleClick(el)} className={currentNumClass} key={el} value={el}>
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
