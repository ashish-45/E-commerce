import './App.css';
import Navbar from "./components/Navbar";
import ProductContext from './components/ProductContext';
import CartContext from './components/CartContext';
import Products from './components/Products';
import Cart from './components/Cart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ProductContext>
          <CartContext>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Products} />
              <Route exact path="/cart" component={Cart} />
              <Route component={NotFound} />
            </Switch>
          </CartContext>
        </ProductContext>
      </div>
    </BrowserRouter>

  );
}

export default App;
