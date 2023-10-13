import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from './ProductContext'; // Import the ProductContext
import './App.css';

function ProductSlider() {
  const { products, loading, setLoading, setProducts } = useContext(ProductContext);

  useEffect(() => {
    if (loading) {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
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
        <p>Loading products...</p>
      ) : (
        <div className="product-slider__wrapper">
          {products.map((product) => (
            <div className="product-slider__item" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <Link to={`/product/${product.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductSlider;


