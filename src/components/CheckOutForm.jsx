'use client'
import React, { useState } from "react";

const CheckOutForm = ({ total, cartList }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true)
    
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col font-semibold gap-2 items-center justify-center">
      <div className="flex flex-col">
        <h3 className="text-center mb-3">Customer information</h3>
        <div className="flex flex-col md:grid md:grid-cols-2">
          <input
            className="border border-black w-72 m-1 rounded-md outline-none p-1"
            type="text"
            placeholder="Enter your First name"
            required
          />
          <input
            className="border border-black w-72 m-1 rounded-md outline-none p-1"
            type="text"
            placeholder="Enter your Last name"
            required
          />
          <input
            type="email"
            className="border border-black m-1 w-72 rounded-md outline-none p-1"
            placeholder="Enter your Email"
            required
          />
          <input
            type="text"
            placeholder="Enter mobile Number"
            className="border border-black w-72 m-1 rounded-md outline-none p-1"
            required
          />
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="text-center mb-3">Shipping details</h3>

        <div className="flex flex-col md:flex-row">
          <input
            className="border border-black m-1 w-72 rounded-md outline-none p-1"
            type="text"
            placeholder="Your address"
            required
          />
          <input
            type="text"
            className="border border-black m-1 w-72 rounded-md outline-none p-1"
            placeholder="landmark"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="text-center mb-3">Payment method</h3>
        <div className="flex flex-col md:flex-row items-center">
          <input
            type="password"
            className="border border-black m-1 w-72 rounded-md outline-none p-1"
            placeholder="Card number"
          />
          <p>or</p>
          <input
            type="text"
            className="border border-black m-1 w-72 rounded-md outline-none p-1"
            placeholder="UPI ID"
          />
        </div>
      </div>
      <h2 className="text-xl font-bold mb-2">Total: {total.toFixed(2)}$</h2>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold mb-3 disabled:bg-gray-300"
        disabled={cartList.length === 0}
        type="submit"
      >
        Place Order
      </button>
      {
        isSubmitted ? 'Your order is placed' : ''
      }
    </form>
  );
};

export default CheckOutForm;
