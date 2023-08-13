import { useState } from "react";


export default function ProductDescription(props) {
  const [count, setCount] = useState(0);
  function handleCountIncrement(e) {
    setCount(count + 1);
  }
  function handleCountDecrement(e) {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="product-info-container">
      <p id="company">SNEAKER COMPANY</p>
      <h2 id="product-name">Fall Limited Edition Sneakers</h2>
      <p id="product-details">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="price">
        <div className="current-price">
        <h3 id="product-price">
          $125.00 
        </h3>
        <p id="discount">50%</p>
        </div>
        <p id="old-price">250.00</p>
        </div>
        <div className="purchase">
          <div className="counter">
            <button
              className="counter-btn"
              onClick={handleCountDecrement}
              disabled={count === 0}
            >
              -
            </button>
            <button className="counter-btn count">{count}</button>
            <button className="counter-btn" onClick={handleCountIncrement}>
              +
            </button>
          </div>
          <button className="add-cart-btn">Add to cart</button>
        </div>
      
    </div>
  );
}
