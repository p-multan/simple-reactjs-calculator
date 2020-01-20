import React from 'react';
import ResultScreen from './ResultScreen/ResultScreen';
import ComputationScreen from './ComputationScreen/ComputationScreen';

import styles from './Screen.module.css';

const Screen = props => {
  return (
    <section className={styles.Screen}>
      <ResultScreen>{props.result}</ResultScreen>
      <ComputationScreen>{props.equation}</ComputationScreen>
    </section>
  );
};

export default Screen;
