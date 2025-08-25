import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Zap, TrendingUp, Clock, Users, Target } from "lucide-react"

const caseStudies = [
  {
    title: "50+ Million Row SQL Database Optimization",
    challenge: "A client's database search was taking 3-5 minutes to return results, crippling their application performance.",
    solution: "I analyzed the database structure, identified inefficient queries, and implemented optimized indexing strategies. When the first approach didn't achieve the target performance, I persisted through multiple iterations.",
    results: [
      "Search times reduced from 3-5 minutes to under 2 seconds",
      "Database performance improved by 99%",
      "User experience transformed from frustrating to instant",
      "Client saved thousands in infrastructure costs"
    ],
    icon: Database,
    category: "Performance Optimization"
  },
  {
    title: "Power Platform Integration Challenge",
    challenge: "A manufacturing company needed to integrate data from multiple sources (SQL Server, Project Online, Excel) into a unified view.",
    solution: "I designed and built a comprehensive Power Platform solution using Power Apps, Power BI, and custom connectors to pull data from various sources and create a unified dashboard.",
    results: [
      "Real-time data integration across multiple systems",
      "Automated reporting reduced manual work by 80%",
      "Project managers gained instant visibility into budgets",
      "Scalable solution that grew with the business"
    ],
    icon: Zap,
    category: "Power Platform"
  }
]

export function CaseStudies() {
  return (
    <section className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 id="case-studies-heading" className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Problem-solving in action
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Here's how I approach complex challenges and persist until finding the right solution.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => {
            const Icon = study.icon
            return (
              <Card key={study.title} className="overflow-hidden border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-ember to-copper flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-slate-900">{study.title}</CardTitle>
                        <span className="inline-block bg-ember/10 text-ember text-xs font-medium px-2 py-1 rounded-full mt-1">
                          {study.category}
                        </span>
                      </div>
                    </div>
                    <div className="text-right text-sm text-slate-500">
                      Case Study #{index + 1}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid gap-8 lg:grid-cols-3">
                    {/* Challenge */}
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                        <Target className="h-4 w-4 mr-2 text-ember" />
                        The Challenge
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-ember" />
                        My Approach
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-ember" />
                        Results
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start text-sm text-slate-600">
                            <div className="h-1.5 w-1.5 rounded-full bg-ember mr-2 mt-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-ember to-copper text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold mb-4">
              Ready to solve your toughest technical challenges?
            </h3>
            <p className="text-ember-50 mb-6">
              Whether it's performance optimization, system integration, or building something entirely new, 
              I have the persistence and expertise to get it done right.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-ember font-semibold px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Let's discuss your project
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
