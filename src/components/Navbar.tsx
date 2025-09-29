import { useState } from "react";
import { Search, ShoppingCart } from "lucide-react"; // npm install lucide-react
import { Link } from "react-router-dom";


export default function Header() {
  const [open, setOpen] = useState(false);

  const mainMenu = [
    "Certifications",
    "Learning",
    "Resources",
    "Membership",
    "Get Involved",
    "Events",
    "IFFAI for Organizations",
    "About IFFAI",
  ];

  return (
    <header className="w-full shadow-sm">
      {/* Top Utility Bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b bg-white text-sm">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/src/assets/IFFAI Logo.png" // replace with PMI-style logo
            alt="IFFAI Logo"
            className="h-25"
            
          />
          <span className="font-semibold text-xl text-gray-700 hidden sm:block">
            International Federation For Artificial Intelligence
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Language Selector */}
          <select className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
            <option>Arabic</option>
            <option>Hindi</option>
          </select>

          <a href="#" className="text-gray-600 hover:text-indigo-600">
            Store
          </a>
          <ShoppingCart className="w-5 h-5 text-gray-600" />

           <Link
          to="/register"
          className="px-3 py-1 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition"
        >
          Register
        </Link>
          

          {/* Search */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="pl-3 pr-10 py-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <Search className="w-4 h-4 absolute right-3 top-2 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
            {mainMenu.map((item) => (
              <li
                key={item}
                className="hover:text-indigo-600 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden bg-white border-t shadow-md">
            <ul className="flex flex-col space-y-4 py-4 px-6 font-medium text-gray-700">
              {mainMenu.map((item) => (
                <li key={item} className="hover:text-indigo-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
