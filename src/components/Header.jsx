import logo from '/logo.png'
import cooking from '/cooking.png'
import { IoMdSearch } from "react-icons/io";

export default function Header() {
  return (
    <div>
      <div className="navbar bg-white p-0 border-b py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden px-2 mr-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a> Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <div className="inline-flex justify-center items-center">
            <img className="w-10 items-center" src={logo} alt="img" />
            <a className="text-3xl text-teal-600 font-extrabold">Recipe</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg text-teal-600 font-bold">
            <li>
              <a> Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="relative inline-flex justify-center items-center outline-none ml-6">
            <IoMdSearch className="absolute right-4 text-2xl text-teal-500 z-10 cursor-pointer lg:block md:block hidden" />
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto rounded-full lg:block md:block hidden"
            />
          </div>
          <a className="md:w-9 w-8 ml-6 md:border md:border-teal-500 md:mr-0 mr-3 rounded-full md:p-1 cursor-pointer shadow-md">
            <img src={cooking} alt="Logo" />
          </a>
        </div>
      </div>
    </div>
  );
}
