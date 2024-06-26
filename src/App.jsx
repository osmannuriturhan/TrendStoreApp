import { useState } from "react";
import Cart from "./components/Card/Cart";
import Hero from "./components/Hero/Hero";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";

function App() {
  const [cartIsShow, setcartIsShow] = useState(false);

  const showCartHandler = () => {
    setcartIsShow(true);
  };

  return (
    <div className="App">
      {cartIsShow && <Cart />}
      <Header onShowCart={showCartHandler} />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
