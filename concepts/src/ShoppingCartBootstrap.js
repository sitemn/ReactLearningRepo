import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";


export default function ShoppingCartBootstrap() {
    const [name, setName] = useState('');
    const [cart, setCart] = useState([]);

    let Products = [
        { id: 1, name: 'Laptop', price: 999.99, quantity: 1, description: 'High performance laptop with 16GB RAM', rate: 4.5, review: 120, imageUrl: "/images/coffee.jpeg" },
        { id: 2, name: 'Smartphone', price: 799.99, quantity: 1, description: 'Latest smartphone with advanced features', rate: 4.7, review: 200, imageUrl: "/images/coffee.jpeg" },
        { id: 3, name: 'Headphones', price: 199.99, quantity: 1, description: 'Noise cancelling wireless headphones', rate: 4.3, review: 90, imageUrl: "/images/coffee.jpeg" },
        { id: 4, name: 'Smartwatch', price: 299.99, quantity: 1, description: 'Water-resistant smartwatch with long battery life', rate: 4.6, review: 150, imageUrl: "/images/coffee.jpeg" },
        { id: 5, name: 'Speaker', price: 129.99, quantity: 1, description: 'Portable speaker with crystal-clear sound quality', rate: 4.8, review: 180, imageUrl: "/images/coffee.jpeg" },
        { id: 6, name: 'E-Reader', price: 89.99, quantity: 1, description: 'Lightweight e-reader with paper-like display', rate: 4.4, review: 75, imageUrl: "/images/coffee.jpeg" },
    ];
    const [filteredData, setFilteredData] = useState(Products);

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    const handleFilter = () => {
        setFilteredData(name.trim() === '' ? Products : Products.filter(item => item.name.toLowerCase().includes(name.toLowerCase())));
    };  

    // useEffect(() => {handleFilter()},[name, Products]);

    const [totalQty, setTotalQty] = useState(0);
    const [orderValue, setOrderValue] = useState(0);
    
    // useEffect(() => {
    //     setTotalQty(
    //         cart.reduce((pre, cur)=>{
    //             return pre + cur.quantity;
    //         }, 0)
    //     );

    //     setOrderValue(
    //         cart.reduce((pre, cur) => {
    //             return pre + (cur.quantity * cur.price)
    //         }, 0)
    //     )
    //     }, [cart]);

    useEffect(()=>{handleCartUpdate();}, [cart, name])

    const handleCartUpdate = ()=>{
        setTotalQty(
            cart.reduce((pre, cur)=>{
                return pre + cur.quantity;
            }, 0)
        );

        setOrderValue(
            cart.reduce((pre, cur) => {
                return pre + (cur.quantity * cur.price)
            }, 0)
        );


    }

    const handleAddCart = (product) => {
        const isProductInCart = cart.find(item => item.id === product.id);
        if(!isProductInCart){
            setCart([...cart, product]);
        }else{
            alert("This product already in the cart!");
            return;
        }

        // handleCartUpdate();
    };  
    
    const handleDeleteCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
        // handleCartUpdate();
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
        // handleCartUpdate();
        
    }

    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);

    const hanldePlaceOrder = () =>{
        console.log(cart);
    }

    return (
    <div className='container'>
        <div className='row'>
            <h1>Products</h1>
            <input type='text' onChange={handleInputChange}></input>
            <button className="btn btn-primary " 
                onClick={handleFilter}>
                    Search</button>
            
        </div>

        <button 
                className="btn btn-primary position-fixed" 
                style={{ bottom: '20px', right: '20px', zIndex: '1000' }} 
                onClick={toggleModal}>
                Cart
            </button>
        <br />
        <br />

        <div className="row">
            {filteredData.map(product => (
                <div className="col-lg-4" key={product.id}>
                    <div className="card" style={{width: '18rem'}}>
                        <img className="card-img-top" src={product.imageUrl} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{product.name} - ${product.price}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">Rate: {product.rate}, Reviews: {product.review}</p>
                            <button onClick={() => handleAddCart(product)} className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>



        <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Shopping Cart</h5>
                            <button type="button" className="btn-close" onClick={toggleModal}></button>
                        </div>
                        <div className="modal-body">
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
                            <p>Total Quantity: {totalQty}</p>
                            <p>Total Order Value: {orderValue.toFixed(2)}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={()=> hanldePlaceOrder()}>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}

