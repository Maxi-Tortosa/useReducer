import { useReducer, useState } from 'react';
import {
	shoppingInitialState,
	shoppingReducer,
} from '../../reducers/shoppingReducer';
import styled from 'styled-components';
import ProductItem from '../ProductItem';
import CartItem from '../CartItem';
import { TYPES } from '../../actions/shoppingActions';
import { BsCartFill } from 'react-icons/bs';

const ShoppingCart = ({ tittle }) => {
	const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
	const [cartContainer, setCartContainer] = useState(false);
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

	console.log(cart);
	return (
		<Container>
			<div className='header'>
				<h1>{tittle}</h1>{' '}
				<BsCartFill
					className='cartIcon'
					onClick={() =>
						cartContainer ? setCartContainer(false) : setCartContainer(true)
					}
				/>
			</div>
			<h3 style={{ marginLeft: '1rem' }}>Productos</h3>
			<div className='grid-responsive'>
				{products.map((product) => (
					<ProductItem key={product.id} data={product} addToCart={addToCart} />
				))}
			</div>
			{cartContainer ? (
				<div className='cart'>
					<button onClick={() => setCartContainer(false)}>x</button>
					<button onClick={clearCart}>Limpiar carrito</button>{' '}
					<div className='cartProducts'>
						{cart.length != 0 ? (
							cart.map((item, i) => (
								<CartItem key={i} data={item} delFromCart={delFromCart} />
							))
						) : (
							<span className='vacio'>El carrito está vacío</span>
						)}
					</div>
				</div>
			) : null}
		</Container>
	);
};

export default ShoppingCart;

const Container = styled.div`
	padding: 0 10rem;
	.grid-responsive {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 3rem;
	}

	.header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.cart {
		border: 1px solid black;
		margin: 1rem auto;
		padding: 2rem 0;
		width: 50%;
		height: 30rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		.cartProducts {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			width: 100%;
			height: 90%;
			.vacio {
				height: 10%;
				margin: auto 0;
			}
		}
	}
	.cartIcon {
		align-self: center;
		cursor: pointer;
		padding: 1rem;
		border: 1px solid black;
		border-radius: 22px;
	}
`;
