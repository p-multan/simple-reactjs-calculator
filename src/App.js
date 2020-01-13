import React from 'react';
import './styles/styles.css';
import Calculator from './layout/Calculator/Calculator';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.App}>
      <Calculator />
    </div>
  );
};

export default App;
