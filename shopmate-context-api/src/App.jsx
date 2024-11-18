import './App.css'
import { ProductList } from './components/ProductList'
import { CartProvider } from './reducer/CartReducer';
import { CartList } from './components/CartList';

function App() {

  return (
    <div className='App'>
      <CartProvider>
        <h1>Product List</h1>
        <ProductList />
        <CartList />
      </CartProvider>
    </div>
  )
}

export default App
