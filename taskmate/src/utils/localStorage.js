const getInitialTasks = () => {
	const savedTasks = localStorage.getItem('tasks');
	if (savedTasks) {
		return JSON.parse(savedTasks);
	}
	return [];
}

const saveTasks = (tasks) => {
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

export { getInitialTasks, saveTasks };