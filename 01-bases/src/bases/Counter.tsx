import { useState } from "react";

interface ICounterprops {
	initialValue?: number;
}

export const Counter = ({ initialValue = 0 }: ICounterprops) => {
	const [counter, setCounter] = useState(initialValue);

	const handleClick = () => {
		setCounter(counter + 1);
	}

	return (
		<>
			<h2>Counter: { counter }</h2>
		
			<button
				onClick={ handleClick }
			>
				+1
			</button>
		</>
	)
}
