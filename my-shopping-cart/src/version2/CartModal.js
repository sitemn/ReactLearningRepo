import React from 'react'
import { useCart } from './CartContext';

export default function CartModal() {
   const { showModal, toggleModal, cart, handleUpdateQty, handleDeleteCart, totalQty, orderValue, handlePlaceOrder } = useCart();
  return (
    <div>
        <button 
            className="btn btn-primary position-fixed" 
            style={{ bottom: '20px', right: '20px', zIndex: '1000' }} 
            onClick={toggleModal}>
            Cart
            </button>
            <br /><br />
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
                        <button type="button" className="btn btn-secondary" onClick={()=> handlePlaceOrder()}>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
