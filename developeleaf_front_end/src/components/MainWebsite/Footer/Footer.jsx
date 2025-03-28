import { Link, NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold mb-4 md:mb-0">
            Develop<span className="text-yellow-400">Leaf</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <NavLink to="/home" className={({ isActive }) => (isActive ? "text-yellow-300 underline underline-offset-4 transition" : "hover:text-yellow-300 transition")}>
              Home
            </NavLink>
            <Link to="/about" className="hover:text-yellow-300 transition">
              About
            </Link>
            <Link
              to="/how-it-works"
              className="hover:text-yellow-300 transition"
            >
              How It Works
            </Link>
            <Link
              to="/get-involved"
              className="hover:text-yellow-300 transition"
            >
              Get Involved
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-300 transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center text-sm text-gray-300 mt-6">
          © {new Date().getFullYear()} DevelopLeaf. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
