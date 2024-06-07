// pages/api/sendEmail.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  success: boolean;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'sdsenclave.dev@gmail.com',
        pass: 'bhmdjzuxtbeywnur',
      },
    });

    // Setup email data
    const textContent = (firstName: any, lastName: any, email: any, message: any) => {
      return `<div
  style="
    display: grid;
    justify-items: center;
    width: 80%;
    margin: auto;
    padding: 20px;
  
    border-radius: 10px;
   
  "
>
  <div
    style="
      border: 2px solid darkblue;
      border-radius: 10px;
      width: 100%;
      text-align: center;
      padding: 15px;
      margin: 0;
      background-color: #ffffff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      font-size: 16px;
      line-height: 1.6;
    "
  >
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  </div>
</div>`;
      // return `Enter this code to complete the reset${otp}`
    };
    const mailOptions = {
      from: 'sdsenclave.dev@gmail.com',
      to: 'enquiry@sdsenclave.com',
      subject: 'SDS Enclave',
      text: 'Please Find The Use Details',
      html: textContent(req.body.first_name, req.body.last_name, req.body.email, req.body.description),
    };

    try {
      // Send mail
      const info = await transporter.sendMail(mailOptions);
      // console.log('Message sent: %s', info.messageId);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      // console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
