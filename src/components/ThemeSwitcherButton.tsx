"use client";

import { SunIcon, MoonIcon } from "@/components/Icons";
import { themeContext } from "@/context/ThemeContextProvider";
import { useContext } from "react";

export default function ThemeSwitcherButton({ className = "" }) {
  const { theme, setTheme } = useContext(themeContext);
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`
          flex-col flex rounded-full p-1 z-10 absolute right-32 top-4 sm:right-12 xs:right-8
          ${theme === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          ${className}
        `}
    >
      {theme === "dark" ? (
        <SunIcon className={"fill-dark"} />
      ) : (
        <MoonIcon className={"fill-dark"} />
      )}
    </button>
  );
}
