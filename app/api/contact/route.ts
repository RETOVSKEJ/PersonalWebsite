import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (message.length > 5000)
    return NextResponse.json(
      { success: false, message: "Wiadomość może mieć Max. 5000 znaków!" },
      { status: 400 }
    );

  const mojEmail = process.env.EMAIL;
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // host hotmaila, smpt.live.com nie działa
    port: 587, // port hotmaila
    secure: false, // true for 465, false for other ports
    auth: {
      user: mojEmail,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    let newEmail = await transporter.sendMail({
      from: `${mojEmail}`, // sender address
      to: `${mojEmail}`, // list of receivers
      subject: "Portfolio email",
      html: `
      <h3>${name}</h3>
      <h3>${email}</h3>
      <p>${message}</p>
      `,
    });
    console.log("Message Sent");
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json(
    { success: true, message: "Wysłano Email!" },
    { status: 201 }
  );
}
