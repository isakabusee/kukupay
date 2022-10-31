import React, { useReducer, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_REQUEST':
      return {...state, loading: true};
    case 'FETCH_CASE':
      return {...state, product: action.payload, loading: false};
    case 'FETCH_FAIL':
      return {...state, loading:false, error: action.payload};
    default:
      return state;
  }
}

function HomeScreen() {
  const [{loading, error, products}, dispatch] = useReducer((reducer), {
    products: [],
    loading: true,
    error: '',
  })
  // const [products, setProducts] = useState([]);
  
  useEffect(()=>{
  const fetchData = async () => {
    dispatch({type: 'FETCH_REQUEST'});
    try {
      const response = await axios.get('/api/products');
      dispatch({type: 'FETCH_SUCCESS', payload: response.data })

    } catch(error) {
      dispatch({type: 'FETCH_FAIL', payload: error.message})
    }
    console.log(products);
  }
  fetchData();
  }, []);
  return (
    <div>
      <div className="row center">
        <h1>Featured Products</h1>
        <div className="products">
          {products.map((product) => (
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