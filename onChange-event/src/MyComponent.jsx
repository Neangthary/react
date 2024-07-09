// onChange = event handler used primarily with form elements
// ex. <input>, <textaren>, <select>, <radio>,
// Triggers a function every time the value of the input changes

import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState();
  const [commet, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }
  function handleCommentChange(event) {
    setComment(event.target.value);
  }
  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }
  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>

      <textarea
        value={commet}
        onChange={handleCommentChange}
        placeholder="Enter delivery instruction"
      ></textarea>
      <p>Commet: {commet}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Gittcard">Gitfcard</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input
          type="radio"
          value={"Pick Up"}
          checked={shipping === "Pick Up"} // so that can chose only one 
          onChange={handleShippingChange}
        /> Pick Up
      </label>
      
      <label>
        <input
          type="radio"
          value={"Delivery"}
          checked={shipping === "Delivery"} 
          onChange={handleShippingChange}
        /> Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default MyComponent;
