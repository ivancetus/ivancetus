'use client'

import {useState} from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import path from "path";

export default function CustomLink({href, title, className=""} : {
  href: string,
  title: string,
  className: string
}) {
  const router = useRouter()
  const pathname = usePathname()
  const isHome = title === "Home"

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`
        h-[1px] inline-block bg-dark
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${pathname.startsWith(href) && !isHome ? 'w-full' : 'w-0'}
        ${pathname === "/" && isHome ? 'w-full' : 'w-0'}
        dark:bg-light
      `}>
        &nbsp;
      </span>
    </Link>
  )
}