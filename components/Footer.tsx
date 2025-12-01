import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-xl sm:text-2xl mb-4 text-blue-400">Pure Services</h3>
            <p className="text-base sm:text-lg text-gray-300 font-medium">
              Quality building contractors delivering excellence in construction, maintenance, and outdoor services.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl sm:text-2xl mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-3 text-base sm:text-lg">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Home</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl sm:text-2xl mb-4 text-cyan-400">Contact</h3>
            <ul className="space-y-3 text-base sm:text-lg text-gray-300 font-medium">
              <li>Phone: +44 7588 523 552</li>
              <li>Email: pureservicesltd@gmail.com</li>
              <li>WhatsApp: +44 7588 523 552</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pure Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

