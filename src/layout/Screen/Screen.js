import React from 'react';
import ResultScreen from './ResultScreen/ResultScreen';
import ComputationScreen from './ComputationScreen/ComputationScreen';

import styles from './Screen.module.css';

const Screen = () => {
  return (
    <section className={styles.Screen}>
      <ResultScreen />
      <ComputationScreen />
    </section>
  );
};

export default Screen;
