import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

//Bootstrap, container, row, column
export default function Main10() {
  return (
    <div className='container-fluid'>
      <div className='row bg-primary'>
        <div className='col-lg-3'>
          <h1>MyWebsite</h1>
        </div>
        <div className='col-lg-9'>
          <p>Home | About | Service | Contact</p>
        </div>
      </div>

      <div className='row'>
        <div className='col-lg-4 '>
          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="/images/coffee.jpeg" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Add</a>
            </div>
        </div>
        </div>
        <div className='col-lg-4 bg-success'>Product 2</div>
        <div className='col-lg-4 bg-warning'>Product 3</div>
      </div>

      <div className='row'>
        <div className='col-lg-6'>Image</div>
        <div className='col-lg-6'>
          <button className='btn btn-primary'>Click</button>
          <button className='btn btn-warning'>Click</button>
        </div>
      </div>
    </div>
  );
}
