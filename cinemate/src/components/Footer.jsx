import logo from '../assets/logo.png';

const Footer = () => {
	return (
		<footer className='h-20 p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-900'>
			<div className='flex items-center gap-2'>
				<img className='w-10' src={logo} alt="CineMate logo" />
				<h1 className='text-2xl text-gray-900 dark:text-gray-50'>CineMate</h1>
			</div>
			<nav>
			</nav>
		</footer>
	)
};

export default Footer;