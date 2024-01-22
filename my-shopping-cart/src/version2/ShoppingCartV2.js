import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import LoginForm from './LoginForm';
import SignUpModal from './SignUpModal';
import ProductList from './ProductList';
import CartModal from './CartModal';
import { useCart } from './CartContext';


export default function ShoppingCartV2() {
    const { loginFlag, handleLogout} = useCart();
    return (
      <div>
        {!loginFlag ? (
            <div className='container'>
              <LoginForm/> 
              <SignUpModal />
            </div>
          ) : (
            <div className='container'>
              <button 
                className="btn btn-secondary position-fixed" 
                style={{ top: '20px', right: '20px', zIndex: '1000' }} 
                onClick={handleLogout}>
                Logout
              </button>
              <ProductList/>
              <CartModal/>
            </div>
          )
        }
  
      </div>
    )
}
