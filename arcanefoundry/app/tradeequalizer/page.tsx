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
};

export default function TradeEqualizerPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ValueProps />
      <TechOverview />
      <CTABand />
      <SignupSection />
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
          <p className="mt-4 text-slate-600 sm:text-lg">
            Match‑first trading for events and LGS nights. Uses real prices and
            want lists to suggest fair, ready‑to‑agree swaps. Scan a QR to
            compare binders, auto‑balance the deal, and export a receipt.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button variant="ember" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#cta">Schedule a 15‑min intro</a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#tech">How it works</a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#signup">Request private preview</a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ValueProps() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
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
          <h2 className="text-2xl font-bold text-slate-900">What it does</h2>
          <p className="mt-3 text-slate-600">
            Suggests fair trades first, based on real prices and want lists.
            Compare binders via QR, auto‑balance the deal, and export a
            receipt—optimized for events and LGS nights.
          </p>
          <h3 className="mt-8 text-xl font-semibold text-slate-900">
            Key capabilities (P0)
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li>Finds equitable matches using USD pricing from TCGplayer Market</li>
            <li>Runs quick, live trading sessions with real‑time suggestions</li>
            <li>Mobile‑first PWA that installs like an app</li>
            <li>Basic offline support for unreliable connections</li>
            <li>Secure, auth‑ready architecture for pilots and beyond</li>
          </ul>
          <h3 className="mt-8 text-xl font-semibold text-slate-900">
            Roadmap
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li>P0 (current): MTG‑only, market pricing, on‑device session flows</li>
            <li>P1: Enhanced offline, push notifications</li>
            <li>P2: Multi‑TCG support</li>
          </ul>
          <p className="mt-4 text-xs text-slate-500">
            Note: P0 refers to the current development phase for pilot deployments.
          </p>
        </div>
      </Container>
    </section>
  );
}

// SignupSection is a client component imported from ./signup-section


