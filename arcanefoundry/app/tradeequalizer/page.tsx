import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Shield, Smartphone, Zap } from "lucide-react";
import SignupSection from "./signup-section";

export const metadata: Metadata = {
  title: "TradeEqualizer – Private Preview",
  description:
    "TradeEqualizer is a mobile‑first PWA for MTG card trading with intelligent matching, real‑time sessions, and USD pricing via TCGplayer Market.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "/tradeequalizer" },
  openGraph: {
    title: "TradeEqualizer – Fair trades first for MTG events and LGS",
    description:
      "Agree on a fair swap in under 60 seconds using live market prices and want lists. Scan, compare binders, auto‑balance, export a receipt.",
    url: "https://arcane-foundry.com/tradeequalizer",
    type: "website",
    images: [{ url: "/tradeEqualizer-demo-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TradeEqualizer – Fair trades first for MTG",
    description:
      "Match‑first trading: scan QR, compare binders, auto‑balance, receipt.",
    images: ["/tradeEqualizer-demo-image.png"],
  },
};

export default function TradeEqualizerPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <DemoSection />
      <ValueProps />
      <PersonasSection />
      <TechOverview />
      <SecurityNote />
      <CTABand />
      <SignupSection />
      <MobileStickyCTA />
      <SoftwareAppSchema />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full bg-ember/10 px-4 py-2 text-sm font-medium text-ember mb-6">
            Private Preview
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            TradeEqualizer
          </h1>
          <p className="mt-3 text-base font-medium text-slate-700">Fair trades first. Faster events. Zero haggling.</p>
          <p className="mt-4 text-slate-600 sm:text-lg">
            Agree on a fair swap in under 60 seconds using live market prices and both players’ want lists. Scan a QR, compare binders, auto‑balance the deal, and export a receipt.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button variant="ember" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#signup">Request Private Preview</a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#demo">View screenshot</a>
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#tech">See how it works</a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-slate-500">Built by a senior full‑stack dev and MTG grinder.</p>
        </div>
      </Container>
    </section>
  );
}

function ValueProps() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="mx-auto mb-8 max-w-3xl text-center text-sm text-slate-600">
          <span className="text-slate-500">Pilot interest from:</span> Local Game Store, College MTG Club, Regional Convention
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ember/10 text-ember">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Match‑first suggestions</h3>
            <p className="mt-2 text-sm text-slate-600">
              Uses real market prices and both players’ want lists to suggest
              fair, ready‑to‑agree swaps.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ember/10 text-ember">
              <Smartphone className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">QR binder compare</h3>
            <p className="mt-2 text-sm text-slate-600">
              Scan to instantly compare binders and jump straight to likely
              matches.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ember/10 text-ember">
              <Shield className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Auto‑balance + receipt</h3>
            <p className="mt-2 text-sm text-slate-600">
              Auto‑balances deals with USD pricing and exports a shareable
              receipt.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function DemoSection() {
  return (
    <section id="demo" className="py-10 sm:py-16">
      <Container>
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Screenshot preview</h2>
            <p className="mt-3 text-slate-600">
              A quick look at scanning binders, seeing fair matches, and exporting a receipt.
              More UI screenshots coming soon.
            </p>
            <div className="mt-5 flex gap-3">
              <Button variant="ember" asChild>
                <a href="#signup">Request Private Preview</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#tech">How it works</a>
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-3">
            <img
              src="/tradeEqualizer-demo-image.png"
              alt="TradeEqualizer demo"
              loading="lazy"
              className="mx-auto h-auto w-full max-w-md"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function PersonasSection() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <Container>
        <h2 className="text-2xl font-bold text-slate-900 text-center">Built for players and organizers</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-slate-900">For Players</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Faster, fairer trades with less haggling</li>
              <li>See likely matches instantly</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-slate-900">For LGS</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Shorter haggles → more games played</li>
              <li>Receipts reduce disputes</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-slate-900">For Clubs</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Quick setup for meetups and events</li>
              <li>Works on spotty venue wifi</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SecurityNote() {
  return (
    <section className="py-10">
      <Container>
        <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">Data & Security</h3>
          <p className="mt-2 text-sm text-slate-600">
            Core trading flows run on-device; we only store what’s needed for pilot access
            and improvements. No account scraping. Optional, consented analytics only.
          </p>
        </div>
      </Container>
    </section>
  );
}

function SoftwareAppSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'TradeEqualizer',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'Match-first MTG trading tool: scan QR, compare binders, auto-balance trades, export receipts.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
function CTABand() {
  return (
    <section id="cta" className="py-8 sm:py-10">
      <Container>
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 text-center">
          <h2 className="text-xl font-semibold text-slate-900">Interested in a pilot or demo?</h2>
          <p className="mt-2 text-sm text-slate-600">
            Perfect for LGS events, college clubs, and conventions. Let’s talk about
            your goals and whether TradeEqualizer is a fit.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="/#contact" className="inline-flex">
              <Button variant="ember" size="lg" className="w-full sm:w-auto">
                Contact us
              </Button>
            </a>
            <a href="mailto:josh@arcane-foundry.com?subject=TradeEqualizer%20pilot%20inquiry" className="inline-flex">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Email about a pilot
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TechOverview() {
  return (
    <section id="tech" className="py-14 sm:py-20 bg-slate-50">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900">How it works</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="text-sm font-semibold text-slate-900">1) Scan & import</div>
              <p className="mt-2 text-sm text-slate-600">Each player scans a QR to add their binder.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="text-sm font-semibold text-slate-900">2) See fair matches</div>
              <p className="mt-2 text-sm text-slate-600">We rank likely swaps using prices and want lists.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="text-sm font-semibold text-slate-900">3) Auto‑balance & receipt</div>
              <p className="mt-2 text-sm text-slate-600">Nudge values to even, confirm, export a receipt.</p>
            </div>
          </div>
          <h3 className="mt-8 text-xl font-semibold text-slate-900">
            Roadmap
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li>P0 (current): MTG‑only, market pricing, on‑device session flows</li>
            <li>P1: Enhanced offline, push notifications</li>
            <li>P2: Multi‑TCG support</li>
          </ul>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-slate-900">FAQ</h3>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="text-sm font-medium text-slate-900">Where do prices come from?</dt>
                <dd className="text-sm text-slate-600">TCGplayer Market pricing.</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-900">Does it work offline?</dt>
                <dd className="text-sm text-slate-600">Core flows work without steady internet; syncs when connected.</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-900">Which games?</dt>
                <dd className="text-sm text-slate-600">MTG in preview; more TCGs on the roadmap.</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-900">What’s the cost?</dt>
                <dd className="text-sm text-slate-600">Free during private preview; LGS plans available for pilots.</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Sticky CTA on mobile
function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 p-3 shadow-t sm:hidden">
      <div className="mx-auto max-w-3xl flex gap-3">
        <Button variant="ember" className="flex-1" asChild>
          <a href="#signup">Request private preview</a>
        </Button>
        <Button variant="outline" className="flex-1" asChild>
          <a href="#demo">View screenshot</a>
        </Button>
      </div>
    </div>
  );
}

// SignupSection is a client component imported from ./signup-section


