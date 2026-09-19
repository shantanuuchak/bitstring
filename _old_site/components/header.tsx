"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo.png"
              alt="BitString Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="font-bold text-lg text-foreground tracking-wide">BITSTRING</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/training"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Training
            </Link>
            <Link
              href="/career"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Career
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200">
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/training"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Training
              </Link>
              <Link
                href="/career"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Career
              </Link>
              <Button asChild className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact us
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
