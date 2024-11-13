import PropTypes from 'prop-types';
import './CalculatorButton.css';

function CalculatorButton({ value, colored, onClick }) {
	return (
		<button className={`calculator-button ${colored ? 'colored' : ''}`} onClick={() => onClick(value)}>
		{value}
		</button>
	);
}
CalculatorButton.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	colored: PropTypes.bool,
	onClick: PropTypes.func.isRequired
}

export default CalculatorButton