import React from 'react';

import styles from './Alert.module.css';

const Alert = props => {
  return <div className={styles.Alert}>{props.children}</div>;
};

export default Alert;
