"use client";

import { motion } from "framer-motion";
import { useContext, useState } from "react";
import MenuMobileLink from "@/components/MenuMobileLink";
import MotionIcons from "@/components/MotionIcons";
import { MenuContext } from "@/context/MenuMobileContextProvider";

export default function MenuMobile() {
  const { isOpen, setIsOpen } = useContext(MenuContext);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="flex-col items-center justify-center hidden my-[0.68rem] z-20 absolute lg:flex sm:left-12 xs:left-8"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -200 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={`
          min-w-[30vw] sm:min-w-[40vw] hidden lg:flex flex-col z-5 items-start justify-start
          top-0 left-0 py-16 h-full fixed
          bg-light/75 dark:bg-dark/75 backdrop-blur-md
          border-r border-zinc-300 dark:border-zinc-500 shadow-2xl
          ${isOpen ? "z-10" : "-z-10"} 
          `}
      >
        <nav className="text-lg xs:text-base flex flex-col items-start justify-start lg:pl-16 md:pl-12 sm:pl-10 xs:pl-8">
          <MenuMobileLink
            href="/"
            title="Home"
            className=""
            toggle={handleClick}
          />
          <MenuMobileLink
            href="/about"
            title="About"
            className=""
            toggle={handleClick}
          />
          <MenuMobileLink
            href="/projects"
            title="Projects"
            className=""
            toggle={handleClick}
          />
          <MenuMobileLink
            href="/posts"
            title="Posts"
            className=""
            toggle={handleClick}
          />
        </nav>
        <MotionIcons />
      </motion.div>
      {isOpen ? (
        <aside>
          <motion.button
            onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? -1 : "0%" }}
            transition={{ ease: "easeInOut" }}
            className={`
              hidden lg:flex flex-col z-5  min-w-full
              top-0 left-0 h-full w-full fixed
              bg-light/75 dark:bg-dark/75 backdrop-blur-md
              border-r border-zinc-300 dark:border-zinc-500 shadow-none cursor-default focus:outline-none active:bg-none active:shadow-none
              ${isOpen ? "z-5" : "-z-10"} 
            `}
          ></motion.button>
        </aside>
      ) : null}
      {/*<aside>*/}
      {/*  <motion.button*/}
      {/*    onClick={handleClick}*/}
      {/*    initial={{ opacity: 0 }}*/}
      {/*    animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? -1 : "0%" }}*/}
      {/*    transition={{ ease: "easeInOut", duration: 0.2 }}*/}
      {/*    className={`*/}
      {/*        hidden lg:flex flex-col z-5  min-w-full*/}
      {/*        top-0 left-0 h-full w-full fixed*/}
      {/*        bg-light/75 dark:bg-dark/75 backdrop-blur-md*/}
      {/*        border-r border-zinc-300 dark:border-zinc-500 cursor-default shadow-none*/}
      {/*        ${isOpen ? "z-5" : "-z-10"} */}
      {/*      `}*/}
      {/*  ></motion.button>*/}
      {/*</aside>*/}
    </>
  );
}
