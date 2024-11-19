// src/Navbar.js
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import UserContext from "../context/UserContext";
import { CiMenuKebab } from "react-icons/ci";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  let ctx1 = useContext(UserContext);
  let ctx = useContext(CartContext);
  let login = ctx1;
  console.log(ctx);


  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    ctx.setsearchValue(e.target.Value);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">Ecommerce_App</div>
        <div className="md:flex space-x-4 hidden">
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-400">
            About
          </Link>
          <Link to="/cart" className="text-white hover:text-gray-400">
            Cart <sup>{ctx.cartArr.length}</sup>
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-white hover:text-gray-400"
            >
              ☰
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-green-400 text-white rounded shadow-lg">
                <Link
                  to="/register"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Registerd
                </Link>
                <Link to="/login" className="block px-4 py-2 hover:bg-gray-700">
                  Login
                </Link>

                <Link onClick={ctx.logout} to="/" className="block px-4 py-2 hover:bg-gray-700">
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile view */}
        <div className="md:hidden">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-white"
          >
            ☰
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded shadow-lg">
              <Link to="/" className="block px-4 py-2 hover:bg-gray-700">
                Home
              </Link>
              <Link to="/about" className="block px-4 py-2 hover:bg-gray-700">
                About
              </Link>
              <Link to="/contact" className="block px-4 py-2 hover:bg-gray-700">
                Contact
              </Link>
              <Link
                to="/services"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Services
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
