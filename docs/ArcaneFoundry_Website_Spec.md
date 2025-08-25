
# Arcane Foundry LLC — Website Spec

_Last updated: Aug 21, 2025_

## Goals (ranked)
1. **Convert LGS leads** for TradeEqualizer pilots.  
2. **Showcase products** clearly (TradeEqualizer now; Decksmith, Sideboard Spar, PacerParents).  
3. **Route contracting work** to your personal portfolio.  
4. **Grow an email list** for launches/updates.  
5. Be **fast, cheap, modern, accessible**.

---

## Sitemap & Page Briefs
- **/** (Home)  
  - Hero: one‑liner + CTAs (“Try TradeEqualizer”, “For LGS”, “Join newsletter”).  
  - Products strip (cards with icons).  
  - Credibility: “Built in Virginia · Indie & privacy‑friendly”.  
  - Mini “Why Arcane Foundry” (3 bullets).  
  - Newsletter signup.

- **/products**  
  - Grid of products (TradeEqualizer, Decksmith, Sideboard Spar, PacerParents) with one‑liners and links.

- **/products/tradeequalizer** (primary landing)  
  - Problem → Solution → How it works (3 steps) + 30‑sec GIF.  
  - Pricing (Players Free/Pro; LGS Lite/Pro + Day Pass).  
  - Pilot CTA (“Book a 15‑min demo”).  
  - “Not affiliated with WotC” disclaimer.

- **/for-lgs**  
  - Tailored value props, kiosk screenshots, pilot form (name, store, city, date).

- **/about**  
  - Founder bio, values (speed, clarity, privacy), location; link to personal portfolio for contracting.

- **/contact**  
  - Simple form + direct email (anti‑spam protected).

- **/blog** *(optional; MDX posts for changelogs/case studies)*

- **/legal/privacy** · **/legal/terms**

- **/press-kit**  
  - Logos, colors, one‑liner, product screenshots—static.

- **/status**  
  - Link to external status page (add later).

---

## Copy Starters
**Tagline:** _Small tools, big wins—software that respects your time._

**Home hero:**  
> **Arcane Foundry LLC** builds focused tools for players, parents, and local game stores.  
> Ship faster. Trade fairer. Play more.

**Primary CTAs:** `Try TradeEqualizer` · `For LGS` · `Join newsletter`

**TradeEqualizer blurb:**  
> Make fair trades in seconds. Scan a QR, match **what you want** with **what they have**, and print a receipt. Works on any phone—no app store needed.

---

## Design System (lean)
- **Look/feel:** modern with a subtle “arcane” vibe—light mode by default, dark mode optional.  
- **Colors:**  
  - Base: `#0F172A` (slate‑900), `#F8FAFC` (slate‑50)  
  - Accent: **Ember** `#EF4444` or **Copper** `#D97706` (CTAs only)  
  - Text: slate‑600/700 for body, slate‑900 for headings
- **Type:** Inter (UI) + Sora/Outfit (headlines).  
- **Components:** shadcn/ui (Button, Card, Dialog, Input), lucide‑react icons.  
- **Motion:** subtle Framer Motion (150–200ms fades/slide‑ups).

---

## Tech Stack (cheap & fast)
- **Framework:** Next.js 14 (App Router) + **MDX** for content pages.  
- **Styling:** Tailwind CSS + shadcn/ui.  
- **Hosting:** **Vercel** (free tier initially).  
- **Forms:** Formspree or Basin (no server).  
- **Analytics:** **Plausible** (cookie‑free).  
- **Newsletter:** Buttondown or Mailerlite (embedded form).  
- **Images:** `next/image` + OG per page (Vercel OG / Satori).  
- **CMS:** None to start—content as MDX in `/content`.

---

## IA & Component Inventory
- **Header:** AF monogram/logo, nav (Products, For LGS, About, Contact), primary CTA.  
- **Footer:** quick links, email, social, privacy/terms, “Not affiliated with WotC.”  
- **Blocks:**  
  - `Hero` (headline, subhead, primary/secondary CTAs)  
  - `ProductCard` (icon, name, one‑liner, “Learn more”)  
  - `FeatureList` (icon + sentence)  
  - `PricingTable` (2–4 columns, monthly; “Contact for pilot”)  
  - `TestimonialQuote` *(later)*  
  - `NewsletterSignup` (email + consent)

---

## Performance & Accessibility Budget
- **Budgets:** LCP ≤ **1.8s**, TTI ≤ **2.5s**, total JS ≤ **90 KB** gz.  
- **Practices:** ship icons as inline SVG, prefetch CTAs, compress images, lazy‑load GIF.  
- **A11y:** skip‑to‑content, visible focus, aria‑labels on icon buttons, semantic headings, AA contrast.

---

## SEO & Metadata (minimal but correct)
- Per‑page `title`/`description`, canonical, `sitemap.xml`, `robots.txt`.  
- **JSON‑LD** (Organization + Product) on TradeEqualizer page.  
- OG/Twitter cards with per‑page image.

**Example JSON‑LD (Organization):**
```html
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"Organization",
  "name":"Arcane Foundry LLC",
  "url":"https://arcane-foundry.com",
  "logo":"https://arcane-foundry.com/og/logo.png",
  "sameAs":[]
}
</script>
```

---

## Routes & File Structure
```
/app
  layout.tsx
  page.tsx                  # Home
  /products/page.tsx
  /products/tradeequalizer/page.tsx
  /for-lgs/page.tsx
  /about/page.tsx
  /contact/page.tsx
  /legal/privacy/page.mdx
  /legal/terms/page.mdx
/content
  /blog/*                   # optional
/components
  Hero.tsx  ProductCard.tsx  PricingTable.tsx  Newsletter.tsx
/public
  /og/*  /favicon.ico  /logos/*
```

---

## Key CTAs & Funnels
- **Primary:** “Try TradeEqualizer” → app domain or waitlist.  
- **LGS funnel:** “Book a demo” → Calendly/form; “Get pilot kit” PDF.  
- **Newsletter:** modal + footer form; incentive: “Pilot updates & launch discounts”.  
- **Contracting:** “Need a senior dev?” → link to personal portfolio/contact.

---

## Legal & Trust
- **Privacy:** short, plain English; note Plausible (no cookies).  
- **Terms:** basic SaaS terms; link to app terms if separate.  
- **Disclaimer:** “Compatible with trading card games; not affiliated with Wizards of the Coast.”

---

## Launch Checklist (1–2 day build)
- [ ] Repo + Next + Tailwind + shadcn/ui initialized  
- [ ] Home, Products, TradeEqualizer, For LGS, About, Contact scaffolded  
- [ ] Forms wired to Formspree/Basin; success states tested  
- [ ] Plausible installed with goals: `pilot_demo`, `newsletter_signup`, `try_app`  
- [ ] OG images generated; sitemap/robots added  
- [ ] Accessibility pass (Tab nav, landmarks, labels)  
- [ ] Performance check (Lighthouse green)  
- [ ] DNS on **arcane-foundry.com** → Vercel; HTTPS good  
- [ ] 404/500 pages present; favicon + social previews look correct

---

## Sample Copy (paste‑ready)

### Home
**H1:** Tools that respect your time.  
**Subhead:** We build small, sharp software for players, parents, and local game stores—so you can trade fair, prep faster, and play more.  
**Buttons:** `Try TradeEqualizer` · `For LGS` · `Join newsletter`

### TradeEqualizer (product page snippets)
**H2:** Make fair trades in seconds.  
**Bullets:**  
- **Match‑first trades:** Your **want list** meets their **binder**—no haggling.  
- **Fair by default:** Uses real market prices with a clear delta.  
- **Event‑ready:** QR join, kiosk “match board,” and printable receipts.

---

### Brand Notes
- Logo ideas: AF monogram, anvil with spark, or “rune‑like” glyph—keep simple SVG.  
- Voice: clear, friendly, no hype; one short sentence per idea.
