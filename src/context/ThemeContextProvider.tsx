"use client";

import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";
import React, { createContext, Dispatch, SetStateAction } from "react";
// export const themeContext = createContext({
//   theme: "dark",
//   setTheme: React.Dispatch<SetStateAction<string>>,
// });

export const themeContext = createContext<{
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}>({} as any);

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useThemeSwitcher();
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
}
