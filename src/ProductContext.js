import React, { createContext, useState, useContext } from 'react';

// Create a context for managing product-related state
const ProductContext = createContext();

// Create a provider component to wrap the entire application
const ProductProvider = ({ children }) => {
    // Define state variables for managing product-related data
    const [products, setProducts] = useState([]); // An array to store the product data.
    const [selectedProduct, setSelectedProduct] = useState(null); // A variable to store the selected product.
    const [loading, setLoading] = useState(true); // A boolean to indicate whether data is loading.

    // Return the ProductContext.Provider with the defined state and functions
    return (
        <ProductContext.Provider value={{ products, selectedProduct, loading, setProducts, setSelectedProduct, setLoading }}>
            {children} {/* Render the child components wrapped by this provider */}
        </ProductContext.Provider>
    );
};

// Export the ProductContext and ProductProvider for use in other parts of the application
export { ProductContext, ProductProvider };
