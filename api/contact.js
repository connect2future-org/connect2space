import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, service, date, message } = req.body;

  // Basic validation
  if (!name || !phone || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Configure Nodemailer (use environment variables)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: 'contact@connect2space.in', // change to your inbox
    subject: `New Enquiry from ${name}`,
    text: `
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Service: ${service || 'Not specified'}
      Date: ${date || 'Not specified'}
      Message: ${message}
    `,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service:</strong> ${service || 'Not specified'}</p>
      <p><strong>Date:</strong> ${date || 'Not specified'}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    // Optional: store in MongoDB
    // if (process.env.MONGODB_URI) { ... }
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}