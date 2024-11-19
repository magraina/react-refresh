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
	}
});

export const selectCart = (state) => state.cart;

export const { addToCart, removeFromCart, clearCart, getCartTotal, isInCart } = cartSlice.actions;
export default cartSlice.reducer;