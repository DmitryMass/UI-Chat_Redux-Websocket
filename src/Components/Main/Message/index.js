import React from 'react';

import styles from '../index.m.css';

// const SECOND_USER_AVATAR = 'https://randomuser.me/api/portraits/lego/2.jpg';

const Message = ({ item, message }) => {
  return (
    <div className={styles.message}>
      <div className={styles.message__photo}>
        <img className={styles.message__img} src={item} alt="user photo" />
      </div>
      <div className={styles.message__text}>{message}</div>
    </div>
  );
};

export default Message;
