"use client";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export const tagContext = createContext<{
  tag: string;
  setTag: Dispatch<SetStateAction<string>>;
}>({} as any);

export default function TagContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tag, setTag] = useState("");
  return (
    <tagContext.Provider value={{ tag, setTag }}>
      {children}
    </tagContext.Provider>
  );
}
