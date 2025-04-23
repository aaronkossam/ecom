import React, { useState } from "react";

const Cart = () => {
  const [count, setCount] = useState(0);

  const handleCountLess = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleCountAdd = () => {
    setCount(count);
  };

  const cartItems = [
    {
      image: "/images/image-product-1.jpg",
      description: "Fall Limited Edition Sneakers",
      price: 125.0, // Store as a number for calculations
    },
  ];

  console.log(cartItems);

  return (
    <div className="border-2 ml-4 mr-4 mb-6 pb-10 rounded-md shadow-xl border-white">
      <h1 className="font-bold pt-3 pl-3 pb-6">Cart</h1>
      <hr />
      {cartItems.length > 0 && count > 0 ? (
        <div className="p-4">
          <img
            src={cartItems[0].image}
            alt={cartItems[0].description}
            className="w-16 h-16 object-cover"
          />
          <div className="text-black mt-2">
            <p>{cartItems[0].description}</p>
            <p>
              ${cartItems[0].price.toFixed(2)} x {count} = $
              {(cartItems[0].price * count).toFixed(2)}
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleCountLess}
              className="px-4 py-2 bg-gray-200 rounded"
              disabled={count === 0}
            >
              -
            </button>
            <span>{count}</span>
            <button
              onClick={handleCountAdd}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              +
            </button>
          </div>
        </div>
      ) : (
        <p className="p-4 text-gray-500">Your cart is empty.</p>
      )}
      <button
        className="ml-8 mr-8 border-orange-600 rounded-md font-bold border-2 mt-4 bg-orange-600 text-white flex justify-center px-8 py-3"
        disabled={count === 0}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
