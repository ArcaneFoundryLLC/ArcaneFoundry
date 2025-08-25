# AI Guardrails — Arcane Foundry

Last updated: 2025-08-25

This document defines practical guardrails for using AI tools during development and content production for Arcane Foundry. It is a living document—update it as the process evolves.

## Checklist (operationalized)

- Own the output
  - Keep prompts, major model settings, and content versions in version control under `docs/ai/` or Notion.
  - Verify license terms for any models/assets (icons, photos, fonts, datasets) used.

- Human edit everything customer-facing
  - All copy gets a human pass: spell/grammar, clarity, tone.
  - Use Biome/Prettier for code style; run Grammarly/LanguageTool for text.

- Original value
  - Do not ship thin AI SEO content. Prioritize real examples, case studies, screenshots, demos, and metrics.
  - Require at least one concrete example or metric per long-form post/page.

- Attribution
  - Credit third-party icons/photos/datasets per their licenses (footer or page-local credit).
  - Maintain a `docs/ATTRIBUTIONS.md` when assets accumulate.

- Accessibility (WCAG 2.1 AA)
  - Provide alt text for images; ensure semantic headings and landmarks.
  - Visible focus states; keyboard navigability; aria labels for icon-only buttons.
  - Run Lighthouse a11y audit and screen-reader spot checks.

- Performance
  - Target Lighthouse ≥ 90 (Performance/Best Practices/SEO).
  - Lazy-load non-critical images; compress assets; avoid render-blocking scripts.
  - Use `next/image`, code-splitting, and prefetch critical routes.

- Security
  - Sanitize/validate inputs; never trust client data.
  - Lock environment variables; no secrets in the repo.
  - Run `npm audit` and enable Dependabot (or similar) for dependency scanning.

- Privacy/compliance
  - Publish a privacy policy; if tracking, include a cookie banner and consent.
  - Collect minimum necessary data; document data flows (GDPR/CCPA aware).
  - Prefer privacy-friendly analytics (e.g., Plausible).

- Consistency
  - Maintain a simple style guide (voice, headings, CTAs) in `docs/STYLE_GUIDE.md`.
  - Keep AI outputs aligned with that guide; avoid tonal drift.

- QA
  - Test on mobile and low-bandwidth; verify forms and email flows.
  - Do a quick pass with a screen reader (NVDA/VoiceOver) on key pages.

## Optional disclosure (transparency)

Some copy and visuals on this site were drafted with AI tools and edited by humans. We review all content for accuracy and clarity.

Placement options:
- Footer small-print (toggle-able).
- About/Imprint page.
- Per-post disclosure where relevant.

## How we enforce this (per PR)

1. PR template requires:
   - Which guardrails were considered; checklist items ticked.
   - Any third-party assets and their licenses.
   - A11y notes (alt text added? keyboard checks?) and Lighthouse score.
2. CI checks:
   - `npm run build` succeeds.
   - `npm run lint` passes.
   - Optional: run Lighthouse CI on preview (Vercel) and fail if < 90.
3. Content QA:
   - Human edit sign-off for customer-facing copy (self + one reviewer when possible).

## Quick commands

- Security: `npm audit`
- Lint/format: `npm run lint && npm run format`
- Build check: `npm run build`

## Roadmap hooks

- Add a PR template that embeds this checklist.
- Add `docs/ATTRIBUTIONS.md` and `docs/STYLE_GUIDE.md`.
- Add Lighthouse CI (or manual run on Vercel preview) with thresholds.
