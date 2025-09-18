## TradeEqualizer Private Preview Landing

- URL: `/tradeequalizer` (direct link only)
- Robots: noindex, nofollow (set via page `metadata`)
- Purpose: Brief product overview (what it is, does, differentiators) and a simple signup for updates.

### Content Highlights
- Smart matching using USD pricing (TCGplayer Market) for P0
- Mobile‑first PWA with basic offline; enhanced offline/push planned P1/P2
- Tech stack: Next.js App Router + TS, Supabase, Stripe, Scryfall + TCGplayer

### Files
- `app/tradeequalizer/page.tsx` — SSR page, sections for hero, value props, tech, and signup
- `app/tradeequalizer/signup-section.tsx` — client component for email capture
- `app/api/subscribe/route.ts` — POST endpoint `{ email, source }` → `{ ok: true }`

### Next Steps
- Wire `/api/subscribe` to a real provider (e.g., Resend, Mailchimp, Supabase table)
- Add tests for API payload validation and rate limiting if needed
- Consider adding a branded logo/og image once design is finalized


