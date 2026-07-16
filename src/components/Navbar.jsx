import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../assets/image/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/#products" },
    { name: "Recipes", path: "/#recipes" },
    { name: "About", path: "/#about" },
    { name: "Dealer", path: "/#dealer" },
    { name: "FAQ", path: "/#faq" },      // ← Add this
  { name: "Contact", path: "/#contact" },
];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Nivashree Logo"
            className="h-20 w-20 object-contain"
          />

          <div>
            <h1 className="text-xl md:text-2xl font-bold text-green-800">
              Nivashree Masala
            </h1>

            <p className="text-xs text-gray-500">
              Natural Taste of Indian Families
            </p>
          </div>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 font-semibold text-gray-700">
          {menuItems.map((item) => (
            <li key={item.name}>
              <HashLink
                smooth
                to={item.path}
                className="hover:text-orange-500 transition"
              >
                {item.name}
              </HashLink>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-green-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-5">
          <ul className="space-y-5 font-semibold text-gray-700">
            {menuItems.map((item) => (
              <li key={item.name}>
                <HashLink
                  smooth
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="hover:text-orange-500"
                >
                  {item.name}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;