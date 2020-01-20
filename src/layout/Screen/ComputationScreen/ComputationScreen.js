import React from 'react';

import styles from './ComputationScreen.module.css';

const ComputationScreen = props => {
  return <div className={styles.ComputationScreen}>{props.children}</div>;
};

export default ComputationScreen;
