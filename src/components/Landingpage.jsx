import React, { useState } from "react";
import harmburgermenu from "/public/images/icon-menu.svg";
import Carticon from "/public/images/icon-cart.svg";
import cusavatar from "/public/images/image-avatar.png";
import cloesemenu from "/public/images/icon-close.svg";

const Landingpage = () => {
  const [open, setOpen] = useState(false);
  const [cartcontent, setCartcontent] = useState(0);

  const handlecartcontent = () => {
    const cartcontent = setCartcontent(count.length);
  };
  const links = [
    { name: "Collections", link: "#" },
    { name: "Men", link: "#" },
    { name: "Women ", link: "#" },
    { name: "About", link: "#" },
    { name: "Contact", link: "#" },
  ];
  const slides = [
    { image: "../images/image-product-1.jpg" },
    { image: "../images/image-product-2.jpg" },
    { image: "../images/image-product-3.jpg" },
    { image: "../images/image-product-4.jpg" },
  ];
  const [currentslide, setCurrentslide] = useState(0);
  const [count, setCount] = useState(0);
  const handlecountless = () => {
    setCount(count - 1);
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
      <div className="flex border-2  gap-10 justify-center pt-3 pb-3">
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
        <img
          link="./Cart.jsx"
          src={Carticon}
          alt="cart icon"
          className=" w-5 h-5"
        />
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
          Featuring a durable rubber outer sole,they'll whitsand everything the
          weather can offer{" "}
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
        <p className=" font-bold " onClick={handlecartcontent}>
          Add to cart{" "}
        </p>
      </div>
    </div>
  );
};

export default Landingpage;
