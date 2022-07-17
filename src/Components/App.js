import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { nanoid } from 'nanoid';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import {
  addMessages,
  addUsers,
  connectUser,
  disconnectUser,
} from '../Storage/Action';

const URL = 'ws://localhost:8080';

const App = () => {
  const [user, setUser] = useState(
    'https://randomuser.me/api/portraits/lego/1.jpg'
  );
  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(new WebSocket(URL));

  const submitMessage = (usr, msg) => {
    const message = { user: usr, message: msg };
    ws.send(JSON.stringify(message));
    setMessages([...messages, message]);
  };

  useEffect(() => {
    ws.onopen = () => {
      console.log('WebSocket Connected');
    };
    ws.binaryType = 'blob';

    ws.onmessage = (msg) => {
      const message = JSON.parse(msg.data);
      setMessages([...messages, message]);
    };

    return () => {
      ws.onclose = () => {
        console.log('WebSocket Disconnected');
        setWs(new WebSocket(URL));
      };
    };
  }, [ws.onmessage, ws.onopen, ws.onclose, messages]);

  const onBtnSubmit = (e) => {
    e.preventDefault();
    submitMessage(user, message);
    setMessage([]);
  };

  return (
    <div className="app">
      <div className="container container__wrapper">
        <div className="chat">
          <Header />
          <Main messages={messages} />
          <Footer
            message={message}
            setMessage={setMessage}
            onBtnSubmit={onBtnSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
