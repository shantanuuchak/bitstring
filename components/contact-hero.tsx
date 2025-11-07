export default function ContactHero() {
  return (
    <div className="bg-gradient-to-r from-red-900 to-red-800 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          </div>
          {/* Arrow shape */}
          <div className="hidden md:block w-32 h-32 bg-red-900 transform skew-x-12"></div>
        </div>
      </div>
    </div>
  )
}
