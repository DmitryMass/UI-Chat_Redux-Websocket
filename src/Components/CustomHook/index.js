import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useReduxActions = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const message = useSelector((state) => state.message);
  const messages = useSelector((state) => state.messages);
  // // Достаю messages для параметра в Эффект, чтобы скролилось в двух, и больше чатах к последнему сообщению во время отправки;

  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return {
    user,
    message,
    messages,
    ref,
    handleClick,
    dispatch,
  };
};
