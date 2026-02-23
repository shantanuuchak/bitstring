import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="BitString Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <div>
                <p className="font-bold text-foreground">BITSTRING IT SERVICES</p>
                <p className="text-sm text-muted-foreground">Private Limited</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Quick links</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/career"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Career
              </Link>
              <Link
                href="/training"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Training
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact us
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Services</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/services#talent-provisioning"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Talent Provisioning
              </Link>
              <Link
                href="/services#servicenow"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ServiceNow Consulting
              </Link>
              <Link
                href="/services#technology"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Technology Consulting and Services
              </Link>
              <Link
                href="/services#web"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Web Development
              </Link>
            </nav>
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-primary">India</h3>
              <address className="not-italic text-sm text-muted-foreground mt-2 space-y-1">
                <p>A-304, Nyati Empress, Vimamnagar,</p>
                <p>Pune, Maharashtra - 411014, BHARAT</p>
                <p>(020) 69011184</p>
              </address>
            </div>
            <div>
              <h3 className="font-semibold text-primary">USA</h3>
              <address className="not-italic text-sm text-muted-foreground mt-2 space-y-1">
                <p>1268 Howard Ct, Carson City,</p>
                <p>NV 89703, USA</p>
                <p>(949) 424-6646</p>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} BITSTRING. All rights reserved.</p>
            <a
              href="mailto:connect@bitstringit.com"
              className="hover:text-foreground transition-colors"
            >
              connect@bitstringit.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
