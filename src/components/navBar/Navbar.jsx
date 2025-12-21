import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaBars, FaXmark } from "react-icons/fa6";
import '../../App.css';

const Navbar = () => {
  const [barToggol, setBarToggol] = useState(true);
  return (
    <nav className="bg-base-100 shadow-sm max-w-full mx-auto font-WorkSans md:px-7">
      <div className="navbar max-w-7xl mx-auto">
        {/* navbar start */}
        <div className="navbar-start space-x-4 lg:space-x-0">
          <div
            onClick={() => setBarToggol(!barToggol)}
            className="bg-gray-300 rounded-md px-5 py-4 text-2xl cursor-pointer block lg:hidden relative overflow-hidden"
          >
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${
                barToggol
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 rotate-90 scale-0"
              }`}
            >
              <FaBars />
            </div>

            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${
                barToggol
                  ? "opacity-0 rotate-90 scale-0"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            >
              <FaXmark />
            </div>
          </div>
          {/* Small device menu list*/}
          <ul className={`bg-[#00000020] p-3 rounded-md shadow-lg absolute transition-all duration-300 ease-in-out -left-64 top-18 lg:hidden ${barToggol ? "" : "left-1 block"}`}>
            <li  className="w-52 bg-slate-100 hover:bg-teal-600 font-semibold rounded mb-2 shadow-md px-2 p-1 text-teal-600 cursor-pointer hover:text-white">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="w-52 bg-slate-100 hover:bg-teal-600 font-semibold rounded mb-2 shadow-md px-2 p-1 text-teal-600 cursor-pointer hover:text-white">
              <Link to={"/listedbooks"}>Listed Books</Link>
            </li>
            <li className="w-52 bg-slate-100 hover:bg-teal-600 font-semibold rounded mb-2 shadow-md px-2 p-1 text-teal-600 cursor-pointer hover:text-white">
              <Link to={"/pagestoread"}>Pages to Read</Link>
            </li>
          </ul>
          <h1 className="text-sm md:text-xl font-semibold">Book Vibe</h1>
        </div>
        {/* navbar menu list*/}
        <div className="navbar-center hidden lg:flex">
          <ul id="navLink" className="menu menu-horizontal px-1 text-base font-normal text-[#13131380]">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/listedbooks"}>Listed Books</NavLink>
            </li>
            <li>
              <NavLink to={"/pagestoread"}>Pages to Read</NavLink>
            </li>
          </ul>
        </div>
        {/* navbar buttons */}
        <div className="navbar-end space-x-2">
          <Link className="btn bg-[#23BE0A] text-white" >Sign In</Link>
          <Link className="btn bg-[#59C6D2] text-white" >Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
