// ProductContext.js
// Context for managing product-related state
import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    // State variables
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    return (
        <ProductContext.Provider value={{ products, selectedProduct, loading, setProducts, setSelectedProduct, setLoading }}>
            {children}
        </ProductContext.Provider>
    );
};

export { ProductContext, ProductProvider };