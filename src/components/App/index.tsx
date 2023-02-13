import React, { useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { AddButton } from '../../components/AddButton';
import { Counter } from '../../components/Counter';
import { Task } from '../../components/Task';

import '../../global.css'
import styles from './styles.module.css';
import ClipboardIcon from '../../assets/img/clipboard.svg';

interface TaskInterface {
  id: string,
  done: boolean,
  description?: string,
}

export const App: React.FC = () => {
  
  const [tasks, setTasks] = useState<TaskInterface[] | []>([]);
  const [description, setDescription] = useState<string>('');
  const [finished, setFinished] = useState<string>('');

  useEffect(() => {
    const finihsed = tasks.filter(t => t.done === true);
    setFinished(`${finihsed.length} de ${tasks.length}`);
  }, [tasks]);

  const addTask = () => {
    const id = crypto.randomUUID();

    const newTask: TaskInterface = {
      id,
      done: false,
      description,
    }
    if(description) {
      setTasks([...tasks, newTask]);
      setDescription('');
    }
  }

  const finishTask = (id: string) => {
    const mutableTasks = [...tasks];
    const finishedTask = mutableTasks.find(t => t.id === id);

    if(finishedTask) {
      finishedTask.done = !finishedTask.done;
      setTasks(mutableTasks);
    } 
  }


  const removeTask = (id: string) => {
    const newTasks = tasks.filter(t => t.id !== id);
    setTasks(newTasks);
  }

  return (
  <>
    <Header />
    <div className={styles.app}>
      <div className={styles.form}>
        <Input onChange={e => setDescription(e.target.value)} value={description} />
        <AddButton title='Criar' onClick={() => addTask()} />
      </div>
      <div className={styles.counters}>
        <Counter label='Tarefas criadas' value={tasks.length.toString()} />
        <Counter label='Concluídas' color='#8284FA' value={finished} />
      </div>
      <div className={styles.taskWrap}>
        { !tasks.length && (
          <div className={styles.noTask}>
            <img src={ClipboardIcon} alt="Clipboard Icon" />
            <p className={styles.title}>Você ainda não tem tarefas cadastradas</p>
            <p className={styles.subtitle}>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}

        {
          tasks.map((t) =>
            <Task
              key={t.id}
              id={t.id}
              description={t.description} done={t.done}
              onDelete={() => removeTask(t.id)}
              onFinishTask={() => finishTask(t.id)}
            />
          )
        }

      </div>
    </div>
  </>
  )
}
