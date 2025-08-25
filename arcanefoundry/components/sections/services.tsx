import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Shield, Database, Smartphone, Globe, BarChart3 } from "lucide-react"

const services = [
  {
    name: "Full-Stack Development",
    description: "End-to-end web applications with modern frameworks like Next.js, React, and Node.js. Clean, maintainable code that scales.",
    icon: Code,
    features: ["React/Next.js", "Node.js/Express", "TypeScript", "Database design"]
  },
  {
    name: "Power Platform Development",
    description: "Expert Power Platform solutions including Power Apps, Power BI, Power Automate, and SharePoint. From data integration to complex business applications.",
    icon: Zap,
    features: ["Power Apps", "Power BI", "Power Automate", "SharePoint integration"]
  },
  {
    name: "Performance Optimization",
    description: "Make your applications lightning fast. I identify bottlenecks and implement solutions that improve user experience.",
    icon: BarChart3,
    features: ["Core Web Vitals", "Database optimization", "Caching strategies", "Bundle optimization"]
  },
  {
    name: "Mobile & PWA",
    description: "Responsive web apps that work like native mobile applications. Cross-platform solutions that reach all your users.",
    icon: Smartphone,
    features: ["Progressive Web Apps", "Mobile-first design", "Touch optimization", "Offline support"]
  },
  {
    name: "Database & Backend",
    description: "Robust backend systems that handle your data securely and efficiently. From simple APIs to complex data pipelines.",
    icon: Database,
    features: ["REST/GraphQL APIs", "Database design", "Authentication", "Data security"]
  },
  {
    name: "DevOps & Deployment",
    description: "Streamline your development workflow with CI/CD, containerization, and cloud deployment strategies.",
    icon: Globe,
    features: ["Docker/Kubernetes", "CI/CD pipelines", "Cloud deployment", "Monitoring"]
  }
]

export function Services() {
  return (
    <section className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 id="services-heading" className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Services that deliver results
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From concept to deployment, I provide the technical expertise you need to build better software.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.name} className="group hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-ember to-copper flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-slate-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-ember mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
