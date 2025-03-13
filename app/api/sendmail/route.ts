import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { to, subject, text } = await req.json();

    if (!to || !subject || !text) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email (use environment variables)
        pass: process.env.EMAIL_PASS, // Your email password (use app-specific password if using Gmail)
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent!", info });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email", details: error }, { status: 500 });
  }
}
