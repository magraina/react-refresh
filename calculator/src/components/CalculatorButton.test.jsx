import { render, screen } from '@testing-library/react';
import CalculatorButton from './CalculatorButton';
import '@testing-library/jest-dom/jest-globals'

describe('CalculatorButton', () => {
	it('renders button with value', () => {
		render(<CalculatorButton value='1' onClick={() => { }} />);
		
		expect(screen.getByRole('button')).toHaveTextContent('1');
	});
	it('calls onClick handler', () => {
		const handleClick = jest.fn();
		render(<CalculatorButton value='1' onClick={handleClick} />);
		
		screen.getByRole('button').click();
		
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
