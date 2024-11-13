import { useState } from 'react';
import './App.css';
import CalculatorButton from './components/CalculatorButton';

function App() {
	const [calculation, setCalculation] = useState('0');

	const updateCalculation = (value) => {
		setCalculation((prevCalculation) => {
			if(prevCalculation === '0') {
				return value;
			}
			return prevCalculation + value;
		});
	};

	const resetCalculation = () => {
		setCalculation('0');
	};

	const calculateResult = () => {
		setCalculation((prevCalculation) => {
			try {
				return eval(prevCalculation);
			} catch (error) {
				return 'Error';
			}
		});
	}

	const removeLastCharacter = () => {
		setCalculation((prevCalculation) => {
			if(prevCalculation.length === 1) {
				return '0';
			}
			return prevCalculation.slice(0, -1);
		});
	}

	return (
		<>
			<h1>Calculator</h1>
			<h1>{calculation}</h1>
			<div className="calculator-button-field">
				<CalculatorButton value="AC" colored onClick={resetCalculation} />
				<CalculatorButton value="" onClick={()=>{}} />
				<CalculatorButton value="" onClick={()=>{}} />
				<CalculatorButton value="/" colored onClick={updateCalculation} />
				<CalculatorButton value="7" onClick={updateCalculation} />
				<CalculatorButton value="8" onClick={updateCalculation} />
				<CalculatorButton value="9" onClick={updateCalculation} />
				<CalculatorButton value="*" colored onClick={updateCalculation} />
				<CalculatorButton value="4" onClick={updateCalculation} />
				<CalculatorButton value="5" onClick={updateCalculation} />
				<CalculatorButton value="6" onClick={updateCalculation} />
				<CalculatorButton value="-" colored onClick={updateCalculation} />
				<CalculatorButton value="1" onClick={updateCalculation} />
				<CalculatorButton value="2" onClick={updateCalculation} />
				<CalculatorButton value="3" onClick={updateCalculation} />
				<CalculatorButton value="+" colored onClick={updateCalculation} />
				<CalculatorButton value="0" onClick={updateCalculation} />
				<CalculatorButton value="." onClick={updateCalculation} />
				<CalculatorButton value="C" colored onClick={removeLastCharacter} />
				<CalculatorButton value="=" colored onClick={calculateResult} />
			</div>
			
		</>
	);
}

export default App;
