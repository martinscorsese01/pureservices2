'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 leading-tight">
              Pure Services
            </span>
            <span className="text-xs sm:text-sm md:text-base text-gray-700 -mt-1 font-semibold">
              Building Contractors
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link 
              href="/about" 
              className="text-lg lg:text-xl font-bold text-gray-800 hover:text-blue-600 transition-all"
            >
              ABOUT
            </Link>
            <Link 
              href="/services" 
              className="text-lg lg:text-xl font-bold text-gray-800 hover:text-blue-600 transition-all"
            >
              SERVICES
            </Link>
            <Link 
              href="/before-after" 
              className="text-lg lg:text-xl font-bold text-gray-800 hover:text-blue-600 transition-all"
            >
              BEFORE & AFTER
            </Link>
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-lg font-bold text-base lg:text-lg transition-all shadow-lg transform hover:scale-105"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden ml-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-all py-2"
              >
                ABOUT
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-all py-2"
              >
                SERVICES
              </Link>
              <Link
                href="/before-after"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-all py-2"
              >
                BEFORE & AFTER
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold text-base transition-all shadow-lg text-center mt-2"
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

