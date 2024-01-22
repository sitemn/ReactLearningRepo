import React from 'react'
import { useCart } from './CartContext';

export default function ProductList() {
    const { handleInputChange, filteredData, handleAddCart } = useCart();
  return (
    <div>
        <div className='row'>
            <h1>Products</h1>
            <input type='text' onChange={handleInputChange}></input>
            </div>
        <div className="row">
            {filteredData.map(product => (
                <div className="col-lg-4" key={product.id}>
                    <div className="card" style={{width: '18rem'}}>
                        <img className="card-img-top img-fluid" 
                            src={product.imageUrl} alt="Card image cap"
                            style={{ height: '200px', objectFit: 'contain' }}
                        />
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
    </div>
  )
}
