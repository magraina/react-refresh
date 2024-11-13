import { useState } from 'react'
import styles from './App.module.css'
import AddTaskDialog from './components/AddTaskDialog';

function App() {
  const [tasks, setTasks] = useState([{ id: 1, name: 'Task 1' }, { id: 2, name: 'Task 2' }])
  const [dialogOpen, setDialogOpen] = useState(false);

  const removeTask = (id) => {
    setTasks((currentTask) => {
      return currentTask.filter((task) => id !== task.id);
    });
  };

  const updateTasks = (name) => {
    setTasks((currentTasks) => {
      const newTasklist = [...currentTasks];
      newTasklist.push({
        id: Math.floor(Math.random() * 10_000),
        name: name,
      });

      setDialogOpen(false);
      return newTasklist;
    });
  };

  return (
    <>
      <h1>Task Mate</h1>
      <div className={styles['grid-container']}>
        <button onClick={() => setDialogOpen(true)}>Add New Task</button>
      </div>
      <ul className={styles['task-list']}>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => removeTask(task.id)} >Delete</button>
          </li>
        ))}
      </ul>
      <AddTaskDialog openDialog={dialogOpen} updateTasks={updateTasks} />
    </>
  )
}

export default App
