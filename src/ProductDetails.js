import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from './ProductContext'; // Import the ProductContext
import './App.css'; // Import the CSS

function ProductDetails() {
  const { products, selectedProduct } = useContext(ProductContext);
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    if (selectedProduct && selectedProduct.id === id) {
      setProductDetails(selectedProduct);
    } else {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProductDetails(data);
        })
        .catch((error) => console.error(error));
    }
  }, [id, products, selectedProduct]);

  return (
    <div className="product-details">
      <h1>Product Details</h1>
      {productDetails ? (
        <div>
          <img src={productDetails.image} alt={productDetails.title} />
          <h3>{productDetails.title}</h3>
          <p>{productDetails.description}</p>
          <p>${productDetails.price}</p>
        </div>
      ) : (
        <p className="loading">Loading product details...</p>
      )}
    </div>
  );
}

export default ProductDetails;