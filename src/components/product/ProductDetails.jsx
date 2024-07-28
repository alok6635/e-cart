import { useParams } from "react-router";
import { items } from "../Data";
import { useEffect, useState } from "react";
import './productDetails.scss'
import Product from "./Product";


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);


  useEffect(() => {
    const filterProduct = items.filter((item) => item.id == id)[0];
    setProduct(filterProduct);

    if (filterProduct) {
      const relatedProducts = items.filter((item) => item.category === filterProduct.category && item.id !== filterProduct.id);
      setRelated(relatedProducts);
    }
  }, [id]);
  
  return (
    <>
      <div className="container">
        <div className="product_img">
          <img src={product.imgSrc} alt="" />
          <div>
            <h5>{product.title}</h5>
            <p>{product.description}</p>
            <button className="btn btn-primary mx-2">{product.price}₹</button>
            <button className="btn btn-warning">{product.addCart}</button>
          </div>
        </div>
      </div>
      <h3 className="text-center">RELATED PRODUCTS</h3>
      <Product items={related} />
    </>
  );
};
export default ProductDetails;
