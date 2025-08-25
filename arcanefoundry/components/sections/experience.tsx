import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, Target, Award, CheckCircle, Zap, Database, MapPin } from "lucide-react"

const highlights = [
  {
    icon: Target,
    title: "Problem Solver",
    description: "I don't give up until the problem is solved. Recently optimized a 50+ million row SQL database, reducing search times from minutes to seconds."
  },
  {
    icon: Users,
    title: "Local Partner",
    description: "Based in Floyd, Virginia, I work closely with businesses in Roanoke, Blacksburg, Christiansburg and surrounding areas. Local expertise, global capabilities."
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Projects typically ship in 2-4 weeks, not months. I focus on getting you results quickly while maintaining quality."
  },
  {
    icon: Award,
    title: "Quality First",
    description: "Clean, maintainable code that your team can build upon long after I'm gone. Every solution is built to last."
  }
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We discuss your goals, timeline, and technical requirements. I ask the right questions to understand your unique challenges."
  },
  {
    step: "02",
    title: "Planning",
    description: "I create a detailed project plan with milestones, deliverables, and timeline. No surprises, just clear expectations."
  },
  {
    step: "03",
    title: "Development",
    description: "I build your solution using modern best practices. When challenges arise, I persist until finding the right solution."
  },
  {
    step: "04",
    title: "Delivery",
    description: "Your project is deployed, tested, and ready to use. I provide documentation and ongoing support as needed."
  }
]

export function Experience() {
  return (
    <section className="py-20 sm:py-32 bg-slate-50">
      <Container>
        {/* What Makes Me Different */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 id="experience-heading" className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why work with me?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            I'm not just another developer—I'm a local partner who cares about your success and won't quit until the job is done right.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {highlights.map((highlight) => {
            const Icon = highlight.icon
            return (
              <Card key={highlight.title} className="text-center border-0 shadow-none bg-transparent">
                <CardHeader className="pb-4">
                  <div className="mx-auto h-12 w-12 rounded-lg bg-gradient-to-br from-ember to-copper flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Local Focus Highlight */}
        <div className="mx-auto max-w-4xl mb-20">
          <Card className="bg-gradient-to-br from-ember to-copper text-white border-0">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 mr-3" />
                <h3 className="text-2xl font-display font-bold">Local Expertise, Global Capabilities</h3>
              </div>
              <p className="text-lg text-ember-50 mb-4">
                Based in Floyd, Virginia, I serve the greater Roanoke Valley region including Roanoke, Blacksburg, Christiansburg, 
                and surrounding areas. Whether you need on-site collaboration or remote development, I'm here to help your business grow.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full">Floyd</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">Roanoke</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">Blacksburg</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">Christiansburg</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">Remote Available</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* My Process */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h3 id="process-heading" className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            How we'll work together
          </h3>
          <p className="mt-4 text-lg text-slate-600">
            A proven process that ensures your project succeeds, with persistence that gets results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <Card key={item.step} className="relative group hover:shadow-lg transition-all duration-200">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-ember/20">{item.step}</span>
                  <CheckCircle className="h-6 w-6 text-ember" />
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
