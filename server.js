// server.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import emailjs from '@emailjs/browser';

dotenv.config();
const { 
  RECAPTCHA_SECRET_KEY, 
  INFO_EMAIL, 
  PORT = 3001,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PRIVATE_KEY
} = process.env;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, reason, message, recaptchaToken } = req.body;

  try {
    // 1. 验证 recaptcha
    const params = new URLSearchParams();
    params.append('secret', RECAPTCHA_SECRET_KEY);
    params.append('response', recaptchaToken);
    
    const verifyRes = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      { method: 'POST', body: params }
    );
    
    const verifyJson = await verifyRes.json();
    if (!verifyJson.success) {
      return res.status(400).json({ 
        error: 'reCAPTCHA verification failed', 
        details: verifyJson['error-codes'] 
      });
    }

    // 2. 验证通过后，发送邮件
    const templateParams = {
      to_email: INFO_EMAIL || 'info@mrdrivers.com.au',
      from_name: name,
      from_email: email,
      from_phone: phone,
      reason: reason,
      message: message,
    };

    const emailResult = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PRIVATE_KEY
    );

    if (emailResult.status === 200) {
      res.json({ success: true, message: 'Email sent successfully' });
    } else {
      throw new Error('Email sending failed');
    }

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      message: 'Failed to process request' 
    });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
