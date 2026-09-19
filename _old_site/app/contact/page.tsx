"use client"

import React from "react"
import Image from "next/image"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      topic: "",
      message: "",
    })
    alert("Thank you for your message! We will get back to you soon.")
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <PageHero title="Contact Us" />

        {/* Contact Form Section */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto bg-background border border-border rounded-lg overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Form */}
                <div className="p-8 lg:p-12">
                  <h2 className="text-xl lg:text-2xl font-semibold text-[#7A1E1E] mb-8">
                    Let&apos;s connect!
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="sr-only">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-secondary border-0"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="sr-only">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-secondary border-0"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="sr-only">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-secondary border-0"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="topic" className="sr-only">
                        Topic
                      </Label>
                      <Input
                        id="topic"
                        name="topic"
                        placeholder="Topic"
                        value={formData.topic}
                        onChange={handleChange}
                        required
                        className="bg-secondary border-0"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="sr-only">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-secondary border-0 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full lg:w-auto bg-[#7A1E1E] hover:bg-[#5a1616] text-white px-8"
                    >
                      Get started
                    </Button>
                  </form>
                </div>

                {/* Details */}
                <div className="p-8 lg:p-12 bg-secondary relative overflow-hidden">
                  <h2 className="text-xl lg:text-2xl font-semibold text-[#7A1E1E] mb-8">
                    Details
                  </h2>

                  <div className="space-y-8">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        India
                      </h3>
                      <address className="not-italic text-sm text-muted-foreground space-y-1">
                        <p>A-304, Nyati Empress, Vimamnagar,</p>
                        <p>Pune, Maharashtra - 411014, BHARAT</p>
                        <p>(020) 69011184</p>
                      </address>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-2">USA</h3>
                      <address className="not-italic text-sm text-muted-foreground space-y-1">
                        <p>1268 Howard Ct, Carson City,</p>
                        <p>NV 89703, USA</p>
                        <p>(949) 424-6646</p>
                      </address>
                    </div>

                    <div>
                      <a
                        href="mailto:connect@bitstringit.com"
                        className="text-[#7A1E1E] hover:underline"
                      >
                        connect@bitstringit.com
                      </a>
                    </div>
                  </div>

                  {/* Contact illustration */}
                  <div className="absolute bottom-0 right-0 w-64 h-48 lg:w-80 lg:h-60">
                    <Image
                      src="/images/contact-illustration.png"
                      alt="Contact illustration"
                      fill
                      className="object-contain object-bottom-right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
