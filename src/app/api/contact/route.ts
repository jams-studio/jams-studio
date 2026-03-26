import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const port = Number(process.env.SMTP_PORT ?? 587);
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port,
  secure: port === 465,
  ignoreTLS: port === 25,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, project_type, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"JAMS Studio" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL ?? process.env.SMTP_USER,
      replyTo: `"${name}" <${email}>`,
      subject: `New enquiry from ${name}${project_type ? ` — ${project_type}` : ""}`,
      html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background-color:#07070d;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#07070d;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0e0e18,#141424);border:1px solid rgba(255,255,255,0.06);border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;border-bottom:2px solid #f5a623;">
              <p style="margin:0 0 4px;font-family:'Courier New',monospace;font-size:11px;color:#f5a623;letter-spacing:2px;text-transform:uppercase;">// jams-studio.de</p>
              <h1 style="margin:0;font-size:26px;font-weight:800;color:#eeeef0;letter-spacing:-0.5px;">New Project Enquiry</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#0e0e18;border:1px solid rgba(255,255,255,0.06);border-top:none;padding:36px 40px;">

              <!-- Fields -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:20px;">
                    <p style="margin:0 0 4px;font-family:'Courier New',monospace;font-size:10px;color:#55556a;letter-spacing:1px;text-transform:uppercase;">Name</p>
                    <p style="margin:0;font-size:16px;color:#eeeef0;font-weight:600;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:20px;">
                    <p style="margin:0 0 4px;font-family:'Courier New',monospace;font-size:10px;color:#55556a;letter-spacing:1px;text-transform:uppercase;">Email</p>
                    <a href="mailto:${email}" style="margin:0;font-size:16px;color:#f5a623;font-weight:600;text-decoration:none;">${email}</a>
                  </td>
                </tr>
                ${project_type ? `
                <tr>
                  <td style="padding-bottom:20px;">
                    <p style="margin:0 0 4px;font-family:'Courier New',monospace;font-size:10px;color:#55556a;letter-spacing:1px;text-transform:uppercase;">Project Type</p>
                    <p style="margin:0;display:inline-block;font-size:13px;color:#f5a623;background:rgba(245,166,35,0.1);border:1px solid rgba(245,166,35,0.2);border-radius:6px;padding:4px 12px;font-family:'Courier New',monospace;">${project_type}</p>
                  </td>
                </tr>` : ""}
                <tr>
                  <td>
                    <p style="margin:0 0 8px;font-family:'Courier New',monospace;font-size:10px;color:#55556a;letter-spacing:1px;text-transform:uppercase;">Message</p>
                    <div style="background:#07070d;border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:20px;">
                      <p style="margin:0;font-size:15px;color:#8888a0;line-height:1.7;white-space:pre-wrap;">${message}</p>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}" style="display:inline-block;padding:14px 32px;background:linear-gradient(135deg,#f5a623,#e6961e);color:#07070d;font-size:15px;font-weight:700;text-decoration:none;border-radius:10px;">Reply to ${name} →</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#07070d;border:1px solid rgba(255,255,255,0.06);border-top:none;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#55556a;">JAMS Studio — Paderborn, Germany</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
