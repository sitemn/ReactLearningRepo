import React, {useState, useEffect} from 'react';
import './Main7.css';


export default function ShoppingCart() {
    const [name, setName] = useState('');
    const [cart, setCart] = useState([]);

    let Products = [
        { id: 1, name: 'Laptop', price: 999.99, quantity: 1, description: 'High performance laptop with 16GB RAM', rate: 4.5, review: 120 },
        { id: 2, name: 'Smartphone', price: 799.99, quantity: 1, description: 'Latest smartphone with advanced features', rate: 4.7, review: 200 },
        { id: 3, name: 'Headphones', price: 199.99, quantity: 1, description: 'Noise cancelling wireless headphones', rate: 4.3, review: 90 },
        { id: 4, name: 'Smartwatch', price: 299.99, quantity: 1, description: 'Water-resistant smartwatch with long battery life', rate: 4.6, review: 150 },
        { id: 5, name: 'Speaker', price: 129.99, quantity: 1, description: 'Portable speaker with crystal-clear sound quality', rate: 4.8, review: 180 },
        { id: 6, name: 'E-Reader', price: 89.99, quantity: 1, description: 'Lightweight e-reader with paper-like display', rate: 4.4, review: 75 },
    ];
    const [filteredData, setFilteredData] = useState(Products);

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    const handleFilter = () => {
        setFilteredData(name.trim() === '' ? Products : Products.filter(item => item.name.toLowerCase().includes(name.toLowerCase())));
    };  

    useEffect(() => {handleFilter()},[name, Products]);

    const [totalQty, setTotalQty] = useState(0);
    const [orderValue, setOrderValue] = useState(0);
    
    useEffect(() => {
        setTotalQty(
            cart.reduce((pre, cur)=>{
                return pre + cur.quantity;
            }, 0)
        );

        setOrderValue(
            cart.reduce((pre, cur) => {
                return pre + (cur.quantity * cur.price)
            }, 0)
        )
        }, [cart]);

    const handleAddCart = (product) => {
        const isProductInCart = cart.find(item => item.id === product.id);
        if(!isProductInCart){
            setCart([...cart, product]);
        }else{
            alert("This product already in the cart!");
            return;
        }
    };  
    
    const handleDeleteCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const handleUpdateQty = (id, qty) =>{
        if(qty===0){
            setCart(cart.filter(item => item.id !== id));
        }else{
            const updatedCart = cart.map(item =>
                item.id === id ? { ...item, quantity: qty } : item
              );
            setCart(updatedCart);
        }
        
    }

    return (
    <div>
        <h1>Products</h1>
        <input type='text' onChange={handleInputChange}></input>
        <br />
        <br />
        <div className="product-grid">
            {filteredData.map(product => (
                <div className="product-item" key={product.id}>
                    <strong>{product.name} - ${product.price}</strong><br />
                    <span>{product.description}</span><br />
                    <span>Rate: {product.rate}, Reviews: {product.review}</span><br />
                    <button onClick={() => handleAddCart(product)}>Add to Cart</button>
                </div>
                ))}
        </div>

        <h1>Shopping Cart</h1>
        <br />
        <br />
        <ol>
            {cart.map((item)=>(
                <li key={item.id}>
                {item.name}, {item.price}
                <button onClick={() => handleUpdateQty(item.id, item.quantity-1)}>-</button>
                {item.quantity}
                <button onClick={() => handleUpdateQty(item.id, item.quantity+1)}>+</button>
                <button onClick={() => handleDeleteCart(item.id)}>Delete</button>
                </li>
            ))}
        </ol>

        <p>Total Quantity : {totalQty}</p>
        <p>Total Order Value : {orderValue.toFixed(2)}</p>

    </div>
  )
}

