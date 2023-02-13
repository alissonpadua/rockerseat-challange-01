import React, { InputHTMLAttributes } from 'react';

import styles from './styles.module.css';

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({...rest}) => {
  return <input className={styles.input} type="text" placeholder='Adicione uma nova tarefa' {...rest} />;
}
