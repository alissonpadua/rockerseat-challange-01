import React from 'react';
import { Checkbox } from '../Checkbox';
import { DeleteButton } from '../DeleteButton';

import styles from './styles.module.css';

export interface TaskInterface {
  id: string,
  done: boolean,
  description?: string,
  onDelete?: () => void
  onFinishTask?: () => void
}

export const Task: React.FC<TaskInterface> = ({description, done, onDelete, onFinishTask}) => {
  return (
    <div className={styles.task}>
        <Checkbox onClick={onFinishTask}/>
        <div style={{flex: 1}}>
            <p className={done ? styles.done : ''}>{description}</p>
        </div>
        <DeleteButton title='' onClick={onDelete}/>
    </div>
  );
}