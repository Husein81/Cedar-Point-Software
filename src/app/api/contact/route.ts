import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

let _resend: Resend | null = null;

function getResendClient(): Resend {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;

  entry.count++;
  return false;
}

function escapeHtml(raw: string): string {
  return raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailShell(bodyContent: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cedar Point Software</title>
</head>
<body style="margin:0;padding:24px;font-family:Arial,sans-serif;font-size:15px;color:#1a1a1a;background:#f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;padding:32px;">
    <tr><td>${bodyContent}</td></tr>
  </table>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body: unknown = await request.json();
    const record = body as Record<string, unknown>;
    const fullName = String(record.fullName ?? "");
    const email = String(record.email ?? "");
    const businessType = String(record.businessType ?? "");
    const message = String(record.message ?? "");
    const otherInterest = String(record.otherInterest ?? "");
    const interests = record.interests;

    if (!fullName || !email || !businessType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safeBusinessType = escapeHtml(businessType);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
    const safeOtherInterest = escapeHtml(otherInterest);
    const safeInterests = Array.isArray(interests)
      ? interests.map((i: unknown) => escapeHtml(String(i))).join(", ")
      : "None";
    const interestsLine = safeOtherInterest
      ? `${safeInterests} — Other: ${safeOtherInterest}`
      : safeInterests;

    const notificationHtml = buildEmailShell(`
      <h2 style="margin-top:0;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Business Type:</strong> ${safeBusinessType}</p>
      <p><strong>Products of Interest:</strong> ${interestsLine}</p>
      <h3>Message:</h3>
      <p style="white-space:pre-line;">${safeMessage}</p>
    `);

    const confirmationHtml = buildEmailShell(`
      <h2 style="margin-top:0;">Thank You, ${safeName}!</h2>
      <p>We've received your message and appreciate your interest in Cedar Point Software.</p>
      <p>Our team will review your inquiry and get back to you within 24 hours.</p>
      <p>In the meantime, feel free to explore our
        <a href="https://www.cedarpoint.software/products" style="color:#4f6ef7;">products and services</a>.
      </p>
      <p style="margin-bottom:0;">Best regards,<br/>Cedar Point Software Team</p>
    `);

    const resend = getResendClient();

    await resend.emails.send({
      from: "contact@cedarpoint.software",
      to: "contact@cedarpoint.software",
      replyTo: email,
      subject: `New Contact Form Submission from ${fullName}`,
      html: notificationHtml,
    });

    await resend.emails.send({
      from: "contact@cedarpoint.software",
      to: email,
      subject: "We received your message - Cedar Point Software",
      html: confirmationHtml,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
