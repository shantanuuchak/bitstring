export default function SuccessStories() {
  return (
    <section className="w-full bg-gradient-to-b from-red-900 to-teal-900 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Success stories</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Testimonial */}
          <div className="bg-red-800 bg-opacity-50 p-8 rounded-lg">
            <div className="flex gap-2 mb-4">
              <span className="text-3xl text-white">"</span>
            </div>
            <p className="text-white text-base leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div>
              <p className="text-white font-bold">Name</p>
              <p className="text-gray-300 text-sm">Company</p>
            </div>
          </div>

          {/* Decorative Mountain */}
          <div className="hidden md:flex justify-center items-end h-64">
            <div className="relative w-full h-full flex items-end justify-center">
              {/* Mountain SVG */}
              <svg viewBox="0 0 300 200" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <polygon points="0,200 100,80 150,120 200,40 300,200" fill="#06B6D4" opacity="0.8" />
                <polygon points="50,200 120,100 180,150 250,60 300,200" fill="#0891B2" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative clouds */}
      <div className="absolute top-10 right-10 text-white opacity-20 text-6xl">☁️</div>
      <div className="absolute bottom-20 left-10 text-white opacity-20 text-5xl">☁️</div>
    </section>
  )
}
