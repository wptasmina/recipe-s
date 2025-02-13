import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { BsMoon, BsSun } from "react-icons/bs"; // Dark Mode Icons
import logo from "/logo.png";
import cooking from "/cooking.png";

export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-gray-900", "text-white");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-gray-900", "text-white");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navLink = (
    <>
      <li><a href="#">Home</a></li>
      <li><a href="#">Recipes</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Search</a></li>
    </>
  );

  return (
    <div className="bg-white/50 z-50  border-b py-2 sticky top-0 backdrop-blur dark:bg-gray-900">
      <div className="navbar w-11/12 mx-auto p-0">
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-2 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navLink}
          </ul>
        </div>

        {/* Logo */}
        <div className="inline-flex justify-center items-center">
          <a className="flex justify-center items-center text-3xl text-teal-600 dark:text-teal-400 font-extrabold">
            <img className="w-10 items-center" src={logo} alt="Logo" />
            Recipe
          </a>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg text-teal-600 dark:text-teal-400 font-bold">
          {navLink}
        </ul>
      </div>

      {/* Right Side Icons */}
      <div className="navbar-end">
        {/* Search Bar */}
        <div className="relative inline-flex justify-center items-center outline-none ml-6">
          <IoMdSearch className="absolute right-4 text-2xl text-teal-500 dark:text-teal-400 z-10 cursor-pointer lg:block md:block hidden" />
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto rounded-full lg:block md:block hidden outline-none focus:outline-0 dark:bg-gray-800 dark:text-white" />
        </div>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          className="ml-4 text-2xl text-teal-600 dark:text-white p-2 rounded-full border border-teal-500 dark:border-teal-500 shadow-md"
        >
          {theme === "light" ? <BsMoon /> : <BsSun />}
        </button>

        {/* Cooking Icon */}
        <a className="md:w-9 w-8 ml-6 md:border md:border-teal-500 md:mr-0 mr-3 rounded-full md:p-1 cursor-pointer shadow-md">
          <img src={cooking} alt="Cooking Icon" />
        </a>
      </div>
    </div>
    </div>
  );
}
