import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		addToCart: (state, action) => {
			state.push(action.payload);
		},
		removeFromCart: (state, action) => {
			return state.filter((item) => item.id !== action.payload);
		},
		clearCart: () => {
			return [];
		},
	},
	selectors: {
		getCart: (state) => state.cart,
		getCartTotal: (state) => {
			return state.cart.reduce((total, product) => total + product.price, 0);
		},
	}
});

export const { getCart, getCartTotal } = cartSlice.getSelectors();


export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;