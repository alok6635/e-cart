import { Route } from "react-router";
import Header from "./components/header/Header";
import {BrowserRouter as Router, Routes} from "react-router-dom";
import ProductDetails from "./components/product/ProductDetails";
import SearchItem from "./components/searchitem/SearchItem";
import Cart from "./components/searchitem/Cart";
import Product from "./components/product/Product";
import { items } from "./components/Data";
import { useState } from "react";


const App = () => {
  const [data,setData]=useState([...items])
<<<<<<< HEAD
=======

>>>>>>> f0700f975e022bfe183002a676dc98bd2ee0e4ea
  
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Product items={data}/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/search/:term" element={<SearchItem/>}/>
        </Routes>
      </Router>
    </>
  )
}
export default App;