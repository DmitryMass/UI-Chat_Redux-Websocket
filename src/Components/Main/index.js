import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.m.css';
import Message from './Message';

const Main = ({ scrolls }) => {
  const messages = useSelector((state) => state.messages);

  return (
    <main className={styles.main}>
      {messages.map((item, index) => {
        return (
          <Message
            scrolls={scrolls}
            key={index}
            item={item.user}
            message={item.message}
          />
        );
      })}
    </main>
  );
};

export default Main;
