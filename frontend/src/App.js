import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';



function App() {
  return (
        <Router>
    <div className="d-flex flex-column site-container">
    <header>
        <Navbar bg="dark" variant="dark">
                <Container>
                        <LinkContainer to="/">
                        <Navbar.Brand>KukuPay Marketplace</Navbar.Brand>    
                        </LinkContainer>
                </Container>
        </Navbar>

    </header>
    <main>
        <Container>
            <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />

            </Routes>
        </Container>
       
    </main>
    <footer><div className="text-center">All rights reserved</div></footer>
</div>
        </Router>
  );
}

export default App;
