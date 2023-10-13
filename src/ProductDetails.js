import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from './ProductContext'; // Import the ProductContext to access product data.
import './App.css'; // Import the CSS for styling.

function ProductDetails() {
  const { products, selectedProduct } = useContext(ProductContext); // Access product data and the selected product from the ProductContext.
  const { id } = useParams(); // Get the 'id' parameter from the URL.
  const [productDetails, setProductDetails] = useState(null); // Define a state variable for storing product details.

  useEffect(() => {
    // Use the useEffect hook to fetch product details when the component mounts or 'id' or 'selectedProduct' changes.
    if (selectedProduct && selectedProduct.id === id) {
      // If the selected product matches the requested 'id', use the selected product's details.
      setProductDetails(selectedProduct);
    } else {
      // If not, fetch product details from the API.
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProductDetails(data); // Set the product details in the state.
        })
        .catch((error) => console.error(error));
    }
  }, [id, products, selectedProduct]);

  return (
    <div className="product-details">
      <h1>Product Details</h1>
      {productDetails ? (
        // If product details are available, display them.
        <div>
          <img src={productDetails.image} alt={productDetails.title} />
          <h3>{productDetails.title}</h3>
          <p>{productDetails.description}</p>
          <p>${productDetails.price}</p>
        </div>
      ) : (
        // If product details are not available, show a loading message.
        <p className="loading">Loading product details...</p>
      )}
    </div>
  );
}

export default ProductDetails; // Export the ProductDetails component to use it in other parts of the application.
