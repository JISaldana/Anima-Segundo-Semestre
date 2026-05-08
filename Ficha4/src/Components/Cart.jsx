/*create cart show products added to cart within a list and total  price*/

import { useState } from 'react';
import DataProducts from '../Data/Productos';

function Cart({ cart, total }) {
    return (
        <div>
            <h2>Carrito de Compras</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
                ))}
            </ul>
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>
    );
}

export default Cart;

