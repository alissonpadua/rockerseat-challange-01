import React, { ButtonHTMLAttributes } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

import styles from './styles.module.css';

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export const AddButton: React.FC<ButtonInterface> = ({ title, ...rest }) => {
  return (
    <button className={styles.button} {...rest}>
      {title}
      <FiPlusCircle />
    </button>
  );
}
