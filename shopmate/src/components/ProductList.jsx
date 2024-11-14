import {useEffect, useState} from 'react';
import './ProductList.css';

export const ProductList = () => {
	const [products, setProducts] = useState([]);
	const [url, setUrl] = useState('http://localhost:3000/api/products');

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(data => setProducts(data));
	}, [url]);

  return (
	<>
	<div className='product-filter'>
		<button onClick={() => setUrl('http://localhost:3000/api/products')} >All</button>
		<button onClick={() => setUrl('http://localhost:3000/api/products?in_stock=true')} >In Stock</button>
	</div>
	<section className='product-list'>
		{products.map(product => (
			<div className='product-card' key={product.id}>
				<p className='product-id'>{product.id}</p>
				<p className='product-name'>{product.name}</p>
				<p className='product-info'>
					<span>{product.price}$</span>
					<span className={product.in_stock ? 'in-stock': 'out-of-stock'}>{product.in_stock ? 'In Stock': 'Unavailable'}</span>
				</p>
			</div>
		))}
	</section>
	</>
  )
};
