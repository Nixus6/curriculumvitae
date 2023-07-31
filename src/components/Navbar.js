'use client'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import { DribbbleIcon, GithubIcon, InstagramIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();
  console.log("pathname form1 ", pathname);
  console.log("href form1 ", href);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] bg-dark absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300
      ${pathname === href ? 'w-full' : 'w-0'}
      `}>&nbsp;</span>
      {/* transition-[width] ease-in-out duration-300 */}
    </Link>
  )
}

const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <CustomLink href="/" title="Home" className='mr-4 ' />
        <CustomLink href="/about" title="About" className='mx-4' />
        {/* <CustomLink href="/projects" title="Projects" className='mx-4' />
        <CustomLink href="/articles" title="Articles" className='ml-4' /> */}
      </nav>
      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a href="https://www.instagram.com/nixus_6/" target={"_blank"}
          className='w-6 mr-3'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}>
          <InstagramIcon />
        </motion.a>
        <motion.a href="https://github.com/Nixus6" target={"_blank"}
          className='w-6 mx-3'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}>
          <GithubIcon />
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/nicolas-andres-moreno-ba9b28193/" target={"_blank"}
          className='w-6 mx-3'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}>
          <LinkedInIcon />
        </motion.a>
      </nav>
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default Navbar