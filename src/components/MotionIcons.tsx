'use client'

import {motion} from "framer-motion"
import {GithubIcon, LinkedInIcon, MailToIcon} from "@/components/Icons";

export default function MotionIcons() {
  return (
    <nav className='flex self-center justify-center flex-wrap lg:mt-8 text-gray-700 dark:text-gray-200 transition-colors'>
      <motion.a href="mailto:ivan@ivancetus.com"
      whileHover={{y:-2}}
      whileTap={{scale:0.9}}
      className='w-6 mr-3'><MailToIcon className='hover:text-teal-600/90 dark:hover:text-teal-300'/></motion.a>
      <motion.a href="https://github.com/ivancetus" target={"_blank"}
      whileHover={{y:-2}}
      whileTap={{scale:0.9}}
      className='w-6 mx-3'><GithubIcon className='hover:text-gray-800 dark:hover:text-light'/></motion.a>
      <motion.a href="https://www.linkedin.com/in/ivancetus/" target={"_blank"}
      whileHover={{y:-2}}
      whileTap={{scale:0.9}}
      className='w-6 ml-3'><LinkedInIcon className='hover:text-[#0e76a8] dark:hover:text-sky-600'/></motion.a>
      <div className='w-6 mx-3 lg:hidden' />
    </nav>
  )
}