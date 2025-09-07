import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    console.log("📩 Sending email with data:", body);

    // Ensure environment variables exist
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      return NextResponse.json(
        { success: false, msg: "Missing email environment variables" },
        { status: 500 }
      );
    }

    // Nodemailer transporter (Gmail + App Password)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `📬 New Contact Form: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, msg: "✅ Email sent successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("❌ Email send error:", err);
    return NextResponse.json(
      { success: false, msg: "Failed to send email" },
      { status: 500 }
    );
  }
}
