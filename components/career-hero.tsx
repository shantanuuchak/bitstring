export default function CareerHero() {
  return (
    <section className="w-full bg-red-800 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          {/* Arrow shape using CSS */}
          <div className="flex-1">
            <div className="relative">
              <div className="bg-red-800 pr-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Join our team!</h1>
                <p className="text-lg text-gray-100">We are growing and we want people to grow with us.</p>
              </div>
              {/* Arrow pointer */}
              <div className="absolute right-0 top-0 bottom-0 w-0 h-0 border-l-[40px] border-l-red-800 border-t-[60px] border-t-transparent border-b-[60px] border-b-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
