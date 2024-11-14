import {} from 'react';
import './Footer.css';
import logo from '../assets/SheepLogoV4GrauTransparent.svg'

const Header = () => {
  return (
	<footer>
		<a href="https://sheepcs.de/">
			<img src={logo} alt="Sheep Logo" />
		</a>
		<a href='https://sheepcs.de/en/imprint.html'>- Imprint -</a>
		<p>&copy; 2024 - M.Egner</p>
	</footer>
  )
};

export default Header;
