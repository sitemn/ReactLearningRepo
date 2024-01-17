import React, {useState, useEffect} from 'react';
import './Main7.css';

//filter function
export default function Main7() {
    const [name, setName] = useState('');
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
        //setFilteredData(name.trim() === '' ? Products : Products.filter(item => item.name.toLowerCase().includes(name.toLowerCase())));
    };

    const handleFilter = () => {
        setFilteredData(name.trim() === '' ? Products : Products.filter(item => item.name.toLowerCase().includes(name.toLowerCase())));
    };  

    useEffect(() => {handleFilter()},[name, Products]);

    const [totalQty, setTotalQty] = useState(0);
    const [orderValue, setOrderValue] = useState(0);
    
    useEffect(() => {
        setTotalQty(
            Products.reduce((pre, cur)=>{
                return pre + cur.quantity;
            }, 0)
        );

        setOrderValue(
            Products.reduce((pre, cur) => {
                return pre + (cur.quantity * cur.price)
            }, 0)
        )
        }, []);

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
                    <span>Rate: {product.rate}, Reviews: {product.review}</span>
                </div>
                ))}
        </div>
        <p>Total Quantity : {totalQty}</p>
        <p>Total Order Value : {orderValue}</p>
    </div>
  )
}
