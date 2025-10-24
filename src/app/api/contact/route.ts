import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // TODO: integrate with Resend, EmailJS, or your email service
  console.log("📩 New message:", { name, email, message });

  return NextResponse.json({ success: true, message: "Message sent successfully!" });
}
