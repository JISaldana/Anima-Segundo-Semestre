/*create e-commerce header*/
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import DataProducts from '../Data/Productos';
import ProductList from './ProductList';
import Cart from './Cart';

function Header() {
    return (
        <header>
            <h1>Mi Tienda en Línea</h1>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/products">Productos</Link></li>
                    <li><Link to="/cart">Carrito</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;