import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { to, subject, html, text } = body;

    // Get runtime config
    const config = useRuntimeConfig();

    // Validate required fields
    if (!to || !subject || !html) {
      throw createError({
        statusCode: 400,
        statusMessage: "Missing required fields: to, subject, html",
      });
    }

    // Check if email credentials are configured
    const emailUser = config.emailUser;
    const emailPass = config.emailPass;
    const siteName = config.public.siteName;

    console.log("Email configuration:", {
      emailUser: emailUser ? `${emailUser.substring(0, 3)}***` : "not set",
      emailPass: emailPass ? `${emailPass.substring(0, 3)}***` : "not set",
      siteName: siteName,
    });

    // If using default credentials, simulate email sending for development
    if (emailPass === "your-app-password-here") {
      console.log("Email service not configured. Simulating email send...");
      console.log("Email would be sent to:", to);
      console.log("Subject:", subject);
      console.log("HTML Content:", html);

      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return {
        success: true,
        message:
          "Email simulated successfully (configure EMAIL_PASS to send real emails)",
        emailId: `simulated_${Date.now()}`,
      };
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Email configuration
    const mailOptions = {
      from: `"${siteName}" <${emailUser}>`,
      to: to,
      subject: subject,
      html: html,
      text: text || html.replace(/<[^>]*>/g, ""), // Strip HTML tags for text version
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", info.messageId);

    return {
      success: true,
      message: "Email sent successfully",
      emailId: info.messageId,
    };
  } catch (error: any) {
    console.error("Error sending email:", error);
    console.error("Error details:", {
      message: error.message,
      code: error.code,
      response: error.response,
    });

    // If it's a Gmail authentication error, provide helpful message
    if (error.message && error.message.includes("authentication")) {
      throw createError({
        statusCode: 500,
        statusMessage:
          "Email service authentication failed. Please check email credentials.",
      });
    }

    // If it's a Gmail app password error
    if (error.message && error.message.includes("Invalid login")) {
      throw createError({
        statusCode: 500,
        statusMessage:
          "Invalid email credentials. Please check your Gmail app password.",
      });
    }

    throw createError({
      statusCode: 500,
      statusMessage: `Failed to send email: ${
        error.message || "Unknown error"
      }`,
    });
  }
});
