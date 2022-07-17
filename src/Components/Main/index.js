import React from 'react';
// import { nanoid } from 'nanoid';

import Message from './Message';

const Main = ({ messages }) => {
  return (
    <main className="main">
      {messages.map((item, index) => {
        return <Message key={index} item={item.user} message={item.message} />;
      })}
    </main>
  );
};

export default Main;
