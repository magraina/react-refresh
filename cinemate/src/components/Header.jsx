import logo from '../assets/logo.png';
import { NavLink, useSearchParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useState } from 'react';

const navLinkClassNameConstructor = ({ isActive, isPending, isTransitioning }) => {
	return [
		'hover:bg-gray-200 dark:hover:bg-gray-800 p-1 rounded-md',
		isPending ? "pending" : "",
		isActive ? "font-bold text-gray-900 dark:text-gray-100" : "text-gray-600 dark:text-gray-400",
		isTransitioning ? "transitioning" : "",
	].join(" ").trim()
};

const Header = ({toggleTheme}) => {
	const [search, setSearch] = useState('');

	const [, setSearchParams] = useSearchParams();
	const searchOnPage = (event) => {
		if(event.key !== 'Enter') return;
		setSearchParams(`search=${search}`);
	};

	return (
		<header className='h-20 p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-900'>
			<div className='flex items-center gap-2'>
				<img className='w-10' src={logo} alt="CineMate logo" />
				<h1 className='text-2xl text-gray-900 dark:text-gray-50'>CineMate</h1>
			</div>
			<nav className='flex gap-5'>
				<NavLink className={navLinkClassNameConstructor} to="/">Home</NavLink>
				<NavLink className={navLinkClassNameConstructor} to="/popular">Popular</NavLink>
				<NavLink className={navLinkClassNameConstructor} to="/top-rated">Top rated</NavLink>
				<NavLink className={navLinkClassNameConstructor} to="/upcoming">Upcoming</NavLink>
			</nav>
			<div className='flex gap-2'>
				<button onClick={toggleTheme} className='text-gray-900 dark:text-gray-50'>Theme</button>
				<input value={search} onChange={(event) => setSearch(event.target.value)} onKeyDown={searchOnPage} className='bg-gray-300 dark:bg-gray-700 p-2 rounded-md' type="text" placeholder='Search...' />
			</div>
		</header>
	)
};
Header.propTypes = {
	toggleTheme: PropTypes.func,
}

export default Header