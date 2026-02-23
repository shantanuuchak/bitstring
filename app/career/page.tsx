"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { MapPin, Briefcase, Search, X } from "lucide-react"
import Link from "next/link"

interface Job {
  id: string
  title: string
  locations: string[]
  experience: string
  type: string
  category: string
  description: string
  responsibilities: string[]
  requirements: string[]
}

const jobs: Job[] = [
  {
    id: "1",
    title: "ServiceNow Sr. Developer",
    locations: ["Pune", "Bangalore", "Chennai", "Hyderabad (Hybrid)"],
    experience: "5+ years experience",
    type: "Full-time",
    category: "ServiceNow",
    description: "We are looking for an experienced ServiceNow Sr. Developer to join our team. You will be responsible for designing, developing, and implementing ServiceNow solutions for our clients.",
    responsibilities: [
      "Design and develop ServiceNow applications and modules",
      "Configure and customize ServiceNow platform",
      "Collaborate with clients to understand requirements",
      "Provide technical guidance to junior developers",
      "Participate in code reviews and ensure best practices",
    ],
    requirements: [
      "5+ years of ServiceNow development experience",
      "Strong knowledge of JavaScript, HTML, CSS",
      "Experience with ServiceNow ITSM, ITOM modules",
      "ServiceNow certifications preferred",
      "Excellent communication skills",
    ],
  },
  {
    id: "2",
    title: "ServiceNow Architect",
    locations: ["Pune", "Bangalore", "Chennai", "Hyderabad (Hybrid)"],
    experience: "6+ years experience",
    type: "Full-time",
    category: "ServiceNow",
    description: "We are seeking a ServiceNow Architect to lead technical design and architecture for enterprise ServiceNow implementations.",
    responsibilities: [
      "Lead technical architecture design for ServiceNow implementations",
      "Define technical standards and best practices",
      "Review and approve technical designs",
      "Mentor development teams",
      "Collaborate with stakeholders on solution design",
    ],
    requirements: [
      "6+ years of ServiceNow experience",
      "Proven experience as ServiceNow Architect",
      "Deep understanding of ServiceNow platform capabilities",
      "Multiple ServiceNow certifications required",
      "Strong leadership and communication skills",
    ],
  },
  {
    id: "3",
    title: "ServiceNow ITOM Sr. Developer",
    locations: ["Pune", "Bangalore", "Chennai", "Hyderabad (Hybrid)"],
    experience: "7+ years experience",
    type: "Full-time",
    category: "ServiceNow",
    description: "Join our team as a ServiceNow ITOM Sr. Developer to implement and customize IT Operations Management solutions.",
    responsibilities: [
      "Implement ServiceNow ITOM modules including Discovery, Service Mapping",
      "Configure Event Management and Orchestration",
      "Integrate with third-party monitoring tools",
      "Develop custom ITOM solutions",
      "Troubleshoot and resolve complex technical issues",
    ],
    requirements: [
      "7+ years of ServiceNow development experience",
      "Strong expertise in ITOM modules",
      "Experience with Discovery, Service Mapping, Event Management",
      "Knowledge of cloud platforms (AWS, Azure, GCP)",
      "ITOM certifications preferred",
    ],
  },
]

function JobCard({ job, onViewDetails }: { job: Job; onViewDetails: (job: Job) => void }) {
  return (
    <div className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="border-t-4 border-[#7A1E1E] -mt-6 -mx-6 mb-6 rounded-t-lg" />
      <h3 
        className="text-lg font-semibold text-foreground mb-4 cursor-pointer hover:text-[#7A1E1E] transition-colors"
        onClick={() => onViewDetails(job)}
      >
        {job.title}
      </h3>

      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{job.locations.join(", ")}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Briefcase className="w-4 h-4 shrink-0" />
          <span>{job.experience}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-md">
          {job.type}
        </span>
        <button
          onClick={() => onViewDetails(job)}
          className="text-sm text-muted-foreground hover:text-foreground underline"
        >
          View details
        </button>
      </div>
    </div>
  )
}

export default function CareerPage() {
  const [category, setCategory] = useState<string>("")
  const [location, setLocation] = useState<string>("")
  const [experience, setExperience] = useState<string>("")
  const [jobType, setJobType] = useState<string>("")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewDetails = (job: Job) => {
    setSelectedJob(job)
    setIsModalOpen(true)
  }

  const filteredJobs = jobs.filter((job) => {
    if (category && job.category !== category) return false
    if (location && !job.locations.some((loc) => loc.includes(location)))
      return false
    if (experience && !job.experience.includes(experience)) return false
    if (jobType && job.type !== jobType) return false
    if (
      searchQuery &&
      !job.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false
    return true
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <PageHero
          title="Join our team!"
          subtitle="We are growing and we want people to grow with us."
        />

        {/* Filters Section */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
              <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ServiceNow">ServiceNow</SelectItem>
                    <SelectItem value="Development">Development</SelectItem>
                    <SelectItem value="Consulting">Consulting</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pune">Pune</SelectItem>
                    <SelectItem value="Bangalore">Bangalore</SelectItem>
                    <SelectItem value="Chennai">Chennai</SelectItem>
                    <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={experience} onValueChange={setExperience}>
                  <SelectTrigger>
                    <SelectValue placeholder="Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-2">0-2 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5+">5+ years</SelectItem>
                    <SelectItem value="7+">7+ years</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={jobType} onValueChange={setJobType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="relative lg:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-12 lg:py-16 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} onViewDetails={handleViewDetails} />
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground">
                Keep in touch for more new roles at BitString!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Job Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedJob && (
            <>
              <DialogHeader>
                <div className="border-t-4 border-[#7A1E1E] -mt-6 -mx-6 mb-4 rounded-t-lg" />
                <DialogTitle className="text-xl font-bold text-foreground">
                  {selectedJob.title}
                </DialogTitle>
                <DialogDescription asChild>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedJob.locations.join(", ")}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Briefcase className="w-4 h-4" />
                        <span>{selectedJob.experience}</span>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-md">
                        {selectedJob.type}
                      </span>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Description</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {selectedJob.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Responsibilities</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    {selectedJob.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Requirements</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    {selectedJob.requirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button
                    asChild
                    className="w-full bg-[#7A1E1E] hover:bg-[#5a1616] text-white"
                  >
                    <Link href="/contact">Apply Now</Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
