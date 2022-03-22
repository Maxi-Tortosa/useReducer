import React from 'react';
import styled from 'styled-components';

const CartItem = ({ data, delFromCart }) => {
	let { id, img, name, price, quantity } = data;

	console.log(data);
	return (
		<Container>
			<img src={img} />
			<h4>{name}</h4>
			<h5>$ {price}.00</h5>
			<span>Cantidad: {quantity} un </span>
			<span>Total: $ {quantity * price}.00</span>
			<button onClick={(e) => delFromCart(e, id)}>Eliminar 1</button>
			<button onClick={(e) => delFromCart(e, id)}>Eliminar todos</button>
		</Container>
	);
};

export default CartItem;

const Container = styled.div`
	margin: 0.2rem 0;
	width: 90%;
	height: 15%;
	border: thin solid gray;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;

	img {
		width: 20px;
	}
`;
