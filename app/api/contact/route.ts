import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, name, email, phone, message, date } = body;

    // The Transporter: This is the "Postman" that logs into your Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "eloigospelevangelicalchurch@gmail.com",
        // This refers to the secret code we will set up in the next step
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // The Subject Line: Different for Prayers vs. Visits
    const subject =
      type === "prayer"
        ? `🙏 Prayer Request: ${name}`
        : `📍 Visit Notification: ${name}`;

    // The Email Design
    const emailHtml = `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="background: #5d0e11; padding: 20px; text-align: center;">
                    <h2 style="color: white; margin: 0;">EGEC Global Notification</h2>
                </div>
                <div style="padding: 20px; border: 1px solid #eee;">
                    <p><strong>Form Type:</strong> ${type.toUpperCase()}</p>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    ${
                      date
                        ? `<p><strong>Date of Visit:</strong> ${date}</p>`
                        : ""
                    }
                    <p><strong>Message:</strong></p>
                    <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #5d0e11;">${message}</p>
                </div>
            </div>
        `;

    await transporter.sendMail({
      from: '"EGEC Website" <eloigospelevangelicalchurch@gmail.com>',
      to: "eloigospelevangelicalchurch@gmail.com", // Sends to church office
      subject: subject,
      html: emailHtml,
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
