import React from 'react';
import data from '../data';
import Product from '../components/Product'

function HomeScreen() {
  return (
    <div className="row center">
    {
        data.products.map((product) => (

   <Product Product key={product._id} product={product}></Product>
        ))
    }
</div>
  )
}

export default HomeScreen;
