import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { CaseStudies } from "@/components/sections/case-studies"
import { Experience } from "@/components/sections/experience"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <section id="services" aria-labelledby="services-heading">
        <Services />
      </section>
      <section id="case-studies" aria-labelledby="case-studies-heading">
        <CaseStudies />
      </section>
      <section id="experience" aria-labelledby="experience-heading">
        <Experience />
      </section>
      <section id="testimonials" aria-labelledby="testimonials-heading">
        <Testimonials />
      </section>
      <section id="contact" aria-labelledby="contact-heading">
        <Contact />
      </section>
    </>
  )
}
