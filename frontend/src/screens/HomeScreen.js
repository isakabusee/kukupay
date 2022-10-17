import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

function HomeScreen() {
  return (
    <div>
      <div className="row center">
        <h1>Featured Products</h1>
        {/* {
                data.products.map((product) => (

           <Product Product key={product._id} product={product}></Product>
                ))
            } */}
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name}></img>
              </Link>
              <div className="product-info">
                <Link to={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </Link>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
