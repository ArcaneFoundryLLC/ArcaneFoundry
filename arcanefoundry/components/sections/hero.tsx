import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { ArrowRight, Sparkles, Code, Zap, Shield, MapPin, Linkedin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-ember/10 px-4 py-2 text-sm font-medium text-ember mb-8">
            <Sparkles className="mr-2 h-4 w-4" />
            Senior Full-Stack Developer
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Code that respects your{" "}
            <span className="text-gradient">time</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
            I build fast, reliable software that ships on time. From AI features to performance optimization, I help teams deliver better products faster.
          </p>

          {/* Local Focus */}
          <div className="mt-8 inline-flex items-center space-x-2 text-sm text-slate-600 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-200">
            <MapPin className="h-4 w-4 text-ember" />
            <span>Floyd, Virginia • Serving Roanoke, Blacksburg, Christiansburg & surrounding areas</span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button variant="ember" size="lg" className="group">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              View Portfolio
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="https://www.linkedin.com/in/joshwassum/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>

          {/* Credibility */}
          <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-slate-500">
            <span>Built in Virginia</span>
            <span>•</span>
            <span>10+ years experience</span>
            <span>•</span>
            <span>Local & remote available</span>
          </div>
        </div>
      </Container>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-slate-200 [mask-image:radial-gradient(64rem_64rem_at_center,white,transparent)]">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="1 1"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
