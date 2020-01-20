import React from 'react';
import cx from 'classnames';

import styles from './Button.module.css';

const Button = props => {
  const classes = ['Btn'];

  if (typeof props !== 'undefined' && typeof props.type !== 'undefined') {
    classes.push(`Btn--${props.type}`);
  }

  let className = cx(styles.Btn, {
    [styles['Btn--large']]: props.type === 'large',
    [styles['Btn--primary']]: props.type === 'primary',
    [styles['Btn--operator']]: props.type === 'operator'
  });

  return (
    <button className={className} onClick={props.onButtonPress}>
      {props.children}
    </button>
  );
};

export default Button;
