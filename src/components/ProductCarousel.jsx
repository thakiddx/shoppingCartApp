//Populate the carousel with the product data fetched from the API https://fakestoreapi.com/products/
//include navigation buttons to move between the products
//include a button to add the product to the cart
//include a button to remove the product from the cart
//include a button to view the product details

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ProductCarousel = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
        .then((response) => response.json())
        .then((json) => setProducts(json));
    }, []);
    
    return (
        <Carousel>
        {products.map((product) => (
            <Carousel.Item key={product.id}>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button variant="primary">
                    <Link to={`/product/${product.id}`}>
                    <FontAwesomeIcon icon={faEye} />
                    </Link>
                </Button>
                <Button variant="primary">
                    <FontAwesomeIcon icon={faCartPlus} />
                </Button>
                </Card.Body>
            </Card>
            </Carousel.Item>
        ))}
        </Carousel>
    );
};

export default ProductCarousel;