import { CounterAction } from "../actions/actions";

interface ICounterState {
	counter: number;
	prev: number;
	changes: number;
}

export const INITIAL_STATE:ICounterState = {
	counter: 0,
	prev: 0,
	changes: 0
};


export const counterReducer = (state:ICounterState, action:CounterAction): ICounterState => {
	switch (action.type) {
		case "INCREMENT":
			return {
				...state,
				counter: state.counter + action.payload.value,
				prev: state.counter,
				changes: state.changes + 1
			};
		case "DECREMENT":
			return {
				...state,
				counter: state.counter - action.payload.value,
				prev: state.counter,
				changes: state.changes + 1
			};
		case "RESET":
			return {
				...INITIAL_STATE
			};
		default:
			return state;
	}
}