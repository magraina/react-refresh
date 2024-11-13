import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import PropTypes from 'prop-types';

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


	return (
		<dialog ref={ref} id='task-dialog'>
			<div className='grid-container'>
			<h2>Add new Task</h2>
			<label htmlFor="name">Name</label>
			<input type="text" value={name} onChange={(event) => setName(event.target.value)} />
			<button onClick={()=> updateTasks(name)}>Add</button>
			</div>
		</dialog>
	);
};

AddTaskDialog.propTypes = {
	openDialog: PropTypes.bool.isRequired,
	updateTasks: PropTypes.func.isRequired,
};

export default AddTaskDialog;