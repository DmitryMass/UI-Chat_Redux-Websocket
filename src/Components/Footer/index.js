import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { textAreaMessage } from '../../Storage/Action';

import styles from './index.m.css';

const Footer = ({ onBtnSubmit, user }) => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__textBox}>
        <textarea
          value={message}
          onChange={(e) => dispatch(textAreaMessage(e.target.value))}
          className={styles.footer__textarea}
        />
      </div>
      <div className={styles.footer__plate}>
        <button
          disabled={user ? false : true}
          onClick={onBtnSubmit}
          className={styles.footer__btn}
        >
          Send message
        </button>
      </div>
    </footer>
  );
};

export default Footer;
