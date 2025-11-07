export default function ServicesHero() {
  return (
    <section className="w-full bg-gradient-to-r from-red-900 to-red-800 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">BitString Services</h1>
            <p className="text-lg text-gray-100">We offer a wide range of services.</p>
          </div>
          {/* Arrow shape */}
          <div className="hidden md:block w-32 h-32 bg-red-900 transform skew-x-12"></div>
        </div>
      </div>
    </section>
  )
}
