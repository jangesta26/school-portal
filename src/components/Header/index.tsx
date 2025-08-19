'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Label } from '../ui/label'
import LinkItems from './LinkItems'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'
import SearchModal from '../Modal/SearchModal'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="w-full flex flex-col shadow-md bg-white lg:min-h-[100px] min-h-[60px] tracking-wide relative z-50">
      {/* Top bar */}
      <div className="w-full bg-blue-900 text-white text-sm font-light px-2">
        <div className="flex flex-wrap lg:flex-row items-center justify-end lg:gap-2 gap-0.5 w-full">
          <LinkItems
            linkData={[
              { id: 1, pathname: 'careers', name: 'Careers' },
              { id: 2, pathname: 'services', name: 'Services' },
              { id: 3, pathname: 'registrars-office', name: 'Request for Documents' },
              { id: 4, pathname: 'parent-portal', name: 'Parent Portal' },
            ]}
          />
          <Button
            variant="default"
            className="p-0 rounded-none bg-transparent hover:bg-yellow-500 hover:text-black"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search />
          </Button>
        </div>
      </div>

      {/* Main nav */}
      <div className="flex lg:px-10 p-2 items-center justify-between gap-5 w-full">
        {/* Logo (desktop) */}
        <Link href="/" className="max-sm:hidden flex items-center justify-center gap-2">
          <Image 
            src="https://res.cloudinary.com/duwr4xret/image/upload/v1754639380/brand-logo_gvlrx8.png" 
            alt="logo"
            width={300}
            height={300} 
            className="lg:w-20 lg:h-20 w-10 h-10" />
            <div className='flex flex-col'>
                <Label className='xl:text-5xl text-2xl font-semibold text-blue-500'>AcadOne College</Label>
                <Label className='text-blue-500'>Rooted in the Community, Reaching the World</Label>
            </div>
        </Link>

        {/* Logo (mobile) */}
        <Link href="/" className="hidden max-sm:block">
          <img src="https://res.cloudinary.com/duwr4xret/image/upload/v1754639380/brand-logo_gvlrx8.png" alt="logo" className="w-9" />
        </Link>

        {/* Mobile Toggle */}
        <Button
          variant='ghost' 
          onClick={toggleMenu} 
          className="lg:hidden cursor-pointer bg-blue-900"
        >
          <svg className="w-7 h-7" fill="#ffffff" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </Button>

        {/* Desktop Links */}
        <div className='hidden lg:flex lg:flex-wrap xl:flex items-center xl:justify-between lg:justify-end gap-6 w-3/5 '>
          <div className="lg:flex lg:flex-wrap items-center justify-end gap-6 text-[12px]">
            <Link href="/" className="hover:text-blue-700 text-blue-700 font-medium">Home</Link>
            <Link href="/admissions" className="hover:text-blue-700 text-slate-900 font-medium">Admissions</Link>
            <Link href="/academics" className="hover:text-blue-700 text-slate-900 font-medium">Academics</Link>
            <Link href="/about" className="hover:text-blue-700 text-slate-900 font-medium">About Us</Link>
            <Link href="/news-events" className="hover:text-blue-700 text-slate-900 font-medium">News and Events</Link>
            <Link href="/engagements" className="hover:text-blue-700 text-slate-900 font-medium">Engagements</Link>
            <Link href="/sustainability" className="hover:text-blue-700 text-slate-900 font-medium">Sustainability</Link>
          </div>
          <div className='flex gap-2'>
            <Button variant='default' className="p-1.5 h-8 w-16 text-[12px] rounded-[2px] font-medium text-white bg-rose-700 hover:bg-blue-700">
              Apply
            </Button>
            <Button variant='default' className="p-1.5 h-8 w-16 text-[12px] rounded-[2px] font-medium text-white bg-blue-600 hover:bg-blue-700">
              Ask us
            </Button>
            <Button variant='default' className="p-1.5 h-8 w-16 text-[12px] rounded-[2px] font-medium text-white bg-blue-900 hover:bg-blue-700">
              Engage
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-full w-2/3 min-w-[220px] bg-white shadow-lg z-50 p-6 flex flex-col gap-6"
          >
            <button 
              onClick={closeMenu} 
              className="absolute top-4 right-4 rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-black" viewBox="0 0 320.591 320.591">
                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
              </svg>
            </button>
            <Link href="/" className="hover:text-blue-700 text-blue-700 font-medium" onClick={closeMenu}>Home</Link>
            <Link href="/admissions" className="hover:text-blue-700 text-slate-900 font-medium" onClick={closeMenu}>Admissions</Link>
            <Link href="/academics" className="hover:text-blue-700 text-slate-900 font-medium" onClick={closeMenu}>Academics</Link>
            <Link href="/about" className="hover:text-blue-700 text-slate-900 font-medium" onClick={closeMenu}>About Us</Link>
            <Link href="/news" className="hover:text-blue-700 text-slate-900 font-medium" onClick={closeMenu}>News and Events</Link>
            <Link href="/engagements" className="hover:text-blue-700 text-slate-900 font-medium" onClick={closeMenu}>Engagements</Link>
            <Link href="/sustainability" className="hover:text-blue-700 text-slate-900 font-medium" onClick={closeMenu}>Sustainability</Link>
            <button className="px-4 py-2 mt-3 text-sm rounded-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              Sign In
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  )
}

export default Navbar
