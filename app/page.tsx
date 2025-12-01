import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:h-screen flex items-center justify-center overflow-hidden -mt-20 pt-24 sm:pt-28">
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Stylish modern living room with timber finishes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl sm:max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] leading-none text-blue-500 mb-4 sm:mb-6 font-bold tracking-tight break-words">
            PURE SERVICES
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white mb-6 sm:mb-8 font-bold drop-shadow-lg">
            BUILDING CONTRACTORS
          </p>
          <Link
            href="/contact"
            className="inline-block w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg sm:text-xl transition-all shadow-2xl transform hover:scale-105"
          >
            Call Now
          </Link>
        </div>

      </section>

      {/* Grey Content Section */}
      <section className="bg-gray-100 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-4 sm:mb-6 text-balance leading-tight">
            PURE SERVICES STANDS FOR QUALITY, RELIABILITY AND AGILITY.
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            What makes us different is our years of experience and our approach to working personally with you.
          </p>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 text-center mb-8 sm:mb-12 leading-tight">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Building Card */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-5 sm:p-6 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-lg flex items-center justify-center mb-5 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-3 sm:mb-4 leading-tight">Building</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                Professional construction services for residential and commercial projects. From new builds to extensions and renovations.
              </p>
            </div>

            {/* Property Maintenance Card */}
            <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg p-5 sm:p-6 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-indigo-600 rounded-lg flex items-center justify-center mb-5 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-3 sm:mb-4 leading-tight">Property Maintenance</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                Comprehensive maintenance solutions to keep your property in perfect condition. Regular servicing and emergency repairs.
              </p>
            </div>

            {/* Gardening & Outdoor Work Card */}
            <div className="bg-cyan-50 border-2 border-cyan-300 rounded-lg p-5 sm:p-6 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cyan-600 rounded-lg flex items-center justify-center mb-5 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-3 sm:mb-4 leading-tight">Gardening & Outdoor Work</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                Expert landscaping, garden design, and outdoor construction. Transform your outdoor spaces into beautiful, functional areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 text-center mb-3 sm:mb-4 leading-tight">
            Our Work
          </h2>
          <p className="text-base sm:text-xl text-gray-700 text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
            Examples of our quality craftsmanship and attention to detail
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bedroom Project */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="relative h-64 sm:h-80">
                <Image
                  src="/images/bedroom.jpg"
                  alt="Modern bedroom renovation with brass bed frame and French doors"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Bedroom Renovation</h3>
                  <p className="text-white/90 text-sm sm:text-lg">Modern bedroom design with elegant French doors and contemporary finishes</p>
                </div>
              </div>
            </div>

            {/* Bathroom Project 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="relative h-64 sm:h-80">
                <Image
                  src="/images/bathroom1.jpg"
                  alt="Modern bathroom with grey tiles, floating vanity and LED mirror"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Bathroom Remodel</h3>
                  <p className="text-white/90 text-sm sm:text-lg">Contemporary bathroom with premium fixtures and modern lighting</p>
                </div>
              </div>
            </div>

            {/* Bathroom Project 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="relative h-64 sm:h-80">
                <Image
                  src="/images/bathroom2.jpg"
                  alt="Bright modern bathroom with marble tiles and LED mirror lighting"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Luxury Bathroom</h3>
                  <p className="text-white/90 text-sm sm:text-lg">Elegant bathroom design with marble finishes and integrated LED lighting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

