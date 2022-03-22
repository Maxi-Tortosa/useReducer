import React from 'react';
import styled from 'styled-components';

const CartItem = ({ data, delFromCart }) => {
	let { id, name, price, quantity } = data;
	return (
		<Container>
			<h4>{name}</h4>
			<h5>$ {price}.00</h5>
			<span>Cant:{quantity} </span>
			<button onClick={(e) => delFromCart(e, id)}>Eliminar 1</button>
			<button onClick={(e) => delFromCart(e, id)}>Eliminar todos</button>
		</Container>
	);
};

export default CartItem;

const Container = styled.div`
	border-bottom: thin solid gray;
`;
