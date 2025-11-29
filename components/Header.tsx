import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-xl font-semibold text-gray-900 leading-tight">
              Pure Services
            </span>
            <span className="text-sm text-gray-600 -mt-1">
              Building Contractors
            </span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/services" 
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              SERVICES
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              CONTACT
            </Link>
            <Link 
              href="/contact" 
              className="bg-beige-500 hover:bg-beige-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
            >
              LET&apos;S TALK
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

