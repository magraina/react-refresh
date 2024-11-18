import { useContext } from 'react';
import { CartContext, CartDispatchContext } from '../context/CartContext';

const CartList = () => {
	const { cart, getCartTotal } = useContext(CartContext);
	const { removeFromCart } = useContext(CartDispatchContext);
  return (
	<div className='cart-list'>
		<h2>Cart List</h2>
		<p>Total: {getCartTotal()}$</p>
		{cart.map(product => (
			<div className='cart-item' key={product.id}>
				<p className='product-name'>{product.name}</p>
				<p className='product-price'>{product.price}$</p>
				<button onClick={() => removeFromCart(product.id)}>Remove</button>
			</div>
		))}
	</div>
  )
}

export {CartList};