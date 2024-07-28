import React from 'react';
import './header.scss';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <header className='header sticky-top'>
      <div className='top_nav_wrapper'>
        <div className='container'>
          <div className='top_nav'>
            <Link to={"/"}> E-cart </Link> 
            <form>
              <input type='text' placeholder='search products'/>
            </form>
            <div>
              <Link to={"/cart"}>
              <FaShoppingCart className='cart_icon'/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='inner_nav'>
        <div className="item">Filter by{"->"}</div>
        <div className="item">No filter</div>
        <div className="item">Mobiles</div>
        <div className="item">Laptops</div>
        <div className="item">Tablets</div>
        <div className="item">{">="}29999</div>
        <div className="item">{">="}49999</div>
        <div className="item">{">="}69999</div>
        <div className="item">{">="}89999</div>
      </div>
    </header>
    </>
  )
}

export default Header;
