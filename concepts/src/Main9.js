import React, {useState, useEffect} from 'react';

//reduce function
export default function Main9() {
    let Products = [
        { id: 1, name: 'Laptop', price: 100,  quantity: 1 },
        { id: 2, name: 'Smartphone', price: 50, quantity: 2 },
        { id: 3, name: 'Headphones', price: 30,  quantity: 4 },
        { id: 4, name: 'Smartwatch', price: 20, quantity: 3 },
        { id: 5, name: 'Speaker', price: 10, quantity: 2 },
        { id: 6, name: 'E-Reader', price: 15, quantity: 5 },
    ];
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
        {Products.map(product => (
            <div key={product.id}>
                {product.name}-{product.price}-{product.quantity}
            </div>
        ))}
        <p>Total Quantity : {totalQty}</p>
        <p>Total Order Value : {orderValue}</p>

    </div>
  )
}
