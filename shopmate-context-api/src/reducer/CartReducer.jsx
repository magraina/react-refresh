
import { CartContext, CartDispatchContext } from '../context/CartContext';
import { useReducer } from 'react';
import PropTypes from 'prop-types';

const CartReducer = (currentCart, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return [...currentCart, action.payload];
		case 'REMOVE_FROM_CART':
			return currentCart.filter((item) => item.id !== action.payload);
		case 'CLEAR_CART':
			return [];
		default:
			return currentCart;
	}
}

const initialCart = [];

const CartProvider = (props) => {
	const [cart, dispatch] = useReducer(CartReducer, initialCart);

	const addToCart = (product) => {
		dispatch({
			type: 'ADD_TO_CART',
			payload: product,
		});
	};

	const removeFromCart = (productId) => {
		dispatch({
			type: 'REMOVE_FROM_CART',
			payload: productId,
		});
	};

	const clearCart = () => {
		dispatch({
			type: 'CLEAR_CART',
		});
	};

	const isInCart = (productId) => {
		return cart.some((product) => product.id === productId);
	}

	const getCartTotal = () => {
		return cart.reduce((total, product) => total + product.price, 0);
	};

	return (
		<CartContext.Provider value={{ cart, getCartTotal, isInCart }}>
			<CartDispatchContext.Provider value={{ addToCart, removeFromCart, clearCart }}>
				{props.children}
			</CartDispatchContext.Provider>
		</CartContext.Provider>
	);
}
CartProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export { CartProvider };