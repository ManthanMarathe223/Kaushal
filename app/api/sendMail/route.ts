import nodemailer from "nodemailer"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // ===============================
    // 📧 1. Send email to Company
    // ===============================
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.COMPANY_EMAIL,
      subject: `📩 New Inquiry from ${name} (${email})`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <div style="background: linear-gradient(90deg, #00c4cc, #007bff); color: white; padding: 15px 25px;">
              <h2 style="margin: 0;">New Contact Form Submission</h2>
            </div>
            <div style="padding: 25px; color: #333;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#007bff;">${email}</a></p>
              <p><strong>Message:</strong></p>
              <div style="background:#f7f7f7; padding:15px; border-radius:8px; border:1px solid #eee;">
                ${message.replace(/\n/g, "<br/>")}
              </div>
              <hr style="margin:25px 0; border:none; border-top:1px solid #ddd;">
              <p style="font-size:14px; color:#555;">
                📞 If needed, contact the sender directly at 
                <a href="mailto:${email}" style="color:#007bff;">${email}</a>.
              </p>
            </div>
            <div style="background:#f1f1f1; text-align:center; padding:10px; font-size:12px; color:#777;">
              © ${new Date().getFullYear()} Kaushal Robotics | Internal Use Only
            </div>
          </div>
        </div>
      `,
    })

    // ===============================
    // 🤖 2. Send confirmation to User
    // ===============================
    await transporter.sendMail({
      from: process.env.COMPANY_EMAIL,
      to: email,
      subject: "Kaushal Robotics — We’ve received your message!",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <div style="background: linear-gradient(90deg, #007bff, #00c4cc); color: white; padding: 15px 25px;">
              <h2 style="margin: 0;">Kaushal Robotics</h2>
            </div>
            <div style="padding: 25px; color: #333;">
              <p>Hi <strong>${name}</strong>,</p>
              <p>Thank you for reaching out to <strong>Kaushal Robotics</strong>! We’ve received your message and our team will get back to you shortly.</p>
              <p>If your inquiry is urgent, please contact us directly at:</p>
              <p style="margin: 10px 0;">
                📞 <a href="tel:+919172916266" style="color:#007bff; text-decoration:none;">+91 91729 16266</a><br/>
                ✉️ <a href="mailto:kaushalrobotic@gmail.com" style="color:#007bff; text-decoration:none;">kaushalrobotic@gmail.com</a>
              </p>
              <p>We appreciate your interest and will be in touch soon.</p>
              <p>Warm regards,<br/><strong>The Kaushal Robotics Team</strong></p>
            </div>
            <div style="background:#f1f1f1; text-align:center; padding:10px; font-size:12px; color:#777;">
              © ${new Date().getFullYear()} Kaushal Robotics. All rights reserved.
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("sendMail error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
