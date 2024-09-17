import React from "react";
import { IoBagOutline } from "react-icons/io5";

function Header() {
  return (
    <header className="flex items-center justify-around">
      <h1 className="text-5xl font-bold playfair-display primary-text">Rivo</h1>
      <nav className="">
        <ul className="flex gap-11 primary-text">
          <li className="text-[18px] cursor-pointer hover:text-primary-hover">Home</li>
          <li className="text-[18px] cursor-pointer hover:text-primary-hover">Shop</li>
          <li className="text-[18px] cursor-pointer hover:text-primary-hover">Features</li>
          <li className="text-[18px] cursor-pointer hover:text-primary-hover">Contact</li>
        </ul>
      </nav>
      <div className="flex items-center gap-10">
      <IoBagOutline className="text-primary text-4xl"/>
      <button className="border-2 border-primary py-2 px-5 text-xl">Login</button>
      </div>
    </header>
  );
}

export default Header;
