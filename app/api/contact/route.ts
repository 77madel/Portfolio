import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Champs manquants." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_EMAIL || user;

    if (!host || !user || !pass || !to) {
      return NextResponse.json(
        {
          error:
            "Configuration SMTP manquante. Définis SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS et CONTACT_EMAIL dans .env.local.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Portfolio Madou KONE" <${user}>`,
      to,
      replyTo: email,
      subject: `Nouveau message depuis le portfolio – ${name}`,
      text: `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`,
      html: `
        <h2>Nouveau message depuis le portfolio</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erreur envoi email contact:", error);
    return NextResponse.json(
      { error: "Impossible d'envoyer le message pour le moment." },
      { status: 500 }
    );
  }
}

