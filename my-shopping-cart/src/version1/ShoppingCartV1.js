import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import axios from 'axios';
import LoginForm from './LoginForm';
import SignUpModal from './SignUpModal';
import ProductList from './ProductList';
import CartModal from './CartModal';
import useFetch from '../hooks/useFetch';

export default function ShoppingCartV1() {
    
    // State declarations
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [userId, setUserId] = useState('');
    const [loginFlag, setLoginFlag] = useState(false);
    const [name, setName] = useState('');
    const [cart, setCart] = useState([]);
    const [totalQty, setTotalQty] = useState(0);
    const [orderValue, setOrderValue] = useState(0);
    const [showModal, setShowModal] = useState(false); 
    const [filteredData, setFilteredData] = useState([]);

    const usersUrl = "http://localhost:3001/users";
    const productsUrl = "http://localhost:3001/products";

    const [data] = useFetch(usersUrl);
    const [products] = useFetch(productsUrl);

    useEffect(() => {
      setFilteredData(products || []);
    }, [products]);

    const handleLogin = () => {        
      let found = data.find((user) => {
          return ((user.email === userEmail) && (user.password === userPass));
      })
      if(found){
          setLoginFlag(true);
          setUserId(found.id);
      }
    };

    const handleLogout = () => { 
      setLoginFlag(false); 
      setUserEmail('');
      setUserPass('');
    };

    const hanldeUserSignUp = async () => {
      try {
          const newUser = {
              name: name, 
              email: userEmail,
              password: userPass
          };
          await axios.post(usersUrl, newUser);
          console.log('User signup successfully.');
          setUserEmail('');
          setUserPass('');
          toggleModal();

      } catch (error) {
          console.error("Error adding users:", error);
      }
    };

    const handleInputChange = (e) => { //handleFilter
      setFilteredData(e.target.value.trim() === '' ? products : products.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())));
    };

    useEffect(()=>{handleCartUpdate();}, [cart, name]);

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
    };

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
    };

    const toggleModal = () => setShowModal(!showModal);

    const handlePlaceOrder = async () =>{
      try {
          const orderData = {
              userId: userId, 
              items: cart.map(item => ({
                  itemId: item.id,
                  itemQuantity: item.quantity
              })),
              totalQuantity: totalQty,
              totalPrice: parseFloat(orderValue.toFixed(2))
          };
          const ordersUrl = "http://localhost:3001/orders";
          const response = await axios.post(ordersUrl, orderData);
  
          console.log('Order placed successfully:', response.data);

          setCart([]);
  
      } catch (error) {
          console.error('Error placing order:', error);
      }
    };


    return (
      <div>
        {!loginFlag ? (
            <div className='container'>
              <LoginForm
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                userPass={userPass}
                setUserPass={setUserPass}
                handleLogin={handleLogin}
              /> 
              <SignUpModal
                showModal={showModal}
                toggleModal={toggleModal}
                name={name}
                setName={setName}
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                userPass={userPass}
                setUserPass={setUserPass}
                hanldeUserSignUp={hanldeUserSignUp}
              />
            </div>
          ) : (
            <div className='container'>
              <button 
                className="btn btn-secondary position-fixed" 
                style={{ top: '20px', right: '20px', zIndex: '1000' }} 
                onClick={handleLogout}>
                Logout
              </button>
              <ProductList
                handleInputChange={handleInputChange}
                filteredData={filteredData}
                handleAddCart={handleAddCart}
              />
              <CartModal
                showModal={showModal}
                toggleModal={toggleModal}
                cart={cart}
                handleUpdateQty={handleUpdateQty}
                handleDeleteCart={handleDeleteCart}
                totalQty={totalQty}
                orderValue={orderValue}
                handlePlaceOrder={handlePlaceOrder}
              />
            </div>
          )
        }
  
      </div>
    )
}
