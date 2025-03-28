import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Develop<span className="text-yellow-400">Leaf</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/home" className={({ isActive }) => (isActive ? "text-yellow-300 underline underline-offset-4 transition" : "hover:text-yellow-300 transition")}>
            Home
          </NavLink>
          <Link to="/about" className="hover:text-yellow-300 transition">
            About
          </Link>
          <Link to="/how-it-works" className="hover:text-yellow-300 transition">
            How It Works
          </Link>
          <Link to="/get-involved" className="hover:text-yellow-300 transition">
            Get Involved
          </Link>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-green-700 transition">
            Login
          </button>
          <button className="px-4 py-2 bg-yellow-400 text-green-900 rounded-md hover:bg-yellow-300 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <Link to="/" className="block hover:text-yellow-300 transition">
            Home
          </Link>
          <Link to="/about" className="block hover:text-yellow-300 transition">
            About
          </Link>
          <Link
            to="/how-it-works"
            className="block hover:text-yellow-300 transition"
          >
            How It Works
          </Link>
          <Link
            to="/get-involved"
            className="block hover:text-yellow-300 transition"
          >
            Get Involved
          </Link>
          <button className="px-4 py-2 border border-white rounded-md w-full hover:bg-white hover:text-green-700 transition">
            Login
          </button>
          <button className="px-4 py-2 bg-yellow-400 text-green-900 rounded-md w-full hover:bg-yellow-300 transition">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
