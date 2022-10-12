import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="/">kukuPay Market Place</a>
        </div>
        <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
        </div>
    </header>
    <main>
        <Routes path="/" element={<HomeScreen />} ></Routes>
        <Routes path="/product/:id" element={<ProductScreen />} ></Routes>
       
    </main>
    <footer className="row center">All rights reserved</footer>
</div>
</BrowserRouter>
  );
}

export default App;
