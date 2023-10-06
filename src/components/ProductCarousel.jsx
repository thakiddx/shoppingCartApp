import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import axios from 'axios';

const Carousel = () => {
    const { state, dispatch } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const apiUrl = 'https://fakestoreapi.com/products';

    useEffect(() => {
        // API request to fetch product data
        axios.get(apiUrl)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching product data', error);
            });
    }, []);

    // Function to add a product to cart
    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    }

    return (
        <div>
            <h2>Featured Products</h2>
            <div className='carousel'>
                {products.map((product) => (
                    <div key={product.id} className='product-card'>
                        <h3>{product.title}</h3>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;