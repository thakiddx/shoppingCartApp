import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/CheckoutPage'
import Product from './pages/ProductsDetailsPage'
import { CartContext } from './context/CartContext.jsx'
import './App.css'



function App() {
  const [cart, setCart] = useState([])
  const [cartItems, setCartItems] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  
  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart, setCart, cartItems, setCartItems, cartTotal, setCartTotal }}>
          <Switch>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/product/:id">
              <Product />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </CartContext.Provider>
      </Router>
    </>
  )
}

export default App

