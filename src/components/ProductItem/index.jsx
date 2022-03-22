import styled from 'styled-components';

const ProductItem = ({ data, addToCart }) => {
	let { id, name, price } = data;
	return (
		<Box>
			<h4>{name}</h4>
			<h5>$ {price}.00</h5>
			<button onClick={() => addToCart(id)}>Agregar</button>
		</Box>
	);
};

export default ProductItem;

const Box = styled.div`
	border: thin solid gray;
	padding: 1rem;
	margin: 1rem;
	box-shadow: 0 0 1rem #00000025 inset;
`;
