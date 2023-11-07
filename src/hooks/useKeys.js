import { useState, useEffect } from 'react';
import getActionMap from '../utils/getActionMap';

const decoder = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
  Enter: 'onClick',
};

const useKeys = (defaultFocus, phone, setPhone) => {
  const [focused, setFocused] = useState(defaultFocus);
  const actionMap = getActionMap(phone, setPhone);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleKeyBoard(e) {
    if (e.code === 'Backspace') {
      setPhone(phone.slice(0, -1));
      return;
    }

    const action = decoder[e.code];

    if (action) {
      const dest = actionMap[focused][action];
      if (typeof dest === 'string') setFocused(dest);
      if (typeof dest === 'function') dest();
    } else {
      const num = e.code.slice(e.code.length - 1);
      setPhone(phone + num);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyBoard);

    return () => {
      window.removeEventListener('keydown', handleKeyBoard);
    };
  }, [focused, actionMap, handleKeyBoard]);

  return focused;
};

export default useKeys;
