import 'dotenv/config';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import nodemailer from 'nodemailer';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Middleware to parse JSON bodies
app.use(express.json());

// API routes - MUST come before static file serving
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Check if SMTP credentials are configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured');
      return res.status(500).json({ 
        error: 'Email service not configured. Please set SMTP_USER and SMTP_PASS in .env file.' 
      });
    }

    // Create transporter using environment variables or default SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || email,
      to: 'blake_seigler@unc.edu',
      subject: `Contact Form Submission from ${name}${company ? ` (${company})` : ''}`,
      text: `
New contact form submission:

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}

Message:
${message}
      `.trim(),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Serve built React app (after API routes)
app.use(express.static(join(__dirname, '../build')));

// Optionally serve legacy static assets if needed
// app.use('/static', express.static(join(__dirname, '../static')));

// Catch-all handler for React Router
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../build/index.html'));
});

// For local development - start server if run directly
const isRunningDirectly = import.meta.url === `file://${process.argv[1]}` || 
                          process.argv[1]?.includes('api/index.js');

if (isRunningDirectly) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`\n🚀 Server running at http://localhost:${PORT}`);
    console.log(`📦 Serving React app from: ${join(__dirname, '../build')}\n`);
  });
}

export default app; // For Vercel serverless function

