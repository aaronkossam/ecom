import React, { useState } from "react";

const Cart = () => {
  const [count, setCount] = useState(0);
  const handlecountless = () => {
    setCount(count - 1);
  };
  const handlecountadd = () => {
    setCount(count + 1);
  };

  const cartitems = [
    { image: "/images/image-product-1.jpg" },
    { description: "Fall Limited Edition Sneakers" },
    { price: "$125.00" },
  ];

  console.log(cartitems);
  return (
    <div className=" border-2 ml-4 mr-4 mb-6 pb-10 rounded-md shadow-xl border-white">
      <h1 className=" font-bold pt-3 pl-3 pb-6">Cart</h1>
      <hr className=" "></hr>
      <div>
        <img src={cartitems.image} alt="" />
        <div className=" text-black">
          {cartitems.description}
          {cartitems.price} x {count.length}
        </div>
      </div>{" "}
      <p className="  ml-8 mr-8 border-orange-600 rounded-md font-bold border-2  mt-14 bg-orange-600 flex justify-center pr-8 pt-3 pb-3 pl-8">
        Checkout
      </p>
    </div>
  );
};

export default Cart;
