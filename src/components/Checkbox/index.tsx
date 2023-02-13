import React, { InputHTMLAttributes, useId } from 'react';

import styles from './styles.module.css';


export const Checkbox: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({...rest}) => {
    const ID = useId();
  return (
    <div className={styles.round}>
        <input type="checkbox" id={ID} {...rest} />
        <label htmlFor={ID}></label>
    </div>
  );
}
