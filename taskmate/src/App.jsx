import { useState } from 'react'
import './App.css'
import AddTaskDialog from './components/AddTaskDialog';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskList from './components/TaskList';
import { getInitialTasks, saveTasks } from './utils/localStorage';

function App() {
  const [tasks, setTasks] = useState(getInitialTasks)
  const [dialogOpen, setDialogOpen] = useState(false);

  const updateTasks = (name) => {
    setTasks((currentTasks) => {
      setDialogOpen(false);
      const newTasks = [
        ...currentTasks,
        {
          id: Math.floor(Math.random() * 10_000),
          name: name,
        },
      ];
      saveTasks(newTasks);

      return newTasks;
    });
  };

  return (
    <>
      <Header />
      <main>
        <div className='control-bar'>
          <button className='add-task-button' onClick={() => setDialogOpen(true)}>Add New Task</button>
        </div>
        <TaskList tasks={tasks} setTasks={setTasks} />
        <AddTaskDialog openDialog={dialogOpen} updateTasks={updateTasks} />
      </main>
      <Footer/>
    </>
  )
}

export default App
