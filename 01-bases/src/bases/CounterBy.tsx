import { useState } from "react";

interface ICounterprops {
	initialValue?: number;
}

interface CounterState {
	counter: number;
	clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: ICounterprops) => {
	const [{ counter, clicks }, setCounter] = useState<CounterState>({
		counter: initialValue,
		clicks: 0
	});

	const handleClick = (value: number) => {
		setCounter(({ counter, clicks }) => ({
			counter: counter + value,
			clicks: clicks + 1
		}));
	}

	return (
		<>
			<h2>CounterBy: { counter } - Clicks { clicks }</h2>
		
			<button
				onClick={ () => handleClick(1) }
			>
				+1
			</button>
			<button
				onClick={ () => handleClick(5) }
			>
				+5
			</button>
		</>
	)
}
