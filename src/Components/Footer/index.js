import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { textAreaMessage } from '../../Storage/Action';

import PropTypes from 'prop-types';

import styles from './index.m.css';

const Footer = ({ onBtnSubmit, user }) => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);

  return (
    <footer className={styles.footer}>
      <form onSubmit={onBtnSubmit}>
        <div className={styles.footer__textBox}>
          <input
            type="textarea"
            value={message}
            onChange={(e) => dispatch(textAreaMessage(e.target.value))}
            className={styles.footer__textarea}
          />
        </div>
        <div className={styles.footer__plate}>
          <button
            type="submit"
            disabled={user ? false : true}
            className={styles.footer__btn}
          >
            Send message
          </button>
        </div>
      </form>
    </footer>
  );
};

Footer.propTypes = {
  onBtnSubmit: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
};

export default Footer;
