import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Linkedin, MapPin } from "lucide-react"

const navigation = {
  services: [
    { name: "Full-Stack Development", href: "#services" },
    { name: "Power Platform Development", href: "#services" },
    { name: "Performance Optimization", href: "#services" },
    { name: "Mobile & PWA", href: "#services" },
  ],
  company: [
    { name: "Experience", href: "#experience" },
    { name: "Process", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy", href: "/legal/privacy" },
    { name: "Terms", href: "/legal/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-ember to-copper flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AF</span>
                </div>
                <span className="font-display text-xl font-semibold text-slate-900">
                  Arcane Foundry
                </span>
              </div>
              <p className="text-slate-600 max-w-md mb-4">
                Senior full-stack developer building fast, reliable software that ships on time. 
                Based in Floyd, Virginia, serving the greater Roanoke Valley region with local expertise and remote capabilities.
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <a 
                  href="https://www.linkedin.com/in/joshwassum/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-slate-600 hover:text-ember transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-500">
                <MapPin className="h-4 w-4" />
                <span>Floyd, Virginia • Roanoke Valley Region</span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Services</h3>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-slate-600 hover:text-ember transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Company</h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-slate-600 hover:text-ember transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

                     {/* Bottom */}
           <div className="mt-12 pt-8 border-t border-slate-200">
             <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
               <div className="text-center sm:text-left">
                 <p className="text-sm text-slate-500">
                   © 2024 Arcane Foundry LLC. All rights reserved.
                 </p>
                 <p className="text-xs text-slate-400 mt-1">
                   Some content drafted with AI assistance and carefully reviewed by humans for accuracy and clarity.
                 </p>
               </div>
               <div className="flex space-x-6">
                 {navigation.legal.map((item) => (
                   <Link
                     key={item.name}
                     href={item.href}
                     className="text-sm text-slate-500 hover:text-ember transition-colors"
                   >
                     {item.name}
                   </Link>
                 ))}
               </div>
             </div>
           </div>
        </div>
      </Container>
    </footer>
  )
}
