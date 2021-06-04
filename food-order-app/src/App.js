import { useState } from 'react';
import Cart from './components/Cart/Cart';


import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './components/store/CartProvider';


function App() {

  const [cartIsShown, setCartIsShow] = useState(false);

  const cartShownHandler = () => {
    setCartIsShow(true);
  }

  const cartHideHadler = () => {
    setCartIsShow(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={cartHideHadler} />}

      <Header onShowCart={cartShownHandler}/>

      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
