# ArcaneFoundry Website Development Roadmap

_Last updated: December 2024_

## Development Philosophy
- **Fast & Lightweight**: Build in 1-2 weeks, not months
- **Progressive Enhancement**: Start simple, add complexity as needed
- **Performance First**: Optimize for speed and accessibility from day one
- **Content-Driven**: Focus on clear messaging and user conversion

---

## Phase 1: Foundation (Week 1, Days 1-3)

### Day 1: Project Setup
- [x] Initialize Next.js 14 project with TypeScript
- [x] Configure Tailwind CSS and shadcn/ui
- [x] Set up project structure following the spec
- [x] Configure ESLint, Prettier, and Git hooks
- [ ] Set up Vercel deployment pipeline

### Day 2: Core Components
- [ ] Build reusable component library:
  - `Button` (primary, secondary, ghost variants)
  - `Card` (product cards, feature cards)
  - `Hero` (headline, subhead, CTAs)
  - `Layout` (header, footer, navigation)
- [ ] Implement design system tokens (colors, typography, spacing)
- [ ] Create responsive navigation component

### Day 3: Page Scaffolding
- [ ] Create all page routes from the spec
- [ ] Implement basic layouts for each page
- [ ] Set up MDX support for content pages
- [ ] Create placeholder content structure

---

## Phase 2: Core Functionality (Week 1, Days 4-5)

### Day 4: Home Page & Products
- [ ] Build home page hero section with CTAs
- [ ] Implement product grid with cards
- [ ] Add newsletter signup component
- [ ] Create credibility section ("Built in Virginia")
- [ ] Implement responsive design for mobile

### Day 5: TradeEqualizer Landing Page
- [ ] Build problem → solution → how it works flow
- [ ] Implement pricing table component
- [ ] Add demo booking CTA
- [ ] Create 30-second GIF placeholder
- [ ] Add WotC disclaimer

---

## Phase 3: Business Logic (Week 2, Days 1-2)

### Day 1: Forms & Integrations
- [ ] Implement contact form with Formspree/Basin
- [ ] Set up newsletter signup (Buttondown/Mailerlite)
- [ ] Create LGS pilot form
- [ ] Add form validation and success states
- [ ] Test all form submissions

### Day 2: Analytics & SEO
- [ ] Install and configure Plausible Analytics
- [ ] Set up conversion tracking goals
- [ ] Implement JSON-LD structured data
- [ ] Generate OG images for social sharing
- [ ] Create sitemap.xml and robots.txt

---

## Phase 4: Polish & Launch (Week 2, Days 3-5)

### Day 3: Content & Copy
- [ ] Write final copy for all pages
- [ ] Optimize images and assets
- [ ] Add favicon and logo assets
- [ ] Create 404 and 500 error pages
- [ ] Implement dark mode toggle (optional)

### Day 4: Performance & Accessibility
- [ ] Run Lighthouse audits and optimize
- [ ] Implement lazy loading for images
- [ ] Add skip-to-content navigation
- [ ] Test keyboard navigation and screen readers
- [ ] Optimize bundle size and loading

### Day 5: Launch Preparation
- [ ] Final testing across browsers and devices
- [ ] Configure GoDaddy DNS for Vercel deployment
- [ ] Set up custom domain in Vercel
- [ ] Configure HTTPS and security headers
- [ ] Deploy to production
- [ ] Monitor performance and errors

---

## Technical Implementation Details

### Project Structure
```
arcane-foundry/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── products/          # Product pages
│   ├── for-lgs/           # LGS landing
│   ├── about/             # About page
│   ├── contact/           # Contact form
│   └── legal/             # Legal pages
├── components/             # Reusable components
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Layout components
│   └── sections/          # Page sections
├── content/                # MDX content
├── lib/                    # Utilities and config
├── public/                 # Static assets
└── styles/                 # Global styles
```

### Key Dependencies
```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.3.0",
  "@radix-ui/react-*": "^1.0.0",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.0.0"
}
```

### Performance Targets
- **LCP**: ≤ 1.8s
- **TTI**: ≤ 2.5s
- **Total JS**: ≤ 90KB gzipped
- **Core Web Vitals**: All green in Lighthouse

### Domain Configuration
- **Primary Domain**: `arcane-foundry.com` (GoDaddy)
- **DNS Provider**: GoDaddy
- **Hosting**: Vercel
- **SSL**: Automatic via Vercel
- **DNS Records**: Configure A/CNAME records for Vercel deployment

---

## Development Workflow

### Daily Process
1. **Morning**: Review yesterday's progress and plan today's tasks
2. **Development**: Focus on one major component or page per day
3. **Testing**: Test functionality and responsiveness throughout development
4. **Evening**: Commit code, update progress, plan next day

### Quality Gates
- [ ] All code compiles without errors
- [ ] Components are responsive on mobile and desktop
- [ ] Forms submit successfully and show proper feedback
- [ ] Performance meets target metrics
- [ ] Accessibility requirements are met

### Deployment Strategy
- **Development**: Local development with hot reload
- **Staging**: Vercel preview deployments for testing
- **Production**: Vercel production deployment with automatic builds
- **Domain**: Custom domain `arcane-foundry.com` via GoDaddy DNS

---

## Risk Mitigation

### Technical Risks
- **Performance**: Start with minimal dependencies, optimize incrementally
- **Responsiveness**: Test on real devices, not just browser dev tools
- **Forms**: Use proven form services (Formspree/Basin) to avoid backend complexity

### Timeline Risks
- **Scope Creep**: Stick to the spec, defer nice-to-have features
- **Integration Issues**: Test external services early in development
- **Content Delays**: Use placeholder content initially, replace with final copy

---

## Success Metrics

### Development Success
- [ ] Site launches within 2 weeks
- [ ] All pages load in under 2 seconds
- [ ] Forms capture leads successfully
- [ ] Site is accessible and mobile-friendly

### Business Success
- [ ] LGS demo requests increase
- [ ] Newsletter signups grow
- [ ] TradeEqualizer trial conversions improve
- [ ] Site generates qualified leads

---

## Post-Launch Iteration

### Week 3-4: Optimization
- [ ] Analyze user behavior with Plausible
- [ ] A/B test CTA placements and copy
- [ ] Optimize conversion funnels
- [ ] Add user feedback collection

### Month 2+: Growth
- [ ] Implement blog for SEO and engagement
- [ ] Add case studies and testimonials
- [ ] Expand product pages with more detail
- [ ] Consider adding interactive features

---

## Notes
- **Keep it simple**: Focus on conversion, not fancy animations
- **Mobile first**: Ensure excellent mobile experience
- **Fast loading**: Every second counts for user engagement
- **Clear CTAs**: Make next steps obvious for visitors
- **Test everything**: Don't assume forms or links work correctly

This roadmap prioritizes getting a functional, conversion-focused site live quickly while maintaining quality and performance standards.
