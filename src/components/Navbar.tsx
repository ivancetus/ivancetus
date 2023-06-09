import Link from "next/link"
import MenuLink from "@/components/MenuLink"
import ThemeSwitcherButton from "@/components/ThemeSwitcherButton"
import MotionIcons from "@/components/MotionIcons";
import Logo from "@/components/Logo";
import MenuMobile from "@/components/MenuMobile";


export default function Navbar() {
  return (
    <header
      className='
        sticky top-0 z-10
        w-full px-32 py-4
        border-b border-zinc-300 dark:border-zinc-500
        dark:text-light
        bg-light/75 dark:bg-dark lg:bg-transparent lg:dark:bg-transparent
        backdrop-blur lg:backdrop-filter-none
      '
    >

      {/* blur effect for header */}
      <div className='hidden lg:flex py-8 px-8 w-full absolute top-0 left-0 bg-light/75 dark:bg-dark/75 backdrop-blur-md'/>

      <ThemeSwitcherButton className='!w-8'/>

      {/* desktop view */}
      <div className='w-full flex items-center justify-between lg:hidden p-1'>
        <nav>
          <MenuLink href="/" title="Home" className='mr-3'/>
          <MenuLink href="/about" title="About" className='mx-3'/>
          <MenuLink href="/projects" title="Projects" className='mx-3'/>
          <MenuLink href="/posts" title="Posts" className='ml-3'/>
        </nav>
        <MotionIcons />
      </div>

      {/* responsive view */}
      <MenuMobile />

      {/* keep the navbar at the same height */}
      <div className='hidden lg:flex py-4 lg:flex-col'/>


      <div className='absolute left-[50%] top-4 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}