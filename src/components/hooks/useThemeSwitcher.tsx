"use client";

import { createContext, useEffect, useState } from "react";

export default function useThemeSwitcher() {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");
    const handleChange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setTheme(check);

        // tailwindcss need to add dark class in html
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setTheme(check);
        window.localStorage.setItem("theme", check);

        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
    if (theme === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return [theme, setTheme] as const;
}
