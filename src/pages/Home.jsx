import React from "react";
import ProductCarousel from "../components/ProductCarousel"; 
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <>
        <Container>
            <ProductCarousel />
        </Container>
        <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
        </>
    );
};

export default Home;