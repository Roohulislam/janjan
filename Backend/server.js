const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://your-vercel-domain.vercel.app",
      "https://www.saudibuildconstruction.com",
      "https://saudibuildconstruction.com",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SaudiBuild backend API is running",
  });
});

// Contact form API
app.post("/api/send", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: "Please fill in all required fields.",
      });
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email sent to company
    const mailOptions = {
      from: `"SaudiBuild Website" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,

      replyTo: email,

      subject: `New Website Contact: ${subject}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto;">

          <div style="
            background: #0284c7;
            color: white;
            padding: 25px;
            border-radius: 10px 10px 0 0;
          ">
            <h2 style="margin: 0;">
              New Contact Form Message
            </h2>
            <p style="margin: 8px 0 0;">
              SaudiBuild Construction Website
            </p>
          </div>

          <div style="
            padding: 25px;
            border: 1px solid #ddd;
            border-top: none;
          ">

            <h3>Customer Information</h3>

            <p>
              <strong>Name:</strong>
              ${escapeHtml(name)}
            </p>

            <p>
              <strong>Email:</strong>
              ${escapeHtml(email)}
            </p>

            <p>
              <strong>Subject:</strong>
              ${escapeHtml(subject)}
            </p>

            <h3>Message</h3>

            <div style="
              background: #f5f5f5;
              padding: 15px;
              border-radius: 8px;
              white-space: pre-line;
            ">
              ${escapeHtml(message)}
            </div>

            <hr style="margin: 25px 0;" />

            <p style="color: #666; font-size: 13px;">
              This message was submitted through the SaudiBuild Construction website.
            </p>

          </div>

        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Optional confirmation email to customer
    const confirmationEmail = {
      from: `"SaudiBuild Construction" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your message - SaudiBuild Construction",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">

          <h2 style="color: #0284c7;">
            Thank You, ${escapeHtml(name)}
          </h2>

          <p>
            Thank you for contacting SaudiBuild Construction.
          </p>

          <p>
            We have received your message and our team will contact you soon.
          </p>

          <hr />

          <p>
            <strong>Your Subject:</strong>
            ${escapeHtml(subject)}
          </p>

          <p style="color: #666;">
            SaudiBuild Construction<br />
            Jeddah, Saudi Arabia
          </p>

        </div>
      `,
    };

    await transporter.sendMail(confirmationEmail);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Email error:", error);

    return res.status(500).json({
      success: false,
      error: "Unable to send message. Please try again later.",
    });
  }
});

// Basic HTML escaping
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

app.listen(PORT, () => {
  console.log(`SaudiBuild backend running on port ${PORT}`);
});