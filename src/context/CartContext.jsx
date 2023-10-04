import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartItems, setCartItems] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    
    return (
        <CartContext.Provider
        value={{ cart, setCart, cartItems, setCartItems, cartTotal, setCartTotal }}>
        {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };