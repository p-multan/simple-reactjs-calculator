import React, { useState } from 'react';

import Screen from '../Screen/Screen';
import Keypad from '../Keypad/Keypad';
import Alert from '../Alert/Alert';

import * as math from 'mathjs';

import styles from './Calculator.module.css';

const Calculator = props => {
  const [alert, setAlert] = useState('');
  const [equation, setEquation] = useState('');
  const [result, setResult] = useState(0);

  const onButtonPress = e => {
    let equationVal = equation;
    const pressedBtn = e.target.textContent;

    if (pressedBtn === 'C') {
      return clear();
    } else if ((pressedBtn >= '0' && pressedBtn <= '9') || pressedBtn === '.') {
      equationVal += pressedBtn;
    } else if (['+', '-', '*', '/', '%'].indexOf(pressedBtn) !== -1) {
      equationVal += ` ${pressedBtn} `;
    } else if (pressedBtn === '=') {
      try {
        const eqResult = math.evaluate(equationVal);
        const result = Number.isInteger(eqResult)
          ? eqResult
          : eqResult.toFixed(2);
        setResult(result);
      } catch (error) {
        handleAlert('Wrong equation!');
      }
    } else if (pressedBtn === '←') {
      equationVal = equationVal.trim();
      equationVal = equationVal.substr(0, equationVal.length - 1);
    } else if (pressedBtn === '±') {
      equationVal = equationVal.split(' ');
      const lastChar = equationVal.pop();
      const modifiedChar =
        lastChar >= 0 && !isNaN(lastChar) && lastChar !== ''
          ? `(-${lastChar})`
          : lastChar;
      equationVal.push(modifiedChar);
      equationVal = equationVal.join(' ');
    }

    setEquation(equationVal);
  };

  const clear = () => {
    setEquation('');
    setResult(0);
  };

  const handleAlert = msg => {
    setAlert(msg);

    setTimeout(() => {
      setAlert('');
    }, 3000);
  };

  return (
    <main className={styles.Calculator}>
      <Screen equation={equation} result={result} />
      <Keypad onButtonPress={onButtonPress} />
      {alert ? <Alert>{alert}</Alert> : null}
    </main>
  );
};

export default Calculator;
