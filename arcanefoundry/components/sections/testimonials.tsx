import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "I've worked with thousands of people over the last 30 years; Josh is in the top 5. Super talented, easy to work with, great with customers, and best of all unafraid to take on any challenge with the intelligence and perseverance to see it through successfully. If you don't hire Josh, you're an idiot.",
    author: "Past Client",
    company: "LinkedIn Recommendation",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-slate-50 to-slate-100">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 id="testimonials-heading" className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What clients say
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Don't just take my word for it—here's what past clients have to say about working together.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-ember to-copper flex items-center justify-center">
                      <Quote className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg text-slate-700 leading-relaxed mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.author}</p>
                      <p className="text-sm text-slate-600">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
