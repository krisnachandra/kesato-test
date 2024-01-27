"use client";

import { IoPersonCircleSharp } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { MenuRoot } from "../utils/endpoint/NavbarResources";
import { AnimatePresence, motion } from "framer-motion";
import _ from "lodash";

const Navbar = () => {
  const [dataNavbar, setDataNavbar] = useState<MenuRoot>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("https://api.npoint.io/4ec96655c7a482b27186")
      .then((res) => setDataNavbar(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="absolute flex top-0 w-full p-10 ">
        <div className="flex flex-row items-center w-1/2 md:m-auto md:m-none">
          <div className="relative md:mr-10 justify-start">
            <Image
              src={"/images/Logo.png"}
              width={100}
              height={100}
              alt="logo"
            />
          </div>

          {dataNavbar?.rows.map((row) => (
            <div key={row.id}>
              <a
                href={`#${_.snakeCase(row.title)}`}
                className={` text-white mr-5 hidden lg:flex`}
                onClick={() => console.log(row.title)}
              >
                {row.title}
              </a>
            </div>
          ))}
        </div>
        <div className="w-1/2 justify-end items-center hidden lg:flex  ">
          <div>
            <IoPersonCircleSharp style={{ fontSize: "30px", color: "white" }} />
          </div>
          <div className={` text-white font-bold mr-5`}>
            <p>Login</p>
          </div>
          <div className={`text-white font-thin text-2xl mr-5`}>|</div>
          <div className={` text-white font-bold`}>Register</div>
        </div>

        {/* Hamburger */}
        <div className="flex items-center px-4">
          <button
            id="hamburger"
            name="hamburger"
            type="button"
            className="absolute block right-10 lg:hidden"
            onClick={() => setIsOpen(true)}
          >
            <span className="w-[30px] h-[2px] my-2 block bg-white"></span>
            <span className="w-[30px] h-[2px] my-2 block bg-white"></span>
            <span className="w-[30px] h-[2px] my-2 block bg-white"></span>
          </button>
        </div>
        {/* End Hamburger */}
      </div>
      <AnimatePresence>
        {isOpen == true && (
          <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#5590c8] fixed top-0 h-screen z-10 w-full bg-opacity-20 backdrop-blur-md"
          >
            <button onClick={() => setIsOpen(false)}>
              <MdOutlineClose className="absolute right-9 top-10 w-10 h-10 text-white" />
            </button>
            <div className="mt-20 flex flex-col items-center gap-2">
              {dataNavbar?.rows.map((row) => (
                <div key={row.id}>
                  <button className="mx-auto  py-8  w-[1023px]  text-white hover:text-white hover:bg-white hover:font-bold  hover:bg-opacity-20 hover:backdrop-blur-xl">
                    <a
                      href={`#${_.snakeCase(row.title)}`}
                      onClick={() => setIsOpen(false)}
                      className={" "}
                    >
                      {row.title}
                    </a>
                  </button>
                </div>
              ))}
              <div className="mt-20">
                <div className="justify-end flex items-center">
                  <button className="text-white font-bold bg-white py-4 px-6 rounded-full flex justify-center items-center bg-opacity-20 backdrop-blur-md">
                    <IoPersonCircleSharp
                      style={{ fontSize: "30px", color: "white" }}
                    />
                    Login
                  </button>
                  <div className="text-white font-thin text-2xl mr-5 ml-5">
                    |
                  </div>
                  <button className="text-white font-bold bg-white py-4 px-6 rounded-full bg-opacity-20 backdrop-blur-md">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
