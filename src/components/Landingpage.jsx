import React, { useState } from "react";
import harmburgermenu from "/public/images/icon-menu.svg";
import Carticon from "/public/images/icon-cart.svg";
import cusavatar from "/public/images/image-avatar.png";
import cloesemenu from "/public/images/icon-close.svg";
import cartitems from "./Cart";

const Landingpage = () => {
  const [open, setOpen] = useState(false);
  const [cartcontent, SetCartcontent] = useState(0);
  const [cart, SetCart] = useState([
    {
      image: "/images/image-product-1.jpg",
      description: "Fall Limited Edition Sneakers",
      price: 125.0,
    },
  ]);

  const handlecartcontent = (products) => {
    if (count > 0) {
      SetCartcontent(cartcontent + count);
      SetCart([...cart, { ...products, quantity: count }]);
      setCount(0);
    }
  };

  const [showcart, setShowcart] = useState(false);

  const links = [
    { name: "Collections", link: "#" },
    { name: "Men", link: "#" },
    { name: "Women ", link: "#" },
    { name: "About", link: "#" },
    { name: "Contact", link: "#" },
  ];

  const [deletecart, setDeletecart] = useState([]);

  const handledeletecart = () => {
    SetCart([]);
  };

  const slides = [
    { image: "../images/image-product-1.jpg" },
    { image: "../images/image-product-2.jpg" },
    { image: "../images/image-product-3.jpg" },
    { image: "../images/image-product-4.jpg" },
  ];
  const [currentslide, setCurrentslide] = useState(0);
  const [count, setCount] = useState(0);
  const handlecountless = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handlecountadd = () => {
    setCount(count + 1);
  };
  const handleprev = () => {
    setCurrentslide(currentslide === 0 ? slides.length - 1 : currentslide - 1);
  };

  const handlenext = () => {
    setCurrentslide(currentslide === slides.length - 1 ? 0 : currentslide + 1);
  };

  const toggleMenu = () => {
    setOpen(!open);
  };
  const toggleMenuclose = () => {
    setOpen(false);
  };
  return (
    <div>
      {/* {mobile} */}
      <div className=" lg:hidden">
        <div className="flex border-2  gap-10 justify-center pt-3 pb-3 ">
          <nav>
            <img
              src={harmburgermenu}
              onClick={toggleMenu}
              alt="menu  icon"
              className=" w-7 h-4 pt-1 "
            />
            {open && (
              <div className="menu">
                <ul className="text-black bg-white absolute top-0 left-0 w-44 h-screen border-white shadow-lg flex flex-col justify-start pt-6 border">
                  <img
                    src={cloesemenu}
                    alt="close icon"
                    className=" w-7 h-4  pl-2 "
                    onClick={toggleMenuclose}
                  />
                  {links.map((link, index) => (
                    <li key={index} className="p-2">
                      <a
                        href={link.link}
                        onClick={toggleMenu}
                        className="text-black pl-4"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </nav>
          <p className=" text-2xl font-extrabold -mt-2"> Sneakers</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowcart(!showcart)}
              aria-label="View cart"
              className="relative"
            >
              <img
                src="/images/icon-cart.svg"
                alt="Cart icon"
                className="w-5 h-5"
              />
              {cartcontent > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full px-2">
                  {cartcontent}
                </span>
              )}
            </button>
          </div>
          <img src={cusavatar} alt="avatar " className=" w-5 h-5" />
        </div>

        <div className="flex overflow-hidden group  ">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slides[currentslide].image}
              alt="product image"
            />
          ))}
        </div>
        <div className=" flex justify-between -mt-52 ml-2 mr-2 group  ">
          <img
            onClick={handleprev}
            src="/public/images/icon-previous.svg"
            alt="prev icon"
            className=" w-9 h-9 rounded-full bg-white border-white  border-2 p-2 "
          />
          <img
            onClick={handlenext}
            src="/public/images/icon-next.svg"
            alt="next icon"
            className="  w-9 h-9 rounded-full bg-white border-white  border-2 p-2 "
          />
        </div>

        <div className=" mt-52 ml-8 mr-8">
          <p className="  text-sm font-bold">SNEAKER COMPANY</p>
          <h1 className=" font-extrabold text-2xl mt-3">
            Fall Limited Edition Sneakers{" "}
          </h1>
          <p className=" mt-2 text-slate-500">
            These low profile sneakers are perfect casual wear companion.
            Featuring a durable rubber outer sole,they'll whitsand everything
            the weather can offer{" "}
          </p>
        </div>
        <div className=" flex  justify-between mb-4 ml-8 mr-8 mt-7">
          <p className=" text-3xl font-extrabold">$125.oo</p>
          <p className=" border-2 pr-1 pl-1  font-bold mb-1    rounded-md bg-black border-black text-white ">
            {" "}
            50%
          </p>
          <p className=" text-slate-400"> $250</p>
        </div>
        <div className=" pb-2 pt-2 font-bold border-2 bg-slate-200 ml-8 mr-8 mt-10 mb-5 flex rounded-md justify-between pr-8 pl-8 ">
          <img
            onClick={handlecountless}
            src="/public/images/icon-minus.svg"
            className=" w-5 h-4  pt-2 "
            alt=""
          />
          {count}
          <img
            onClick={handlecountadd}
            src="/public/images/icon-plus.svg"
            className=" w-4 h-5 pt-1"
            alt=""
          />
        </div>
        <div className=" border-2 flex bg-orange-600 justify-center gap-4 pt-3 pb-3 ml-8 mr-8  mb-3 border-orange-600 rounded-md">
          <img
            className=" text-black"
            src="/public/images/icon-cart.svg"
            alt=""
          />
          <button
            className=" font-bold   "
            disabled={count === 0}
            onClick={handlecartcontent}
          >
            Add to cart{" "}
          </button>
        </div>

        {/* {cartmodal} */}
        {showcart && (
          <div className="fixed top-16 right-4 bg-white p-4 rounded-md shadow-lg z-50 w-64">
            <h2 className="font-bold text-lg">Cart</h2>
            {cart.length === 0 ? (
              <p className="text-slate-500">Your cart is empty</p>
            ) : (
              <ul className="mt-2">
                {cart.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 mb-2">
                    <img
                      src={item.image}
                      alt={item.description}
                      className="w-12 h-12 rounded-md"
                    />

                    <div>
                      <p className="text-sm">{item.description}</p>
                      <p className="text-sm">
                        ${item.price} x {count} = ${}
                      </p>
                    </div>
                    <button onClick={handledeletecart}>
                      <img
                        src="/images/icon-delete.svg"
                        className=" w-5 h-5"
                        alt=""
                      />
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <button
              onClick={() => setShowcart(false)}
              className="mt-4 bg-orange-600 text-white p-2 rounded-md w-full"
            >
              Close
            </button>
          </div>
        )}
      </div>

      {/* {desktop} */}

      <div className=" hidden lg:block">
        <nav className=" flex justify-between ml-20 mt-6 mr-20">
          <div className=" flex gap-2  items-center">
            <p className=" font-bold text-3xl mr-2">Sneakers</p>
            <p className=" list-none flex gap-3 font-thin text-slate-500 mt-1">
              {links.map((link, index) => (
                <li key={index}> {link.name}</li>
              ))}
            </p>
          </div>
          <div className=" flex gap-8">
            <button onClick={() => setShowcart(!showcart)}>
              <img src={Carticon} alt="" className=" w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full px-2">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>
            <img className=" w-6 h-6" src={cusavatar} alt="" />
          </div>
        </nav>
        <hr className=" ml-20  mt-8 mr-20"></hr>
        <div className=" grid grid-cols-2 ml-28 mr-28 mt-20">
          <div>
            <img
              className=" w-96 h-64 rounded-md "
              src={slides[0].image}
              alt=""
            />
          </div>
          <div className=" grid">
            <p className=" text-sm text-slate-500">SNEAKER COMPANY</p>
            <p className=" font-bold text-3xl">
              Fall Limited Edition <br></br>Sneaker
            </p>
            <p className=" mt-2 text-slate-500 text-sm font-thin">
              These low profile sneakers are perfect casual wear<br></br>{" "}
              companion. Featuring a durable rubber outer sole,they'll<br></br>{" "}
              whitsand everything the weather can offer{" "}
            </p>

            <div className=" flex gap-2    mt-7">
              <p className=" text-2xl font-bold">$125.00</p>
              <p className=" mt-1">
                <span className="  border-2 bg-black text-white pr-1  pl-1 rounded-md border-black ">
                  {" "}
                  50%
                </span>
              </p>
            </div>
            <span className=" text-slate-500 text-sm"> $250</span>

            <div className=" flex gap-7">
              <div className=" pb-2 pt-2 font-bold border-2 bg-slate-200  mt-11 mb-5 flex rounded-md  pr-11 pl-11  ">
                <img
                  onClick={handlecountless}
                  src="/public/images/icon-minus.svg"
                  className=" mr-5 w-5 h-4  pt-2 "
                  alt=""
                />
                {count}
                <img
                  onClick={handlecountadd}
                  src="/public/images/icon-plus.svg"
                  className=" ml-5 w-4 h-5 pt-1"
                  alt=""
                />
              </div>

              <div className=" items-center mt-11 mb-6 border-2 flex bg-orange-600  gap-4  border-orange-600 rounded-md pr-11 pl-11">
                <img
                  className=" text-black w-3 h-3"
                  src="/public/images/icon-cart.svg"
                  alt=""
                />
                <button
                  onClick={handlecartcontent}
                  disabled={count === 0}
                  className=" font-bold text-sm "
                >
                  Add to cart{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {cartmodal} */}
      {showcart && (
        <div className="fixed top-16 right-4 bg-white p-4 rounded-md shadow-lg z-50 w-64">
          <h2 className="font-bold text-lg">Cart</h2>
          {cart.length === 0 ? (
            <p className="text-slate-500">Your cart is empty</p>
          ) : (
            <ul className="mt-2">
              {cart.map((item, index) => (
                <li key={index} className="flex items-center gap-2 mb-2">
                  <img
                    src={item.image}
                    alt={item.description}
                    className="w-12 h-12 rounded-md"
                  />

                  <div>
                    <p className="text-sm">{item.description}</p>
                    <p className="text-sm">
                      ${item.price} x {count} = ${}
                    </p>
                  </div>
                  <button onClick={handledeletecart}>
                    <img
                      src="/images/icon-delete.svg"
                      className=" w-5 h-5"
                      alt=""
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
          <button
            onClick={() => setShowcart(false)}
            className="mt-4 bg-orange-600 text-white p-2 rounded-md w-full"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Landingpage;
