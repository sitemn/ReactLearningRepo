import logo from './logo.svg';
import './App.css';
import ShoppingCart from './components/ShoppingCart';
import ShoppingCartV1 from './version1/ShoppingCartV1';
import ShoppingCartV2 from './version2/ShoppingCartV2';
import { CartProvider } from './version2/CartContext';


function App() {
  return (
    <div className="App">
        {/* <ShoppingCart /> */}
        
      <CartProvider>
        <ShoppingCartV2 />
      </CartProvider>
    </div>
  );
}

export default App;
