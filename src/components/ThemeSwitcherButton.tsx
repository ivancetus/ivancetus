'use client'

import useThemeSwitcher from "@/components/hooks/useThemeSwitcher"
import { SunIcon, MoonIcon } from "@/components/Icons"
export default function ThemeSwitcherButton({ className="" }) {
  const [mode, setMode] = useThemeSwitcher()

  return (
    <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className={`
          flex-col flex rounded-full p-1 z-10 absolute right-32 top-4 sm:right-12 xs:right-8
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          ${className}
        `}
      >
        {
          mode === "dark" ?
            <SunIcon className={"fill-dark"} />
            :
            <MoonIcon className={"fill-dark"} />
        }
    </button>
  )
}