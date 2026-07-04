import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function parseAdminEmails(raw: string | undefined): string[] {
  if (!raw) return [];

  return raw
    .split(/[,;]/)
    .map((email) => email.trim())
    .filter(Boolean);
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, notes, profile } = await req.json();

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const adminEmails = parseAdminEmails(process.env.ADMIN_EMAILS);
    const fromEmail =
      process.env.RESEND_FROM_EMAIL?.trim() ||
      "DSS Scoping Desk <onboarding@resend.dev>";

    if (!resendApiKey) {
      console.warn(
        "WARNING: RESEND_API_KEY is not defined. Logging lead data instead:",
        { name, email, phone, notes, profile }
      );
      return NextResponse.json({ success: true, logged: true });
    }

    if (adminEmails.length === 0) {
      console.warn(
        "WARNING: ADMIN_EMAILS is not defined or empty. Logging lead data instead:",
        { name, email, phone, notes, profile }
      );
      return NextResponse.json({ success: true, logged: true });
    }

    const safeName = escapeHtml(String(name).trim());
    const safeEmail = escapeHtml(String(email).trim());
    const safePhone = escapeHtml(String(phone || "Not Provided").trim());
    const safeProfile = escapeHtml(
      String(profile || "Optional/Not Specified").trim()
    );
    const safeNotes = escapeHtml(
      String(notes || "No additional scoping triggers outlines were provided.").trim()
    );

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Advisory Scoping Request</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #FAFAF8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #16233F;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #FAFAF8; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                  <tr>
                    <td style="background-color: #16233F; padding: 30px 40px; border-top: 4px solid #8CC63F; text-align: left;">
                      <h1 style="color: #FFFFFF; margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.025em;">DSS Corp Advisory</h1>
                      <p style="color: #4FC3E8; margin: 5px 0 0 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">New Advisory Scoping Request</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 40px;">
                      <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 1.6; color: #4A5568;">
                        A new B2B advisory request has been successfully submitted via the DSS Corp Contact form. Below are the scoping coordinates:
                      </p>
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 30px; border-collapse: collapse;">
                        <tr>
                          <td width="30%" style="padding: 10px 0; border-bottom: 1px solid #EDF2F7; font-size: 12px; font-weight: bold; text-transform: uppercase; color: #718096; letter-spacing: 0.05em;">Full Name</td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #EDF2F7; font-size: 14px; font-weight: 600; color: #16233F;">${safeName}</td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #EDF2F7; font-size: 12px; font-weight: bold; text-transform: uppercase; color: #718096; letter-spacing: 0.05em;">Email</td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #EDF2F7; font-size: 14px; font-weight: 600; color: #16233F;"><a href="mailto:${safeEmail}" style="color: #4FC3E8; text-decoration: none;">${safeEmail}</a></td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #EDF2F7; font-size: 12px; font-weight: bold; text-transform: uppercase; color: #718096; letter-spacing: 0.05em;">Phone</td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #EDF2F7; font-size: 14px; font-weight: 600; color: #16233F;"><a href="tel:${safePhone}" style="color: #16233F; text-decoration: none;">${safePhone}</a></td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #EDF2F7; font-size: 12px; font-weight: bold; text-transform: uppercase; color: #718096; letter-spacing: 0.05em;">Profile</td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #EDF2F7; font-size: 14px; font-weight: 600; color: #16233F;">
                            <span style="background-color: #FAFAF8; border: 1px solid #CBD5E0; padding: 2px 8px; border-radius: 4px; font-size: 12px; display: inline-block;">
                              ${safeProfile}
                            </span>
                          </td>
                        </tr>
                      </table>
                      <div style="background-color: #FAFAF8; border: 1px solid #EDF2F7; border-radius: 6px; padding: 24px; margin-bottom: 30px;">
                        <h4 style="margin: 0 0 10px 0; font-size: 12px; font-weight: bold; text-transform: uppercase; color: #718096; letter-spacing: 0.05em;">Scope / Triggers Outline</h4>
                        <p style="margin: 0; font-size: 13px; line-height: 1.6; color: #2D3748; white-space: pre-wrap;">${safeNotes}</p>
                      </div>
                      <div style="text-align: center;">
                        <a href="mailto:${safeEmail}" style="background-color: #16233F; color: #FFFFFF; font-size: 13px; font-weight: bold; text-decoration: none; padding: 12px 24px; border-radius: 4px; display: inline-block;">
                          Reply Directly to Client
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color: #FAFAF8; padding: 20px 40px; border-top: 1px solid #EDF2F7; text-align: center; font-size: 11px; color: #A0AEC0;">
                      <p style="margin: 0;">This email was sent from the DSS Corp Advisory web application. All client transactions are governed under NDA protocol guidelines.</p>
                      <p style="margin: 5px 0 0 0;">Flat 5, SRI Apartments, Moosa Street, T. Nagar, Chennai - 600017.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const resend = new Resend(resendApiKey);
    const subject = `New DSS Advisory Scoping: ${safeName} (${safeProfile || "Client"})`;

    const deliveryResults = await Promise.all(
      adminEmails.map(async (recipient) => {
        const result = await resend.emails.send({
          from: fromEmail,
          to: [recipient],
          subject,
          html: htmlContent,
          replyTo: String(email).trim(),
        });

        return { recipient, result };
      })
    );

    const failures = deliveryResults.filter(({ result }) => result.error);
    const successes = deliveryResults.filter(({ result }) => result.data?.id);

    if (successes.length === 0) {
      const firstError = failures[0]?.result.error;
      console.error("ERROR: Failed to send scoping email via Resend:", failures);

      return NextResponse.json(
        {
          error:
            firstError?.message ||
            "Failed to send your request. Please try again.",
        },
        { status: 500 }
      );
    }

    if (failures.length > 0) {
      console.warn(
        "WARNING: Contact form email delivered to some recipients only:",
        failures.map(({ recipient, result }) => ({
          recipient,
          error: result.error?.message,
        }))
      );
    }

    return NextResponse.json({
      success: true,
      deliveredTo: successes.map(({ recipient }) => recipient),
      ...(failures.length > 0 && {
        partial: true,
        failedRecipients: failures.map(({ recipient }) => recipient),
      }),
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "An unexpected error occurred.";
    console.error("ERROR: Failed to send scoping email via Resend:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
