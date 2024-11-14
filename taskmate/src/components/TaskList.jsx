import {} from 'react';
import PropTypes from 'prop-types';
import './TaskList.css';
import { saveTasks } from '../utils/localStorage';

const TaskList = ({tasks, setTasks}) => {
	const removeTask = (id) => {
		setTasks((currentTask) => {
			const newTasks = currentTask.filter((task) => id !== task.id);
			saveTasks(newTasks);
			
			return newTasks;
		});
		};

	return (
		
	<section className='task-list'>
		{ tasks.length === 0 ? (<p>There are no Tasks :(</p>) : ''}
		{tasks.map((task) => (
			<article className='task-card' key={task.id}>
				<p>{task.name}</p>
				<button className='delete-button' onClick={() => removeTask(task.id)}>Delete</button>
			</article>
		))}
	</section>
  )
};

TaskList.propTypes = {
	tasks: PropTypes.array.isRequired,
	setTasks: PropTypes.func.isRequired,
};

export default TaskList