import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { AiFillLinkedin } from "react-icons/ai";
import { linkedIn } from "../constants";

const Navbar = ({ inViewAbout, inViewContact, inViewWork }) => {
  const [toggle, setToggle] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-14 h-14 object-contain" />
          <p className="text-white text-[18px] font-bold flex cursor-pointer">
            Jacky Chiu &nbsp;
            <span className="lg:block hidden"> | &nbsp;Portfolio &nbsp;</span>
          </p>
        </Link>
        <div className="justify-end flex flex-row gap-10">
          <ul className="list-none hidden md:flex flex-row gap-10">
            {navLinks.map((link) => {
              const curView = "inView" + link.title;
              return (
                <li
                  key={link.id}
                  className={`${
                    eval(curView) ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              );
            })}
          </ul>
          <a
            href={linkedIn}
            target="_blank"
            className="flex flex-row gap-1 cursor-pointer"
          >
            <span className=" hidden md:contents text-[18px] font-medium text-blue-500 rounded-md">
              LinkedIn
            </span>
            <AiFillLinkedin className="text-2xl bg-blue-700 text-blue-100" />
          </a>
        </div>

        <div
          className="md:hidden flex flex-1 justify-end items-center"
          ref={menuRef}
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => {
                const curView = "inView" + link.title;
                return (
                  <li
                    key={link.id}
                    className={`${
                      eval(curView) ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
