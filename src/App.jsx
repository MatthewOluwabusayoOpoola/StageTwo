import { useState } from "react";
import "./App.css";
import { Navigation } from "./component/basics/Navigation";
import { ProductListing } from "./pages/ProductListing";
import { Cart } from "./pages/Cart";
import { Confirmed } from "./pages/Confirmed";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Confirmed" element={<Confirmed />} />
          <Route path="*" element={<ProductListing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
