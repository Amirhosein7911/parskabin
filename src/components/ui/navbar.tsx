"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User } from 'lucide-react'
import Link from 'next/link'

interface NavbarProps {
  className?: string
}

export default function Navbar({ className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'پروژه‌ها', href: '/projects' },
    { name: 'کابینت‌کارها', href: '/cabinet-makers' },
    { name: 'رزومه‌ساز', href: '/resume-builder' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-[var(--z-index-fixed)] transition-colors duration-300 ${className}`}
      style={{ backgroundColor: isScrolled ? 'var(--background)' : 'transparent' }}
      initial={false}
      animate={{ boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - positioned on the right for RTL */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary-700">
              ParsKabin
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 text-lg font-medium"
              >
                {item.name}
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="/project-request"
              className="ml-4 px-6 py-2 bg-accent-500 text-white rounded-md hover:bg-accent-600 transition-colors duration-200 text-lg font-medium"
            >
              ثبت پروژه
            </Link>

            {/* Auth Area */}
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 text-lg font-medium"
              >
                <User className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-neutral-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-label="منو را باز/بستن"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-neutral-700 hover:text-primary-600 transition-colors duration-200 text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile CTA Button */}
              <Link
                href="/project-request"
                className="block w-full text-center py-2 bg-accent-500 text-white rounded-md hover:bg-accent-600 transition-colors duration-200 text-lg font-medium mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                ثبت پروژه
              </Link>

              {/* Mobile Auth Area */}
              <Link
                href="/login"
                className="block py-2 text-neutral-700 hover:text-primary-600 transition-colors duration-200 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center justify-center">
                  <User className="h-6 w-6 ml-2" />
                  <span>ورود/ثبت‌نام</span>
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}