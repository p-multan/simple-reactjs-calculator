import React from 'react';

import styles from './KeypadRow.module.css';

const KeypadRow = props => {
  return <div className={styles.KeypadRow}>{props.children}</div>;
};

export default KeypadRow;
