import React from "react";
import { FaInstagram, CiFacebook, CiTwitter } from "../../icons.js";

function Footer() {
  return (
    <footer className="bg-primary w-full flex flex-col p-8 items-center mt-7">
      <div className="w-full flex justify-around mb-8">
        <div>
          <h1 className="text-white playfair-display text-5xl font-semibold mb-6">
            Rivo
          </h1>
          <h2 className="text-white roboto-slab my-3">Social Media</h2>
          <div className="flex gap-3">
            <FaInstagram className="text-highlight text-3xl" />
            <CiFacebook className="text-highlight text-3xl" />
            <CiTwitter className="text-highlight text-3xl" />
          </div>
        </div>
        <div className="flex text-highlight gap-28">
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
              type="email"
              name=""
              id=""
              placeholder="Enter Your Email"
              className="border-2 border-highlight bg-transparent outline-none p-2 text-white"
            />
            <button className="bg-highlight p-3 text-primary font-semibold">Submit</button>
          </div>
        </form>
      </div>

      {/* Horizontal Line */}
      <div className="w-full border-t border-highlight mt-8"></div>

      {/* Footer Bottom Links */}
      <div className="flex justify-center gap-6 text-highlight mt-4">
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Cookies</a>
      </div>
    </footer>
  );
}

export default Footer;
