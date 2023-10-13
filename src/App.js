import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './ProductContext';
import ProductSlider from './ProductSlider';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProductSlider />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;