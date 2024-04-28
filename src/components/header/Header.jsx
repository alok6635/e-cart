import React from 'react';
import './header.scss';
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return (
    <>
    <header className='header'>
      <div className='top_nav_wrapper'>
        <div className='container'>
          <div className='top_nav'>
            <a href="/">E-commerce</a>
            <form>
              <input type='text' placeholder='search products'/>
            </form>
            <div>
              <FaShoppingCart className='cart_icon'/>
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
