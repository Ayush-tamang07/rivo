import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

function Footer() {
  return (
    <footer className="bg-[#224F34] w-full flex p-8 items-center justify-center justify-around">
      <div className="">
        <h1 className="text-white">Rivo</h1>
        <h2 className="text-white">Social Media</h2>
        <div className="flex">
          <FaInstagram />
          <CiFacebook />
          <CiTwitter />
        </div>
      </div>
      <div className="flex text-[#C2EFD4] gap-11">
        <ul>
            <li className="text-white">SHOP</li>
            <li>Products</li>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Releases</li>
        </ul>
        <ul>
            <li className="text-white">COMPANY</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>News</li>
            <li>Support</li>
        </ul>
      </div>
      <form action="">
        <h1 className="text-white">STAY UP TO DATE</h1>
        <div className="flex">
        <input type="text" name="" id="" placeholder="Enter Your Email" className="border-2 border-[#A3F3BE] bg-transparent"/>
        <button className="bg-[#A3F3BE] p-3">Submit</button>
        </div>
      </form>
    </footer>
  );
}

export default Footer;
