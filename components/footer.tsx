import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-background text-foreground py-12 md:py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-2">
              <Image src="/logo.png" className="w-10 h-10" height="10" width="10" alt="logo" />
              <span className="font-bold text-sm text-foreground">BITSTRING IT SERVICES</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">Private Limited</p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-brand hover:text-brand-dark transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-brand hover:text-brand-dark transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm text-brand">Quick links</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-brand transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-brand transition-colors">
                  Career
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand transition-colors">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand transition-colors">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-sm text-brand">Services</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-brand transition-colors">
                  Talent Provisioning
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand transition-colors">
                  ServiceNow Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand transition-colors">
                  Technology Consulting and Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand transition-colors">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            {/* India Contact */}
            <div>
              <h4 className="font-bold mb-4 text-sm text-brand">India</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>A-304, Nyati Empress,</li>
                <li>Vimannagar, Pune,</li>
                <li>Maharashtra - 411014,</li>
                <li>BHARAT</li>
                <li className="pt-2">
                  <Link href="tel:+91-20-69011184" className="hover:text-brand transition-colors">
                    (020) 69011184
                  </Link>
                </li>
              </ul>
            </div>

            {/* USA Contact */}
            <div>
              <h4 className="font-bold mb-4 text-sm text-brand">USA</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>1268 Howard Ct,</li>
                <li>Carson City,</li>
                <li>NV 89703, USA</li>
                <li className="pt-2">
                  <Link href="tel:+1-949-424-6646" className="hover:text-brand transition-colors">
                    (949) 424-6646
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            <p>&copy; 2025 BITSTRING. All rights reserved.</p>
            <Link href="mailto:connect@bitstringit.com" className="hover:text-brand transition-colors">
              connect@bitstringit.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
