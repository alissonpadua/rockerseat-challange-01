import React from 'react';

import todoLogo from '../../assets/img/todoLogo.svg';

import styles from './styles.module.css';

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
        <img src={todoLogo} alt="Todo Logo"/>
    </div>
  );
}