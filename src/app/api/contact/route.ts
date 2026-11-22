import { NextResponse } from "next/server";
import { toPayload, validateContact } from "@/lib/contact";

export const runtime = "nodejs";

const oneLine = (s: string) => s.replace(/[\r\n\t]+/g, " ").trim();

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const payload = toPayload(body);

  // Honeypot: pretend success so bots learn nothing.
  if (payload.website) return NextResponse.json({ ok: true });

  const errors = validateContact(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "validation", errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] email delivery not configured — message received:", payload);
      return NextResponse.json({ ok: true });
    }
    console.error("[contact] RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL are not set");
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const text = [
    `Nom : ${payload.name}`,
    `E-mail : ${payload.email}`,
    `Téléphone : ${payload.phone || "—"}`,
    `Entreprise : ${payload.company || "—"}`,
    `Service souhaité : ${payload.service || "—"}`,
    "",
    payload.message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject: `Nouveau message du site — ${oneLine(payload.name)}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text());
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
