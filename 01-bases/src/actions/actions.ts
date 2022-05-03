
export type CounterAction = 
	| { type: 'INCREMENT', payload: { value: number} }
	| { type: 'RESET' } 
	| { type: 'DECREMENT', payload: { value: number} }
;

export const doReset = (): CounterAction => ({
	type: 'RESET',
})

export const doIncrement = (value: number): CounterAction => ({
	type: 'INCREMENT',
	payload: {
		value
	}
});