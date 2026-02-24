import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Image
                src="/images/logo.png"
                alt="BitString Logo"
                width={32}
                height={32}
                className="h-8 w-8 mt-1"
              />
              <div>
                <p className="font-bold text-foreground tracking-wide">BITSTRING IT SERVICES</p>
                <p className="text-sm text-muted-foreground">Private Limited</p>
              </div>
            </div>
            <div className="flex gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-primary uppercase tracking-wide text-sm">Quick links</h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/career"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Career
              </Link>
              <Link
                href="/training"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Training
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Contact us
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-semibold text-primary uppercase tracking-wide text-sm">Services</h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="/services#talent-provisioning"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Talent Provisioning
              </Link>
              <Link
                href="/services#servicenow"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                ServiceNow Consulting
              </Link>
              <Link
                href="/services#technology"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Technology Consulting and Services
              </Link>
              <Link
                href="/services#web"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Web Development
              </Link>
            </nav>
          </div>

          {/* Locations */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-primary uppercase tracking-wide text-sm">India</h3>
              <address className="not-italic text-sm text-muted-foreground mt-3 space-y-1 leading-relaxed">
                <p>A-304, Nyati Empress, Vimamnagar,</p>
                <p>Pune, Maharashtra - 411014, BHARAT</p>
                <p>(020) 69011184</p>
              </address>
            </div>
            <div>
              <h3 className="font-semibold text-primary uppercase tracking-wide text-sm">USA</h3>
              <address className="not-italic text-sm text-muted-foreground mt-3 space-y-1 leading-relaxed">
                <p>1268 Howard Ct, Carson City,</p>
                <p>NV 89703, USA</p>
                <p>(949) 424-6646</p>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 py-6 lg:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} BITSTRING. All rights reserved.</p>
            <a
              href="mailto:connect@bitstringit.com"
              className="hover:text-foreground transition-colors duration-200"
            >
              connect@bitstringit.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
