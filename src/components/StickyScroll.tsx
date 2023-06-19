"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ToTopArrow } from "@/components/Icons";

const StickyScroll = () => {
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`
        ${isSticky ? "fixed" : "hidden"}
        z-10 bottom-5 right-5 rounded-full
      `}
    >
      <button
        onClick={scrollToTop}
        className="w-10 h-10 text-xl dark:bg-zinc-700 bg-zinc-300 rounded-full
      hover:dark:bg-zinc-300 hover:bg-zinc-700 hover:text-zinc-300 hover:dark:text-zinc-500
      flex items-center justify-center
      "
      >
        {/*&#11165;*/}
        <ToTopArrow className="!w-6" />
      </button>
    </div>
  );
};

export default StickyScroll;
