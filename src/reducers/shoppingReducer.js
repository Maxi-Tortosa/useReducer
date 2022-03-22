import { TYPES } from '../actions/shoppingActions';

export const shoppingInitialState = {
	products: [
		{ id: 1, img: './img/imagen.png', name: 'Producto1', price: 100 },
		{ id: 2, img: './img/imagen.png', name: 'Producto 2', price: 200 },
		{ id: 3, img: './img/imagen.png', name: 'Producto 3', price: 300 },
		{ id: 4, img: './img/imagen.png', name: 'Producto 4', price: 400 },
		{ id: 5, img: './img/imagen.png', name: 'Producto 5', price: 500 },
		{ id: 6, img: './img/imagen.png', name: 'Producto 6', price: 600 },
	],
	cart: [],
};

export function shoppingReducer(state, action) {
	switch (action.type) {
		case TYPES.ADD_TO_CART: {
			let product = state.products.find(
				(product) => product.id === action.payload
			);
			let repeatProduct = state.cart.find((prod) => prod.id === action.payload);
			const arr1 = state.cart.slice(0, state.cart.indexOf(repeatProduct));
			const arr2 = state.cart.slice(state.cart.indexOf(repeatProduct) + 1);
			let repeatQuantity = repeatProduct ? repeatProduct.quantity + 1 : null;
			let newItem = { ...product, ['quantity']: 1 };
			let repeatItem = { ...product, ['quantity']: repeatQuantity };

			return repeatProduct
				? {
						...state,
						cart: [...arr1, repeatItem, ...arr2],
				  }
				: { ...state, cart: [...state.cart, newItem] };
		}
		case TYPES.REMOVE_ONE_FROM_CART: {
			let product = state.products.find(
				(product) => product.id === action.payload
			);
			let deleteProduct = state.cart.find((prod) => prod.id === action.payload);
			let deleteQuantity = deleteProduct ? deleteProduct.quantity - 1 : null;
			const arr1 = state.cart.slice(0, state.cart.indexOf(deleteProduct));
			const arr2 = state.cart.slice(state.cart.indexOf(deleteProduct) + 1);
			let deleteItem = { ...product, ['quantity']: deleteQuantity };

			return deleteQuantity < 1
				? {
						...state,
						cart: [...arr1, ...arr2],
				  }
				: {
						...state,
						cart: [...arr1, deleteItem, ...arr2],
				  };
		}
		case TYPES.REMOVE_ALL_FROM_CART: {
			let deleteProduct = state.cart.find((prod) => prod.id === action.payload);
			const arr1 = state.cart.slice(0, state.cart.indexOf(deleteProduct));
			const arr2 = state.cart.slice(state.cart.indexOf(deleteProduct) + 1);
			return {
				...state,
				cart: [...arr1, ...arr2],
			};
		}
		case TYPES.CLEAR_CART:
			return shoppingInitialState;

		default:
			return state;
	}
}
