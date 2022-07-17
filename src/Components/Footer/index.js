import React from 'react';

import styles from './index.m.css';

const Footer = ({ message, setMessage, onBtnSubmit }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__textBox}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.footer__textarea}
        />
      </div>
      <div className={styles.footer__plate}>
        <button onClick={onBtnSubmit} className={styles.footer__btn}>
          Send message
        </button>
      </div>
    </footer>
  );
};

export default Footer;
