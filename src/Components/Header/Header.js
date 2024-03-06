import React from "react";
import logoHeader from "./../../assests/Image/logoHeader.svg";

function Header() {
  return (
    <header className="shadow sticky top-0 z-50">
      <nav className="bg-white border-gray-200 px-4  py-2.5">
        <div className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
          <a href="/" className="flex items-center">
            <img className="mr-2" src={logoHeader} alt="" />
            <h1 className="font-bold">GeekFoods</h1>
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="/"
              className="text-white bg-blue-700 font-medium rounded-lg px-4 py-2 text-sm mr-2"
            >
              Get started
            </a>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li className="block py-2 pr-4 pl-3 duration-200  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                <a href="/">Home</a>
              </li>
              <li className="block py-2 pr-4 pl-3 duration-200  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                <a href="/">Quote</a>
              </li>
              <li className="block py-2 pr-4 pl-3 duration-200  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                <a href="/">Resturants</a>
              </li>
              <li
                className="block py-2 pr-4 pl-3 duration-200  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
              lg:border-0 hover:text-orange-700 lg:p-0"
              >
                <a href="/">Food</a>
              </li>
              <li className="block py-2 pr-4 pl-3 duration-200  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
