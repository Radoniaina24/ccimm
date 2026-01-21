import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const translations = {
  fr: {
    newInquiry: 'Nouvelle demande de contact',
    contactInfo: 'Informations de contact',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    company: 'Entreprise',
    country: 'Pays',
    subject: 'Sujet',
    message: 'Message',
    preferredContact: 'Contact préféré',
    footer: 'Madagascar & Africa Business Expo',
    receivedAt: 'Reçu le',
    notProvided: 'Non renseigné',
    replyEmail: 'Répondre par Email',
    callNow: 'Appeler',
  },
  en: {
    newInquiry: 'New Contact Inquiry',
    contactInfo: 'Contact Information',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phone: 'Phone',
    company: 'Company',
    country: 'Country',
    subject: 'Subject',
    message: 'Message',
    preferredContact: 'Preferred Contact',
    footer: 'Madagascar & Africa Business Expo',
    receivedAt: 'Received on',
    notProvided: 'Not provided',
    replyEmail: 'Reply by Email',
    callNow: 'Call',
  },
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      country,
      subject,
      message,
      preferredContact,
      language,
    } = body;

    const lang = language === 'en' ? 'en' : 'fr';
    const t = translations[lang];

    const currentDate = new Date().toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${t.footer}" <${process.env.EMAIL_USER}>`,
      to: 'calebdev777@gmail.com',
      replyTo: email,
      subject: `[${subject || t.newInquiry}] ${firstName} ${lastName}`,
      html: generateEmailTemplate({
        lang,
        t,
        currentDate,
        firstName,
        lastName,
        email,
        phone,
        company,
        country,
        message,
        preferredContact,
      }),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully!',
    });
  } catch (error) {
    console.error('Erreur détaillée:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
  }
}

function generateEmailTemplate({
  lang,
  t,
  currentDate,
  firstName,
  lastName,
  email,
  phone,
  company,
  country,
  message,
  preferredContact,
}: any) {
  return `
<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body style="margin:0; padding:0; background-color:#f1f5f9; font-family:Segoe UI, Roboto, Arial, sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding:32px 16px;">
<table width="600" style="max-width:600px;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 8px 24px rgba(15,23,42,.08);">

<!-- Header -->
<tr>
<td style="background:linear-gradient(135deg,#0f172a,#1e293b);padding:28px 32px;text-align:center;">
<h1 style="margin:0;color:#fff;font-size:22px;font-weight:700;">
${t.newInquiry}
</h1>
<p style="margin:8px 0 0;color:#cbd5f5;font-size:12px;">
${t.receivedAt} ${currentDate}
</p>
</td>
</tr>

<!-- Badge -->
<tr>
<td style="padding:20px 32px 0;">
<span style="background:#2563eb;color:#fff;padding:6px 14px;border-radius:999px;font-size:12px;font-weight:600;">
${t.preferredContact} : ${preferredContact === 'phone' ? t.phone : t.email}
</span>
</td>
</tr>

<!-- Infos -->
<tr>
<td style="padding:24px 32px;">
<h2 style="margin:0 0 16px;font-size:16px;color:#0f172a;font-weight:700;border-left:4px solid #2563eb;padding-left:12px;">
${t.contactInfo}
</h2>

<table width="100%" cellspacing="0" cellpadding="0" style="border-spacing:0 10px;">
<tr>
<td style="background:#f8fafc;padding:14px 16px;border-radius:8px;">
<div style="font-size:11px;color:#64748b;font-weight:600;text-transform:uppercase;">
${t.firstName} / ${t.lastName}
</div>
<div style="font-size:15px;font-weight:600;color:#0f172a;">
${firstName || '-'} ${lastName || '-'}
</div>
</td>
</tr>

<tr>
<td style="background:#fff;padding:14px 16px;border-radius:8px;border:1px solid #e5e7eb;">
<div style="font-size:11px;color:#64748b;font-weight:600;text-transform:uppercase;">
${t.email}
</div>
<a href="mailto:${email}" style="color:#2563eb;font-weight:600;text-decoration:none;">
${email || t.notProvided}
</a>
</td>
</tr>

<tr>
<td style="background:#f8fafc;padding:14px 16px;border-radius:8px;">
<div style="font-size:11px;color:#64748b;font-weight:600;text-transform:uppercase;">
${t.phone}
</div>
${phone || t.notProvided}
</td>
</tr>

<tr>
<td style="background:#fff;padding:14px 16px;border-radius:8px;border:1px solid #e5e7eb;">
<strong>${t.company} :</strong> ${company || t.notProvided}<br/>
<strong>${t.country} :</strong> ${country || t.notProvided}
</td>
</tr>
</table>
</td>
</tr>

<!-- Message -->
<tr>
<td style="padding:0 32px 28px;">
<h2 style="margin:0 0 14px;font-size:16px;color:#0f172a;font-weight:700;border-left:4px solid #22c55e;padding-left:12px;">
${t.message}
</h2>
<div style="background:#f8fafc;padding:18px;border-radius:8px;border:1px solid #e5e7eb;">
<p style="margin:0;color:#334155;font-size:14px;line-height:1.7;">
${message || t.notProvided}
</p>
</div>
</td>
</tr>

<!-- Footer -->
<tr>
<td style="background:#0f172a;padding:22px 32px;text-align:center;">
<p style="margin:0 0 6px;color:#fff;font-size:14px;font-weight:700;">
${t.footer}
</p>
<p style="margin:0;color:#94a3b8;font-size:11px;">
© ${new Date().getFullYear()} — Tous droits réservés
</p>
</td>
</tr>

</table>
</td>
</tr>
</table>
</body>
</html>
`;
}
