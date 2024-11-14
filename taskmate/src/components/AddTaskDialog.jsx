import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import './AddTaskDialog.css';

const AddTaskDialog = ({ openDialog, updateTasks }) => {
	const ref = useRef();
	const [name, setName] = useState('');

	useEffect(() => {
		if(openDialog) {
			ref.current?.showModal();
		} else {
			setName('');
			ref.current?.close();
		}
	}, [openDialog]);

	const handleFormSubmit = (event) => {
		event.preventDefault();
		updateTasks(name);
	};

	return (
		<dialog ref={ref} id='task-dialog'>
			<h2>Add new Task</h2>
			<form className='dialog-container' onSubmit={handleFormSubmit}>
				<input type="text" value={name} onChange={(event) => setName(event.target.value)} />
				<button type='submit'>Add</button>
			</form>
		</dialog>
	);
};

AddTaskDialog.propTypes = {
	openDialog: PropTypes.bool.isRequired,
	updateTasks: PropTypes.func.isRequired,
};

export default AddTaskDialog;