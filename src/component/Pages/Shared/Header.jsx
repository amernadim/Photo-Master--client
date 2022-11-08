import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../Assets/logo.png'

const Header = () => {
  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/home">Home</Link>
      </li>

      <li className="font-semibold">
        <Link to="/services">Services</Link>
      </li>

      <li className="font-semibold">
        <Link to="/">My Reviews</Link>
      </li>

      <li className="font-semibold">
        <Link to="/addService">Add Services</Link>
      </li>

      <li className="font-semibold">
        <Link to="/">Blog</Link>
      </li>

      <li className="font-semibold mr-2">
        <Link className="btn btn-warning text-white rounded-md" to="/register">
          Sign up
        </Link>
      </li>

      <li className="font-semibold mr-2">
        <Link className="btn btn-warning text-white rounded-md" to="/login">
          Sign in
        </Link>
      </li>
    </>
  );

  return (
    <nav className="navbar h-20 bg-base-100 inline-block items-center mx-auto py-4 fixed top-0 w-full z-10">
      <div className="navbar-start flex justify-between w-full">      
      <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-6"
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
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 flex gap-2 bg-base-100 px-3 py-1"
          >
            {menuItems}
          </ul>
        </div>

        <div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="h-10" src={Logo} alt="" />
          <p className="text-orange-600 font-bold">Photo Master</p>
        </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">{menuItems}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
