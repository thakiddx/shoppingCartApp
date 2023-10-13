import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from './ProductContext'; // Import the ProductContext to access product data.
import './App.css';

function ProductSlider() {
  // Access the product data and loading status from the ProductContext using useContext.
  const { products, loading, setLoading, setProducts } = useContext(ProductContext);

  // Use the useEffect hook to fetch product data when the component mounts.
  useEffect(() => {
    if (loading) {
      // Fetch product data from the API.
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
          // Set the product data and mark loading as complete.
          setProducts(data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [loading, setLoading, setProducts]);

  return (
    <div className="product-slider">
      <h1>Products for Sale</h1>
      {loading ? (
        // Display a loading message while the data is being fetched.
        <p>Loading products...</p>
      ) : (
        <div className="product-slider__wrapper">
          {products.map((product) => (
            <div className="product-slider__item" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <Link to={`/product/${product.id}`}>
                {/* Create a link to the product details page with a "View Details" button. */}
                <button>View Details</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductSlider; // Export the ProductSlider component to use it in other parts of the application.



