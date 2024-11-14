import {} from 'react';
import './Header.css';
import logo from '../assets/SheepLogoV4GrauTransparent.svg'

const Header = () => {
  return (
	<header>
		<a href="https://sheepcs.de/">
			<img src={logo} alt="Sheep Logo" />
		</a>
		<h1>TaskMate</h1>
		<div>&nbsp;</div>
	</header>
  )
};

export default Header;
