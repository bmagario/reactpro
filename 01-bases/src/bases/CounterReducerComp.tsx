import { useReducer } from "react";
import { doIncrement, doReset } from "../actions/actions";
import { counterReducer, INITIAL_STATE } from "../reducers/counterReducer";

export const CounterReducerComp = () => {
	const [{ counter }, dispatch] = useReducer(counterReducer, INITIAL_STATE);

	const handleIncrement = (value: number) => {
		dispatch(doIncrement(value));
	}

	const handleReset = () => {
		dispatch(doReset());
	}

	return (
		<>
			<h2>Counter Red Comp: { counter }</h2>
		
			<button
				onClick={ () => handleIncrement(1) }
			>
				+1
			</button>
			<button
				onClick={ () => handleIncrement(5) }
			>
				+5
			</button>
			<button
				onClick={ handleReset }
			>
				Reset
			</button>
		</>
	)
}
