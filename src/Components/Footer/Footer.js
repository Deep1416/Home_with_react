import React from "react";
import FooterLogo from "./../../assests/Image/FooterLogo.svg";
function Footer() {
  return (
    <footer className=" bg-gray-100  ">
      <div className="mx-auto max-w-5xl  px-8 py-16 ">
        <div className="flex justify-center text-teal-600">
          <img className="w-[200px] " src={FooterLogo} alt="" />
        </div>
       <p className="text-center mt-6 mx-auto mx-w-md">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
        Incidunt
            consequuntur amet culpa cum itaque neque.
       </p>
        <div className="mt-12">
          <ul className="flex justify-center flex-wrap gap-6 lg:gap-12 mb-6">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                History
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex justify-center items-center gap-10 text-3xl ">
            <i className="ri-facebook-circle-fill text-gray-700 transition hover:text-gray-700/75 "></i>
            <i className="ri-instagram-line text-gray-700 transition hover:text-gray-700/75"></i>
            <i className="ri-twitter-fill text-gray-700 transition hover:text-gray-700/75"></i>
            <i className="ri-github-fill text-gray-700 transition hover:text-gray-700/75"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
