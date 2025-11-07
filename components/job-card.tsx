"use client"

import { MapPin, Briefcase } from "lucide-react"

export default function JobCard({ job, onViewDetails }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-t-4 border-t-red-800">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{job.title}</h3>

      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-2">
          <MapPin size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-600">{job.location}</p>
        </div>

        <div className="flex items-start gap-2">
          <Briefcase size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-600">{job.experience}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="inline-block bg-green-200 text-green-800 text-xs font-semibold px-3 py-1 rounded">
          {job.type}
        </span>
        <button
          onClick={() => onViewDetails(job)}
          className="text-red-700 hover:text-red-800 font-semibold text-sm underline transition-colors"
        >
          View details
        </button>
      </div>
    </div>
  )
}
