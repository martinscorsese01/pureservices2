import Image from 'next/image'
import Link from 'next/link'

export default function BeforeAfter() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden -mt-20 pt-24 sm:pt-28 pb-12 sm:pb-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 font-bold">
            Before & After
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium">
            See the Transformation in Our Work
          </p>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
          
          {/* Project 1 */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-gray-200">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 text-center">
                Bathroom Renovation Project 1
              </h2>
              <p className="text-gray-600 text-center mt-2 text-base sm:text-lg">
                Complete bathroom transformation with modern fixtures and finishes
              </p>
            </div>
            <div className="grid md:grid-cols-2">
              {/* Before */}
              <div className="relative group">
                <div className="absolute top-4 left-4 z-10 bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
                  BEFORE
                </div>
                <div className="relative h-64 sm:h-96 lg:h-[500px]">
                  <Image
                    src="/images/bathroombefore.jpg"
                    alt="Bathroom before renovation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* After */}
              <div className="relative group">
                <div className="absolute top-4 left-4 z-10 bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
                  AFTER
                </div>
                <div className="relative h-64 sm:h-96 lg:h-[500px]">
                  <Image
                    src="/images/bathroomafter.jpg"
                    alt="Bathroom after renovation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-8 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Project Details</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Modern tile installation with elegant grey finish</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Premium fixtures and LED mirror lighting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complete plumbing upgrade and waterproofing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Contemporary floating vanity and storage solutions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-gray-200">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 text-center">
                Bathroom Renovation Project 2
              </h2>
              <p className="text-gray-600 text-center mt-2 text-base sm:text-lg">
                Luxury bathroom upgrade with marble finishes
              </p>
            </div>
            <div className="grid md:grid-cols-2">
              {/* Before */}
              <div className="relative group">
                <div className="absolute top-4 left-4 z-10 bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
                  BEFORE
                </div>
                <div className="relative h-64 sm:h-96 lg:h-[500px]">
                  <Image
                    src="/images/bathroombefore2.jpg"
                    alt="Second bathroom before renovation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* After */}
              <div className="relative group">
                <div className="absolute top-4 left-4 z-10 bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
                  AFTER
                </div>
                <div className="relative h-64 sm:h-96 lg:h-[500px]">
                  <Image
                    src="/images/bathroomafter2.jpg"
                    alt="Second bathroom after renovation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-8 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Project Details</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Premium marble tile installation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Integrated LED mirror with ambient lighting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>High-end fixtures and modern sanitary ware</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complete renovation from floor to ceiling</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
            Let Pure Services bring your vision to life with quality craftsmanship and attention to detail.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg sm:text-xl transition-all shadow-xl transform hover:scale-105"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  )
}
