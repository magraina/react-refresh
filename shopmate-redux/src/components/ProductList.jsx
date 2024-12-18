import {useState} from 'react';
import './ProductList.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, addToCart, removeFromCart } from '../slice/CartSlice';

const productList = [
	{ id: 10002, name: 'Django Framework for Beginners', price: 29, in_stock: true },
	{ id: 10003, name: 'Basics To Advanced In React', price: 29, in_stock: true },
	{ id: 10004, name: 'Angular In Depth', price: 29, in_stock: true },
	{ id: 10005, name: 'Vue for Beginners', price: 29, in_stock: true },
	{ id: 10006, name: 'Svelte for Beginners', price: 29, in_stock: true },
	{ id: 10007, name: 'Node.js for Beginners', price: 29, in_stock: false },
];

export const ProductList = () => {
	const [products] = useState(productList);
	const cart = useSelector(getCart);

	const dispatch = useDispatch();


	const isInCart = (productId) => {
		return cart.some((product) => product.id === productId);
	}


  return (
	<>
	<section className='product-list'>
		{products.map(product => (
			<div className='product-card' key={product.id}>
				<p className='product-id'>{product.id}</p>
				<p className='product-name'>{product.name}</p>
				<p className='product-info'>
					<span>{product.price}$</span>
					<span className={product.in_stock ? 'in-stock': 'out-of-stock'}>{product.in_stock ? 'In Stock': 'Unavailable'}</span>
				</p>
				
				{ product.in_stock ? isInCart(product.id) ? <button className='in-cart' onClick={() => dispatch(removeFromCart(product.id))}>Remove from Cart</button> :
					<button className='add-to-cart' onClick={()=> dispatch(addToCart(product))}>Add to Cart</button>
				: ''}
			</div>
		))}
	</section>
	</>
  )
};
