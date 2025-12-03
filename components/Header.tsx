import Link from 'next/link'

export default function Header() {
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

          {/* Navigation */}
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

          {/* Mobile CTA */}
          <Link
            href="/contact"
            className="md:hidden ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}

