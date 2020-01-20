import React from 'react';

import styles from './ResultScreen.module.css';

const ResultScreen = props => {
  return <div className={styles.ResultScreen}>{props.children}</div>;
};

export default ResultScreen;
