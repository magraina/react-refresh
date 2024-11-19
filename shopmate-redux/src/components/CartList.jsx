import { removeFromCart, getCart, getCartTotal } from '../slice/CartSlice';
import { useDispatch, useSelector } from 'react-redux';

const CartList = () => {
	const cart = useSelector(getCart);
	const dispatch = useDispatch();
	const cartTotal = useSelector(getCartTotal);

  return (
	<div className='cart-list'>
		<h2>Cart List</h2>
		<p>Total: {cartTotal}$</p>
		{cart.map(product => (
			<div className='cart-item' key={product.id}>
				<p className='product-name'>{product.name}</p>
				<p className='product-price'>{product.price}$</p>
				<button onClick={() => dispatch(removeFromCart(product.id))}>Remove</button>
			</div>
		))}
	</div>
  )
}

export {CartList};