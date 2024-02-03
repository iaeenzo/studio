import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const data = await request.formData()
  const name = data.get('name')
  const company = data.get('company')
  const email = data.get('email')
  const message = data.get('message')

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: email.toString(),
    to: process.env.EMAIL_USER,
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
      JSON.stringify({ message: 'email failed to send' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    )
  }
}
