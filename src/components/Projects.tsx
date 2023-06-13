'use client'

import Link from "next/link"
import Image, {StaticImageData} from "next/image"
import {motion} from "framer-motion"
import { DocumentIcon, GithubIcon, LinkArrow } from "@/components/Icons"

const FramerImage = motion(Image)
export default function Projects({ projectLink, articleLink, githubLink, title, summary, img }: {
  projectLink: string
  articleLink: string
  githubLink: string
  title: string
  summary: string
  img: StaticImageData
}) {
  return (
    <article
      className='
        w-full flex items-center justify-between rounded-3xl rounded-br-2xl
        border border-solid border-dark bg-light shadow-xl p-12 relative dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 dark:shadow-sky-50
      '
    >
      <Link
        href={projectLink} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-2xl lg:w-full'
      >
        <FramerImage
          src={img} alt={title} className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            '
        />
      </Link>

      <div className='w-1/2 flex flex-col items-center justify-between px-6 lg:w-full lg:px-0 lg:pt-6 text-dark dark:text-light font-mono'>
        <Link
          href={articleLink} target='_blank'
          className='
            hover:underline underline-offset-2 hover:text-sky-400
            my-2 w-full text-center text-2xl font-bold sm:text-xl relative
            '
        >
          {title}<DocumentIcon className='!w-8 pl-2 inline' />
        </Link>
        <p className='my-2'>
          {summary}
        </p>

        <div className='mt-6 flex items-center justify-between font-semibold text-lg'>
          <Link
            href={githubLink} target='_blank'
            className='flex items-center hover:text-sky-400 transition ease-in-out duration-150'>
            Code<GithubIcon className='!w-8 pl-1' />
          </Link>

          <Link
            href={projectLink} target='_blank'
            className='
              ml-24 xs:ml-10 rounded-lg flex
              hover:text-sky-400 transition ease-in-out duration-150
              '
          >
            Demo <LinkArrow className='w-8 pl-1' />
          </Link>
        </div>
      </div>
    </article>
  )
}