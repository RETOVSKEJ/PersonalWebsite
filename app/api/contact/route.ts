import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email: string;
  message: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!email || !message) {
      return NextResponse.json(
        { success: false, message: "Email i wiadomość są wymagane." },
        { status: 400 },
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { success: false, message: "Wiadomość może mieć max 5000 znaków." },
        { status: 400 },
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!process.env.RESEND_API_KEY || !to || !from) {
      return NextResponse.json(
        { success: false, message: "Brak konfiguracji serwera (ENV)." },
        { status: 500 },
      );
    }

    const subject = "Portfolio contact";

    const safeName = escapeHtml(name || "—");
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br/>");

    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      replyTo: email, // dzięki temu “Reply” w mailu odpowiada do nadawcy
      text: `Name: ${name || "—"}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5">
          <h2>Portfolio contact</h2>
          <p><b>Name:</b> ${safeName}</p>
          <p><b>Email:</b> ${safeEmail}</p>
          <p><b>Message:</b><br/>${safeMessage}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        { success: false, message: "Resend error", details: error },
        { status: 502 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Wysłano wiadomość!" },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Wystąpił błąd serwera." },
      { status: 500 },
    );
  }
}
