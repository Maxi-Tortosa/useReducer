import { useReducer, useState } from 'react';
import {
	contadorReducer,
	contadorInitialState,
	contadorInit,
} from '../../reducers/contadorReducer';
import { TYPES } from '../../actions/contadorActions';

const ContadorMejorado = () => {
	const [state, dispatch] = useReducer(
		contadorReducer,
		contadorInitialState,
		contadorInit
	);
	const sumar = () => dispatch({ type: TYPES.INCREMENT });
	const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
	const restar = () => dispatch({ type: TYPES.DECREMENT });
	const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
	const reset = () => dispatch({ type: TYPES.RESET });

	return (
		<div>
			<h2>Contador Mejorado</h2>
			<button onClick={restar5}>-5</button>
			<button onClick={restar}>-</button>
			<span>{state.contador}</span>
			<button onClick={sumar}>+</button>
			<button onClick={sumar5}>+5</button>
			<button onClick={reset}>reset</button>
		</div>
	);
};

export default ContadorMejorado;
