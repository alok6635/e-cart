import { Route } from "react-router";
import Product from "./components/product/Product";
import Header from "./components/header/Header";
import {BrowserRouter as Router, Routes} from "react-router-dom";
import ProductDetails from "./components/product/ProductDetails";
import SearchItem from "./components/searchitem/SearchItem";
import Cart from "./components/searchitem/Cart";


const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Product/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="/search/:term" element={<SearchItem/>}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
      </Router>
      <Product/>
    </>
  )
}
export default App;