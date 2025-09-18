import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email: unknown = body?.email;
    const source: unknown = body?.source;

    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Placeholder: integrate with your email provider or database here.
    // For now we just return success to unblock UI wiring.

    return NextResponse.json({ ok: true, source: typeof source === "string" ? source : undefined });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}


