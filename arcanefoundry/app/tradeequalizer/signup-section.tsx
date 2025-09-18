"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function SignupSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "tradeequalizer" }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Failed to subscribe");
      setStatus("success");
      setMessage("Thanks! We'll keep you posted.");
      setEmail("");
    } catch (error: unknown) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  }

  return (
    <section id="signup" className="py-10 sm:py-14">
      <Container>
        <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-ember" />
            <h2 className="text-xl font-semibold text-slate-900">Request private preview access</h2>
          </div>
          <p className="mt-2 text-sm text-slate-600">
            Sign up to receive a private preview invite and product updates.
          </p>
          <form onSubmit={onSubmit} className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <input
              type="email"
              required
              inputMode="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="sm:col-span-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/20"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" variant="ember" disabled={status === "loading"}>
              {status === "loading" ? "Submitting…" : "Request access"}
            </Button>
          </form>
          {message && (
            <p
              className={`mt-3 text-sm ${status === "error" ? "text-red-600" : "text-green-700"}`}
            >
              {message}
            </p>
          )}
          <p className="mt-3 text-xs text-slate-500">
            We respect your privacy. No spam, unsubscribe anytime.
          </p>
        </div>
      </Container>
    </section>
  );
}


