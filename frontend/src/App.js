import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
        <Router>
    <div>
    <header>
            <Link to="/">kukuPay Market Place</Link>
    </header>
    <main>
            <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />

            </Routes>
       
    </main>
    <footer className="row center">All rights reserved</footer>
</div>
        </Router>
  );
}

export default App;
