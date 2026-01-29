import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { store } from './store.js';
import Cart from './Cart.jsx';
import ProductList from './ProductList.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <div style={{maxWidth:900,margin:"20px auto",padding:20,border:"1px solid black"}}>
        <h1 style={{textAlign:"center"}}>My Shop</h1>
        <ProductList />
        <Cart />
      </div>
    </Provider>
    {/* <App /> */}

  </StrictMode>,
)