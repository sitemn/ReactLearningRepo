import React from 'react';
import { useState } from 'react';

export default function Main4() {
    const products = ['rice', 'sugar', 'wheat'];
    const [cart, setCart] = useState(0);

    const addCart = () =>{
        setCart(cart + 1);
    }
    
  return (
    <div>
        Products
        <ul>
            {products.map((product, index) => (
                <li>{product} <button onClick={addCart}>Add to cart</button></li>
            ))}
        </ul>
        <p>Cart: {cart}</p>
    </div>
  )
}
