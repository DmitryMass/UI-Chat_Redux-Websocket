import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import styles from '../index.m.css';

const firstUser = 'https://randomuser.me/api/portraits/lego/1.jpg';
const secondUser = 'https://randomuser.me/api/portraits/lego/2.jpg';

const Message = ({ item, message, scrolls }) => {
  const newUser = useSelector((state) => state.newUser);
  const checker = newUser.find((user) => user === item) ? true : false;

  return (
    <div className={checker ? styles.message__second : styles.message}>
      <div className={styles.message__name}>
        <img src={checker ? secondUser : firstUser} alt="" />
      </div>
      <div ref={scrolls} className={styles.message__text}>
        {message}
        <p className={styles.message__username}>:{item}</p>
      </div>
    </div>
  );
};

Message.propTypes = {
  item: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  scrolls: PropTypes.object.isRequired,
};

export default Message;
