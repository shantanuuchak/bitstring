export default function ContactDetails() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-red-900 mb-8">Details</h2>
      <div className="space-y-8">
        {/* India */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">India</h3>
          <p className="text-gray-700 mb-2">A-304, Nyati Empress, Vimannagar,</p>
          <p className="text-gray-700 mb-4">Pune, Maharashtra - 411014, BHARAT</p>
          <p className="text-gray-900 font-semibold">(020) 6901184</p>
        </div>

        {/* USA */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">USA</h3>
          <p className="text-gray-700 mb-2">1268 Howard Ct, Carson City,</p>
          <p className="text-gray-700 mb-4">NV 89703, USA</p>
          <p className="text-gray-900 font-semibold">(949) 424-6646</p>
        </div>

        {/* Email */}
        <div>
          <p className="text-gray-900 font-semibold">connect@bitstringit.com</p>
        </div>

        {/* Illustration */}
        <div className="mt-12">
          <img src="/people-communicating-with-mailbox-illustration.jpg" alt="Contact illustration" className="w-full max-w-sm mx-auto" />
        </div>
      </div>
    </div>
  )
}
