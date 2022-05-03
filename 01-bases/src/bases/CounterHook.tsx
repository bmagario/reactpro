
import { useCounter } from "../hooks/useCounter";

export const CounterHook = () => {
	const { counter, handleClick, counterEff } = useCounter({ maxCount: 10 });
	
	return (
		<>
			<h2>CounterHook</h2>
			<h3 ref={counterEff}>{ counter }</h3>
		
			<button
				onClick={ handleClick }
			>
				+1
			</button>
		</>
	)
}
