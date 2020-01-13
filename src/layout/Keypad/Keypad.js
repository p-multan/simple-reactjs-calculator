import React from 'react';
import KeypadRow from './KeypadRow/KeypadRow';

import styles from './Keypad.module.css';

const Keypad = () => {
  return (
    <section className={styles.Keypad}>
      <KeypadRow />
      <KeypadRow />
      <KeypadRow />
      <KeypadRow />
      <KeypadRow />
    </section>
  );
};

export default Keypad;
