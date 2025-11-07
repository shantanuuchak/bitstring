"use client"

import { useState } from "react"
import JobCard from "./job-card"

const JOBS = [
  {
    id: 1,
    title: "ServiceNow Sr. Developer",
    location: "Pune, Bangalore, Chennai, Hydrabad (Hybrid)",
    experience: "5+ years experience",
    type: "Full-time",
    description:
      "We are looking for an experienced ServiceNow Sr. Developer to join our growing team. You will work on complex ServiceNow implementations and customizations.",
    responsibilities: [
      "Develop and customize ServiceNow applications",
      "Collaborate with clients to understand requirements",
      "Mentor junior developers",
      "Participate in code reviews and best practices",
    ],
    requirements: [
      "5+ years of ServiceNow development experience",
      "Strong JavaScript and GlideScript knowledge",
      "Experience with ServiceNow platform",
      "Excellent communication skills",
    ],
  },
  {
    id: 2,
    title: "ServiceNow Architect",
    location: "Pune, Bangalore, Chennai, Hydrabad (Hybrid)",
    experience: "6+ years experience",
    type: "Full-time",
    description:
      "Join our team as a ServiceNow Architect and lead the design of enterprise-scale ServiceNow solutions.",
    responsibilities: [
      "Design ServiceNow solutions architecture",
      "Lead technical teams",
      "Conduct solution reviews",
      "Ensure best practices and standards compliance",
    ],
    requirements: [
      "6+ years of ServiceNow experience",
      "Proven architecture experience",
      "Strong leadership skills",
      "ServiceNow certifications preferred",
    ],
  },
  {
    id: 3,
    title: "ServiceNow ITOM Sr. Developer",
    location: "Pune, Bangalore, Chennai, Hydrabad (Hybrid)",
    experience: "7+ years experience",
    type: "Full-time",
    description: "We seek a ServiceNow ITOM Sr. Developer with extensive experience in IT Operations Management.",
    responsibilities: [
      "Develop ITOM solutions",
      "Implement monitoring and alerting",
      "Optimize IT operations",
      "Provide technical guidance",
    ],
    requirements: [
      "7+ years of ITOM experience",
      "Deep knowledge of IT operations",
      "ServiceNow ITOM expertise",
      "Problem-solving mindset",
    ],
  },
]

export default function JobListings({ onViewDetails }) {
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    experience: "",
    jobType: "",
    search: "",
  })

  const filteredJobs = JOBS.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      job.location.toLowerCase().includes(filters.search.toLowerCase())
    const matchesCategory = !filters.category || job.title.includes(filters.category)
    const matchesLocation = !filters.location || job.location.includes(filters.location)
    const matchesExperience = !filters.experience || job.experience.includes(filters.experience)
    const matchesJobType = !filters.jobType || job.type.includes(filters.jobType)

    return matchesSearch && matchesCategory && matchesLocation && matchesExperience && matchesJobType
  })

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded border-0 focus:outline-none focus:ring-2 focus:ring-red-700"
            >
              <option value="">Category</option>
              <option value="ServiceNow">ServiceNow</option>
              <option value="Developer">Developer</option>
              <option value="Architect">Architect</option>
            </select>

            <select
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded border-0 focus:outline-none focus:ring-2 focus:ring-red-700"
            >
              <option value="">Location</option>
              <option value="Pune">Pune</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Hydrabad">Hydrabad</option>
            </select>

            <select
              value={filters.experience}
              onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded border-0 focus:outline-none focus:ring-2 focus:ring-red-700"
            >
              <option value="">Experience</option>
              <option value="5+">5+ years</option>
              <option value="6+">6+ years</option>
              <option value="7+">7+ years</option>
            </select>

            <select
              value={filters.jobType}
              onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded border-0 focus:outline-none focus:ring-2 focus:ring-red-700"
            >
              <option value="">Job type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>

            <input
              type="text"
              placeholder="Search"
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded border-0 focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} onViewDetails={onViewDetails} />
          ))}
        </div>

        {/* No results message */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No jobs found matching your criteria.</p>
          </div>
        )}

        {/* Footer message */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">Keep in touch for more new roles!</p>
        </div>
      </div>
    </section>
  )
}
