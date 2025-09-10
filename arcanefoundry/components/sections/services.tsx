import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Shield, Database, Smartphone, Globe, BarChart3 } from "lucide-react"

const services = [
  {
    name: "Business Websites",
    description: "Professional websites that showcase your business and attract customers. Modern, responsive designs that work perfectly on all devices.",
    icon: Globe,
    features: ["Custom design", "Mobile responsive", "SEO optimized", "Fast loading"]
  },
  {
    name: "E-commerce Solutions",
    description: "Online stores that help you sell products and services. Complete e-commerce platforms with payment processing and inventory management.",
    icon: Smartphone,
    features: ["Online payments", "Inventory tracking", "Order management", "Customer accounts"]
  },
  {
    name: "Business Software",
    description: "Custom software solutions tailored to your business needs. From simple tools to complex applications that streamline your operations.",
    icon: Code,
    features: ["Custom applications", "Database systems", "User management", "Reporting tools"]
  },
  {
    name: "Power Platform Solutions",
    description: "Microsoft Power Platform expertise for businesses. Power Apps, Power BI, and Power Automate to automate and optimize your processes.",
    icon: Zap,
    features: ["Power Apps", "Power BI", "Power Automate", "SharePoint integration"]
  },
  {
    name: "Website Maintenance",
    description: "Keep your website running smoothly with regular updates, security patches, and performance monitoring. Peace of mind for your online presence.",
    icon: Shield,
    features: ["Security updates", "Performance monitoring", "Content updates", "Backup systems"]
  },
  {
    name: "Local SEO & Marketing",
    description: "Help local customers find your business online. SEO optimization and digital marketing strategies tailored for Floyd County businesses.",
    icon: BarChart3,
    features: ["Local SEO", "Google My Business", "Social media", "Analytics tracking"]
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
            Helping Floyd County businesses establish and grow their online presence with professional websites and custom software solutions.
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
