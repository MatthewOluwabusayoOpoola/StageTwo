import { useState } from "react";
import "./App.css";
import { Navigation } from "./component/basics/Navigation";
import { ProductListing } from "./pages/ProductListing";
import { Cart } from "./pages/Cart";
import { Confirmed } from "./pages/Confirmed";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Navigation />
        <ProductListing />

        <Cart />
        <Confirmed />
      </main>
    </>
  );
}

export default App;
