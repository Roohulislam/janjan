const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ==========================================
// CORS
// ==========================================
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

// ==========================================
// TEST API
// ==========================================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "SaudiBuild backend API is running",
  });
});

// ==========================================
// CONTACT FORM
// ==========================================
app.post("/api/send", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // ------------------------------------------
    // Validate form
    // ------------------------------------------
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: "Please fill in all required fields.",
      });
    }

    // ------------------------------------------
    // Check environment variables
    // ------------------------------------------
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.CONTACT_EMAIL
    ) {
      console.error("Missing email environment variables.");

      return res.status(500).json({
        success: false,
        error: "Email server configuration is incomplete.",
      });
    }

    // ------------------------------------------
    // Gmail SMTP transporter
    // ------------------------------------------
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

      connectionTimeout: 20000,
      greetingTimeout: 20000,
      socketTimeout: 30000,
    });

    // ------------------------------------------
    // Verify Gmail SMTP connection
    // ------------------------------------------
    await transporter.verify();

    console.log("Gmail SMTP connection is ready.");

    // ==========================================
    // EMAIL TO COMPANY
    // ==========================================
    const companyEmail = {
      from: `"SaudiBuild Website" <${process.env.EMAIL_USER}>`,

      to: process.env.CONTACT_EMAIL,

      replyTo: email,

      subject: `New Website Contact: ${escapeHtml(subject)}`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 700px;
          margin: 0 auto;
          background: #ffffff;
        ">

          <div style="
            background: #0284c7;
            color: #ffffff;
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
            border: 1px solid #dddddd;
            border-top: none;
          ">

            <h3 style="color: #333333;">
              Customer Information
            </h3>

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

            <h3 style="color: #333333;">
              Message
            </h3>

            <div style="
              background: #f5f5f5;
              padding: 15px;
              border-radius: 8px;
              white-space: pre-line;
              color: #333333;
            ">
              ${escapeHtml(message)}
            </div>

            <hr style="margin: 25px 0;" />

            <p style="
              color: #777777;
              font-size: 13px;
            ">
              This message was submitted through the
              SaudiBuild Construction website.
            </p>

          </div>

        </div>
      `,
    };

    // Send message to company
    await transporter.sendMail(companyEmail);

    console.log("Company email sent successfully.");

    // ==========================================
    // CONFIRMATION EMAIL TO CUSTOMER
    // ==========================================
    const customerEmail = {
      from: `"SaudiBuild Construction" <${process.env.EMAIL_USER}>`,

      to: email,

      subject: "We received your message - SaudiBuild Construction",

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: 0 auto;
        ">

          <h2 style="color: #0284c7;">
            Thank You, ${escapeHtml(name)}
          </h2>

          <p>
            Thank you for contacting
            <strong>SaudiBuild Construction</strong>.
          </p>

          <p>
            We have received your message and our team
            will contact you soon.
          </p>

          <hr />

          <p>
            <strong>Your Subject:</strong>
            ${escapeHtml(subject)}
          </p>

          <p style="color: #666666;">
            SaudiBuild Construction<br />
            Jeddah, Saudi Arabia
          </p>

        </div>
      `,
    };

    // Send confirmation to customer
    await transporter.sendMail(customerEmail);

    console.log("Customer confirmation email sent successfully.");

    // ==========================================
    // SUCCESS RESPONSE
    // ==========================================
    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    // ==========================================
    // ERROR HANDLING
    // ==========================================
    console.error("=================================");
    console.error("EMAIL ERROR");
    console.error("Code:", error.code);
    console.error("Command:", error.command);
    console.error("Message:", error.message);
    console.error("=================================");

    return res.status(500).json({
      success: false,
      error:
        "Unable to send message. Please try again later.",
    });
  }
});

// ==========================================
// HTML ESCAPE
// ==========================================
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ==========================================
// START SERVER
// ==========================================
app.listen(PORT, () => {
  console.log(
    `SaudiBuild backend running on port ${PORT}`
  );
});