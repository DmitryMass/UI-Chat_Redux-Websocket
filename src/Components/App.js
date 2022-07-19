import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import {
  addUser,
  newUser,
  setAllMessagesInfo,
  textAreaMessage,
  wSocket,
} from '../Storage/Action';
import { useReduxActions } from './CustomHook';

const URL = 'ws://localhost:8080';

const App = () => {
  const [ws, setWs] = useState(new WebSocket(URL));
  // ws не в редаксе, тк как у меня не работает ОНопен. но работает Дисконект
  const { user, message, messages, ref, handleClick, dispatch } =
    useReduxActions();

  useEffect(() => {
    handleClick();

    ws.onopen = () => {
      console.log('Connected');
      ws.binaryType = 'blob';
    };
    ws.onmessage = (msg) => {
      const message = JSON.parse(msg.data);
      dispatch(newUser(message.user));
      dispatch(setAllMessagesInfo(message));
    };

    return () => {
      ws.onclose = () => {
        console.log('Disconnected');
        setWs(new WebSocket(URL));
      };
    };
  }, [ws.onmessage, ws.onopen, ws.onclose, messages]);

  const submitMessage = (currentUser, currentMessage) => {
    const message = { user: currentUser, message: currentMessage };
    ws.send(JSON.stringify(message));
    dispatch(setAllMessagesInfo(message));
  };

  const onBtnSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      submitMessage(user, message);
      dispatch(textAreaMessage(''));
    }
    return false;
  };

  return (
    <div className="app">
      <div className="container container__wrapper">
        <input
          className="username__input"
          placeholder="Write your name for Chatting"
          type="text"
          value={user}
          onChange={(e) => dispatch(addUser(e.target.value))}
        />
        <div className="chat">
          <Header />
          <Main scrolls={ref} />
          <Footer onBtnSubmit={onBtnSubmit} user={user} />
        </div>
      </div>
    </div>
  );
};

export default App;
