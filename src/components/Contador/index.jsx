import { useReducer, useState } from 'react';

const initialState = { contador: 0 };

const init = (initialState) => {
	return { contador: initialState.contador + 100 };
};
const TYPES = {
	INCREMENT: 'INCREMENT',
	DECREMENT: 'DECREMENT',
	INCREMENT_5: 'INCREMENT_5',
	DECREMENT_5: 'DECREMENT_5',
	RESET: 'RESET',
};

function reducer(state, action) {
	switch (action.type) {
		case TYPES.INCREMENT:
			return { contador: state.contador + 1 };
		case TYPES.INCREMENT_5:
			return { contador: state.contador + action.payload };
		case TYPES.DECREMENT:
			return { contador: state.contador - 1 };
		case TYPES.DECREMENT_5:
			return { contador: state.contador - action.payload };
		case TYPES.RESET:
			return initialState;
	}
}

const Contador = () => {
	const [state, dispatch] = useReducer(reducer, initialState, init);
	const sumar = () => dispatch({ type: TYPES.INCREMENT });
	const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
	const restar = () => dispatch({ type: TYPES.DECREMENT });
	const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
	const reset = () => dispatch({ type: TYPES.RESET });

	return (
		<div>
			<h2>Contador</h2>
			<button onClick={restar5}>-5</button>
			<button onClick={restar}>-</button>
			<span>{state.contador}</span>
			<button onClick={sumar}>+</button>
			<button onClick={sumar5}>+5</button>
			<button onClick={reset}>reset</button>
		</div>
	);
};

export default Contador;
