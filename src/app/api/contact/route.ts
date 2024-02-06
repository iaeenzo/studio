import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { name, company, email, message } = await request.json()

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST as string,
    port: process.env.SMTP_PORT as unknown as number,
    secure: true,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  const mailOptions = {
    from: email.toString(),
    to: process.env.SMTP_EMAIL,
    subject: `Nova mensagem de ${name.toString()} da empresa ${company.toString()}`,
    text: message.toString(),
  }

  try {
    await transporter.sendMail(mailOptions)
    return new NextResponse(JSON.stringify({ message: 'email sent' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error(error)
    return new NextResponse(
      JSON.stringify({ message: "couldn't send email" }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}
