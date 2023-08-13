import { useState } from "react";
import "./App.css";
import Navigation from "./Navigation";
import ProductImages from "./ProductImages.jsx"
import ProductDescription from "./ProductDescription"


export default function App() {

  return (
    <>
      <Navigation />
      <div className="product-container">
        <div className="image-container"> <ProductImages /></div>
        <div className="details-container"><ProductDescription /></div>
      </div>
    </>
  );
}
