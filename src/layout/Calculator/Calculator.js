import React from 'react';
import Screen from '../Screen/Screen';
import Keypad from '../Keypad/Keypad';

import styles from './Calculator.module.css';

const Calculator = () => {
  return (
    <main className={styles.Calculator}>
      <Screen />
      <Keypad />
    </main>
  );
};

export default Calculator;
