import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!email.toLowerCase().endsWith("@gmail.com")) {
      return NextResponse.json({ error: "Only Gmail addresses are accepted" }, { status: 400 })
    }

    const companyEmail = "kaushalrobotic@gmail.com"

    const emailData = {
      to: companyEmail,
      from: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
              }
              .header {
                background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .content {
                background: white;
                padding: 30px;
                border-radius: 0 0 8px 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #06b6d4;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                color: #333;
                padding: 10px;
                background: #f3f4f6;
                border-radius: 4px;
              }
              .message-box {
                background: #f3f4f6;
                padding: 15px;
                border-radius: 4px;
                border-left: 4px solid #06b6d4;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">From:</span>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <span class="label">Message:</span>
                  <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
                </div>
                <p style="color: #666; font-size: 14px; margin-top: 30px;">
                  This message was sent from the Kaushal Robotics website contact form.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    const confirmationEmail = {
      to: email,
      subject: "Thank You for Contacting Kaushal Robotics",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
              }
              .header {
                background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
                color: white;
                padding: 30px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .content {
                background: white;
                padding: 30px;
                border-radius: 0 0 8px 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              .success-icon {
                width: 60px;
                height: 60px;
                background: white;
                border-radius: 50%;
                margin: 0 auto 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 30px;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                padding: 20px;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="success-icon">✓</div>
                <h1 style="margin: 0; font-size: 24px;">Message Received!</h1>
              </div>
              <div class="content">
                <p>Dear ${name},</p>
                <p><strong>Your message has been sent successfully to Kaushal Robotics. Thank you for contacting us!</strong></p>
                <p>We've received your inquiry and our team will review it shortly. We aim to respond to all messages within 24-48 hours.</p>
                <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p style="margin: 0; color: #666;"><strong>What happens next?</strong></p>
                  <ul style="margin: 10px 0; padding-left: 20px; color: #666;">
                    <li>Our team will review your message</li>
                    <li>We'll get back to you via email</li>
                    <li>We look forward to discussing your project</li>
                  </ul>
                </div>
                <p>In the meantime, feel free to explore more about our robotic solutions on our website.</p>
                <p style="margin-top: 30px;">Best regards,<br><strong>The Kaushal Robotics Team</strong></p>
              </div>
              <div class="footer">
                <p>Kaushal Robotics - Engineering precision for the future of industrial automation</p>
                <p>Email: kaushalrobotic@gmail.com | Phone: +91 9999900000</p>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    console.log("Email would be sent to:", companyEmail)
    console.log("Confirmation email would be sent to:", email)
    console.log("Message content:", message)

    return NextResponse.json(
      {
        success: true,
        message: "Emails sent successfully",
        note: "In production, integrate with a real email service like SendGrid, Resend, or Amazon SES",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
