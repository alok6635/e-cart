import React from 'react';
import { Link } from "react-router-dom";
import './product.scss';

const Product = ({ items }) => {
  return (
    <>
      <div className='container my-5'>
        <div className='row'>
          {items.map((product) => (
            <div className='col-lg-4 col-md-6 my-3 text-center' key={product.id}>
              <div className="card">
                <Link to={`/product/${product.id}`} className="product_details">
                  <img src={product.imgSrc} className="card-img-top" alt={product.title} />
                </Link>
                <div className="card-body">
                  <h5>{product.title}</h5>
                  <p>{product.description}</p>
                  <button className="btn btn-primary mx-2">{product.price}₹</button>
                  <button className="btn btn-warning">{product.addCart}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
