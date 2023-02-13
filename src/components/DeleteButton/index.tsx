import React, { ButtonHTMLAttributes } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

import styles from './styles.module.css';

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export const DeleteButton: React.FC<ButtonInterface> = ({ title, ...rest }) => {
  return (
    <button className={styles.button} {...rest}>
      {title}
      <HiOutlineTrash size={24}/>
    </button>
  );
}
