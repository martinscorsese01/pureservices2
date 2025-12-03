import Image from 'next/image'
import Link from 'next/link'
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from '@/components/Animations'

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden -mt-20 pt-24 sm:pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Pure Services team at work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 font-bold">
            About Pure Services
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium">
            Your Trusted Partner in Building Excellence
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-4 sm:mb-6 text-center">
              Our Story
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
              Pure Services was founded with a simple yet powerful vision: to deliver exceptional building and maintenance services that exceed our clients' expectations. What started as a small team of dedicated craftsmen has grown into a trusted name in the construction and property maintenance industry.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
              With years of combined experience in the trade, we bring expertise, reliability, and a personal touch to every project. We understand that your property is more than just bricks and mortar—it's your home, your business, your investment.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Our commitment to quality craftsmanship and customer satisfaction has been the cornerstone of our success, and we take pride in building long-lasting relationships with our clients.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 text-center mb-8 sm:mb-12">
              Our Core Values
            </h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Quality */}
            <StaggerItem>
              <HoverScale>
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all h-full">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-5">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">Quality</h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    We never compromise on quality. Every project is executed with meticulous attention to detail and the highest standards of craftsmanship.
                  </p>
                </div>
              </HoverScale>
            </StaggerItem>

            {/* Reliability */}
            <StaggerItem>
              <HoverScale>
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all h-full">
                  <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mb-5">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-indigo-600 mb-3">Reliability</h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    When we commit to a project, we deliver. On time, within budget, and with open communication throughout the entire process.
                  </p>
                </div>
              </HoverScale>
            </StaggerItem>

            {/* Agility */}
            <StaggerItem>
              <HoverScale>
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all h-full">
                  <div className="w-16 h-16 bg-cyan-600 rounded-lg flex items-center justify-center mb-5">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-600 mb-3">Agility</h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    We adapt quickly to changing needs and challenges, finding creative solutions that work for you and your project.
                  </p>
                </div>
              </HoverScale>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 text-center mb-8 sm:mb-12">
              What Sets Us Apart
            </h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            <StaggerItem>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Approach</h3>
                  <p className="text-gray-700">
                    We work personally with each client, understanding your unique needs and vision to deliver tailored solutions.
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Years of Experience</h3>
                  <p className="text-gray-700">
                    Our team brings decades of combined experience across all aspects of building and property maintenance.
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Services</h3>
                  <p className="text-gray-700">
                    From building and renovations to property maintenance and gardening, we're your one-stop solution.
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Satisfaction</h3>
                  <p className="text-gray-700">
                    Our success is measured by your satisfaction. We're not done until you're completely happy with the results.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
              Let's discuss your project and bring your vision to life with Pure Services.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg sm:text-xl transition-all shadow-xl transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
