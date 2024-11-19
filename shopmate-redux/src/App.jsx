import { ProductList } from './components/ProductList';
import { Provider } from 'react-redux';
import { CartList } from './components/CartList';
import { store } from './stores/CartStore';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Provider store={store}>
        <h1>Product List</h1>
        <ProductList />
        <CartList />
      </Provider>
    </div>
  )
}

export default App
