import { useState } from "react";
import "./App.css";
import { Navigation } from "./component/basics/Navigation";
import { ProductListing } from "./pages/ProductListing";
import { Cart } from "./pages/Cart";
import { Confirmed } from "./pages/Confirmed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Rudecer/Ruducer";
import { Provider } from "react-redux";

function App() {
  const store = configureStore({
    reducer: rootReducer,
  });
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Confirmed" element={<Confirmed />} />
            <Route path="*" element={<ProductListing />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
