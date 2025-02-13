import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white shadow-2xl py-8 mt-10 transition-all">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Logo & Description */}
          <div>
            <div className="flex justify-center md:justify-start items-center">
              <img className="w-10" src={logo} alt="Logo" />
              <h2 className="text-3xl font-extrabold text-teal-600 dark:text-[#068F56] ml-2">
                Recipe
              </h2>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Discover the best recipes and cooking tips to elevate your meals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-teal-600 dark:text-[#068F56]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-500 dark:hover:text-teal-300 transition-all">Home</a></li>
              <li><a href="#" className="hover:text-teal-500 dark:hover:text-teal-300 transition-all">Recipes</a></li>
              <li><a href="#" className="hover:text-teal-500 dark:hover:text-teal-300 transition-all">About Us</a></li>
              <li><a href="#" className="hover:text-teal-500 dark:hover:text-teal-300 transition-all">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-teal-600 dark:text-[#068F56]">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-xl hover:text-[#068F56] dark:hover:text-[#068F56] transition-all">
                <FaFacebookF />
              </a>
              <a href="#" className="text-xl hover:text-[#068F56] dark:hover:text-[#068F56] transition-all">
                <FaXTwitter />
              </a>
              <a href="#" className="text-xl hover:text-[#068F56] dark:hover:text-[#068F56] transition-all">
                <FaInstagram />
              </a>
              <a href="#" className="text-xl hover:text-[#068F56] dark:hover:text-[#068F56] transition-all">
                <FaYoutube />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 dark:text-gray-400 mt-6 border-t pt-4">
          <p>&copy; {new Date().getFullYear()} Recipe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
