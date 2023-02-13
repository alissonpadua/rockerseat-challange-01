import React from 'react';

import styles from './styles.module.css';

interface CounterInterface {
    label: string;
    color?: string;
    value: string;
}

export const Counter: React.FC<CounterInterface> = ({ label, color, value }) => {
    return (
        <div className={styles.wrapper}>
            {
                color
                ? <p className={styles.label} style={{ color }}>{label}</p>
                : <p className={styles.label}>{label}</p>
            }
            <span className={styles.value}>{value}</span>
        </div>
    );
}