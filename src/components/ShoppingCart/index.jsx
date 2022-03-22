import { useReducer } from 'react';
import {
	shoppingInitialState,
	shoppingReducer,
} from '../../reducers/shoppingReducer';
import styled from 'styled-components';
import ProductItem from '../ProductItem';
import CartItem from '../CartItem';
import { TYPES } from '../../actions/shoppingActions';

const ShoppingCart = ({ tittle }) => {
	const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
	const { products, cart } = state;

	const addToCart = (id) => {
		dispatch({ type: TYPES.ADD_TO_CART, payload: id });
	};

	const delFromCart = (e, id) => {
		e.preventDefault();
		const button = e.target.textContent;
		button === 'Eliminar 1'
			? dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id })
			: dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
	};

	const clearCart = () => {
		dispatch({ type: TYPES.CLEAR_CART });
	};

	return (
		<Container>
			<h1>{tittle}</h1>
			<h3>Productos</h3>
			<div className='grid-responsive'>
				{products.map((product) => (
					<ProductItem key={product.id} data={product} addToCart={addToCart} />
				))}
			</div>
			<h3>Carrito</h3>
			<div>
				<button onClick={clearCart}>Limpiar carrito</button>
				{cart.map((item, i) => (
					<CartItem key={i} data={item} delFromCart={delFromCart} />
				))}
			</div>
		</Container>
	);
};

export default ShoppingCart;

const Container = styled.div`
	.grid-responsive {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}
`;
