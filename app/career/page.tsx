"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CareerHero from "@/components/career-hero"
import JobListings from "@/components/job-listings"
import JobModal from "@/components/job-modal"

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState(null)

  return (
    <main className="w-full">
      <Header />
      <CareerHero />
      <JobListings onViewDetails={setSelectedJob} />
      {selectedJob && <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
      <Footer />
    </main>
  )
}
