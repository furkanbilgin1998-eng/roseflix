import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ error: "Missing API key" }, { status: 500 });

  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const resend = new Resend(key);
  const { error } = await resend.emails.send({
    from: "Roseflix Contact <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL!,
    replyTo: email,
    subject: `Roseflix — ${name} sana yazdı`,
    text: `Ad: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: "Mail gönderilemedi" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
