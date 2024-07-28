import { useParams } from "react-router";
import { items } from "../Data";
import { useEffect, useState } from "react";
import './productDetails.scss'
import Product from "./Product";


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
<<<<<<< HEAD
  const [related, setRelated] = useState([]);
=======
  const [related,setRelated]=useState([]);
>>>>>>> f0700f975e022bfe183002a676dc98bd2ee0e4ea


  useEffect(() => {
    const filterProduct = items.filter((item) => item.id == id)[0];
    setProduct(filterProduct);

    if (filterProduct) {
      const relatedProducts = items.filter((item) => item.category === filterProduct.category && item.id !== filterProduct.id);
      setRelated(relatedProducts);
    }
  }, [id]);
<<<<<<< HEAD
  
=======
>>>>>>> f0700f975e022bfe183002a676dc98bd2ee0e4ea
  return (
    <>
      <div className="container">
        <div className="product_img">
<<<<<<< HEAD
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
=======
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
     <Product items={related}/>

>>>>>>> f0700f975e022bfe183002a676dc98bd2ee0e4ea
    </>
  );
};
export default ProductDetails;
