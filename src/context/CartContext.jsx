import { createContext, useReducer } from "react";

export const cartContext = createContext();
const { Provider, Consumer } = cartContext;


const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const initialState = {
    cart: [],
    products: [],
    isAuthenticated: false,
};

const shoppingReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.payload] };
        case REMOVE_FROM_CART:
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
        default:
            return state;
    }
};

const ShoppingProvider = ({ children }) => {
    const [state, dispatch] = useReducer(shoppingReducer, initialState);
    return (
        <Provider value={{ state, dispatch }}>
            {children}
        </Provider>
    );
};

export { ShoppingProvider, Consumer as ShoppingConsumer, ADD_TO_CART, REMOVE_FROM_CART };
