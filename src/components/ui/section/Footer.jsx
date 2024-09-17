import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

function Footer() {
  return (
    <footer className="bg-[#224F34] w-full flex flex-col p-8 items-center mt-7">
      <div className="w-full flex justify-around mb-8">
        <div>
          <h1 className="text-white playfair-display text-5xl font-semibold mb-6">
            Rivo
          </h1>
          <h2 className="text-white roboto-slab my-3">Social Media</h2>
          <div className="flex gap-3">
            <FaInstagram className="text-[#A3F3BE] text-3xl" />
            <CiFacebook className="text-[#A3F3BE] text-3xl" />
            <CiTwitter className="text-[#A3F3BE] text-3xl" />
          </div>
        </div>
        <div className="flex text-[#C2EFD4] gap-28">
          <ul className="leading-8">
            <li className="text-white roboto-slab">SHOP</li>
            <li>Products</li>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
          <ul className="leading-8">
            <li className="text-white roboto-slab">COMPANY</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>News</li>
            <li>Support</li>
          </ul>
        </div>
        <form action="">
          <h1 className="text-white mb-3 roboto-slab">STAY UP TO DATE</h1>
          <div className="flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Email"
              className="border-2 border-[#A3F3BE] bg-transparent outline-none p-2"
            />
            <button className="bg-[#A3F3BE] p-3 text-[#224F34]">Submit</button>
          </div>
        </form>
      </div>

      {/* Horizontal Line */}
      <div className="w-full border-t border-[#A3F3BE] mt-8"></div>

      {/* Footer Bottom Links */}
      <div className="flex justify-center gap-6 text-[#C2EFD4] mt-4">
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Cookies</a>
      </div>
    </footer>
  );
}

export default Footer;
