import { useState } from 'react'
import DataProducts from './Data/Productos'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function addToCart(product) {
    setCart([...cart, product]);
    setTotal(total + product.price);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Bienvenido a Mi Tienda en Línea</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} total={total} />
    </div>
  )
}

export default App
