import React, { useContext, useEffect, useState } from 'react';
import '../App.css';
import '../index.css';
import { cartContext } from '../context/CartContext';
import axios from 'axios';


const Carousel = () => {
    const { state, dispatch } = useContext(cartContext);
    const [products, setProducts] = useState([]);
    const apiUrl = 'https://fakestoreapi.com/products';
    const [activeIndex, setActiveIndex] = useState(0);

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

    const handlePrevClick = () => {
        const newIndex = (activeIndex - 1 + products.length) % products.length;
        setActiveIndex(newIndex);
    };

    const handleNextClick = () => {
        const newIndex = (activeIndex + 1) % products.length;
        setActiveIndex(newIndex);
    };

    return (
        <div>
            <h2>Featured Products</h2>
            <div className='carousel'>
                {products.map((product, index) => (
                    <div key={product.id} className={`product-card ${index === activeIndex ? 'active' : ''} `}>
                        <h3>{product.title}</h3>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <button className='prev-button' onClick={handlePrevClick}>Previous</button>
            <button className='next-button' onClick={handleNextClick}>Next</button>
        </div>
    );
};

export default Carousel;