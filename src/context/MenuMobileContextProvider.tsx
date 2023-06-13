"use client";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export const MenuContext = createContext<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>({} as any);

export default function MenuMobileContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
}
