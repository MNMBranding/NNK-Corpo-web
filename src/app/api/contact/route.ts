import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, interest, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and phone are required.' },
        { status: 400 }
      );
    }

    const errors: string[] = [];
    const formattedDate = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    // 1. Forward data to Pabbly Connect Webhook if configured
    if (process.env.PABBLY_WEBHOOK_URL) {
      try {
        const pabblyRes = await fetch(process.env.PABBLY_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            phone,
            interest: interest || 'General Enquiry',
            message: message || '',
            submittedAt: new Date().toISOString(),
            source: 'NNK Corporate Website',
          }),
        });

        if (!pabblyRes.ok) {
          console.error(`Pabbly webhook returned ${pabblyRes.status}: ${pabblyRes.statusText}`);
          errors.push('Pabbly webhook notification returned an error');
        }
      } catch (pabblyErr) {
        console.error('Failed to send to Pabbly webhook:', pabblyErr);
        errors.push('Failed to connect to Pabbly webhook');
      }
    }

    // 2. Send email via Nodemailer if SMTP credentials are configured
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const port = Number(process.env.SMTP_PORT) || 465;
        const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465;

        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port,
          secure,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const toEmail = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER;
        // From address must match the authenticated SMTP user to pass SPF/DMARC checks
        const fromEmail = process.env.SMTP_FROM || `"NNK Website Enquiries" <${process.env.SMTP_USER}>`;

        // Clean subject: avoid aggressive spam keywords like "Lead", "Urgent", ALL-CAPS
        const subject = `Website Enquiry from ${name} - ${interest || 'General'}`;

        const textContent = [
          `New Enquiry from NNK Website`,
          `----------------------------------------`,
          `Name:           ${name}`,
          `Email:          ${email}`,
          `Phone:          ${phone}`,
          `Interested In:  ${interest || 'General Enquiry'}`,
          `Received:       ${formattedDate}`,
          `----------------------------------------`,
          `Message:`,
          message || '(No message provided)',
          `----------------------------------------`,
          `Sent automatically from NNK Website contact form.`,
        ].join('\n');

        const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Website Enquiry</title>
</head>
<body style="margin: 0; padding: 20px; background-color: #f6f7f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #18181b;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 8px; overflow: hidden;">
    <tr>
      <td style="padding: 24px 32px; background-color: #111111; color: #ffffff;">
        <h1 style="margin: 0; font-size: 20px; font-weight: 600; letter-spacing: 0.5px;">NNK Constructions</h1>
        <p style="margin: 4px 0 0 0; font-size: 13px; color: #a1a1aa;">New website contact enquiry</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 32px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size: 15px; line-height: 1.5;">
          <tr>
            <td style="padding: 8px 0; color: #71717a; width: 140px; font-weight: 600; vertical-align: top;">Name:</td>
            <td style="padding: 8px 0; color: #111111; font-weight: 500;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #71717a; font-weight: 600; vertical-align: top;">Email:</td>
            <td style="padding: 8px 0; color: #111111;"><a href="mailto:${email}" style="color: #111111; text-decoration: underline;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #71717a; font-weight: 600; vertical-align: top;">Phone:</td>
            <td style="padding: 8px 0; color: #111111;"><a href="tel:${phone}" style="color: #111111; text-decoration: underline;">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #71717a; font-weight: 600; vertical-align: top;">Interested In:</td>
            <td style="padding: 8px 0; color: #111111; font-weight: 500;">${interest || 'General Enquiry'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #71717a; font-weight: 600; vertical-align: top;">Date:</td>
            <td style="padding: 8px 0; color: #71717a; font-size: 13px;">${formattedDate}</td>
          </tr>
        </table>

        <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e4e4e7;">
          <p style="margin: 0 0 8px 0; color: #71717a; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 6px; border: 1px solid #e5e7eb; font-size: 14px; line-height: 1.6; color: #1f2937; white-space: pre-wrap;">${message || 'No message provided.'}</div>
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding: 16px 32px; background-color: #fafafa; border-top: 1px solid #e4e4e7; font-size: 12px; color: #71717a; text-align: center;">
        This email was submitted through the contact form on NNK website.
      </td>
    </tr>
  </table>
</body>
</html>`;

        await transporter.sendMail({
          from: fromEmail,
          to: toEmail,
          replyTo: `"${name}" <${email}>`,
          subject,
          text: textContent,
          html: htmlContent,
          headers: {
            'X-Mailer': 'NNK-Mailer-v1',
            'X-Auto-Response-Suppress': 'OOF, AutoReply',
            'Auto-Submitted': 'auto-generated',
          },
        });
      } catch (smtpErr) {
        console.error('Failed to send email via Nodemailer:', smtpErr);
        errors.push('Failed to send notification email');
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully.',
      warnings: errors.length > 0 ? errors : undefined,
    });
  } catch (error) {
    console.error('API /api/contact error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
