"use client"

import { X } from "lucide-react"

export default function JobModal({ job, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-red-800 text-white p-6 flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-bold mb-2">{job.title}</h2>
            <p className="text-red-100">{job.location}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-red-700 p-1 rounded transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Job Details */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 font-semibold">Experience</p>
              <p className="text-lg text-gray-900">{job.experience}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-semibold">Job Type</p>
              <span className="inline-block bg-green-200 text-green-800 text-sm font-semibold px-3 py-1 rounded">
                {job.type}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">About the Role</h3>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Responsibilities</h3>
            <ul className="space-y-2">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex gap-3 text-gray-700">
                  <span className="text-red-700 font-bold flex-shrink-0">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Requirements</h3>
            <ul className="space-y-2">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="flex gap-3 text-gray-700">
                  <span className="text-red-700 font-bold flex-shrink-0">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex gap-3 pt-4">
            <button className="flex-1 bg-red-700 text-white font-semibold py-3 rounded hover:bg-red-800 transition-colors">
              Apply Now
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-900 font-semibold py-3 rounded hover:bg-gray-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
