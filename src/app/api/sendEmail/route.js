import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { fullname, country, wanumber, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'mail.smtp2go.com',
    port: 587,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_SENDER,
      to: process.env.SMTP_RECEIVER,
      subject: fullname,
      html: `<b>Whatsapp:</b> ${country}-${wanumber}\n
            <b>Email:</b> ${email}\n\n
            <b>Message:</b>\n
            ${message}`,
    });

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}
