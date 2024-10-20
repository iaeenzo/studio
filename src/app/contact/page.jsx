'use client'

import { useId, useState } from 'react'
import Link from 'next/link'

import { Border } from '../../components/Border'
import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import { FadeIn } from '../../components/FadeIn'
import { PageIntro } from '../../components/PageIntro'
import { SocialMedia } from '../../components/SocialMedia'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function ContactForm() {
  const [emailSent, setEmailSent] = useState(false)

  function sendEmail(e) {
    e.preventDefault()

    let form = e.target

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    })

    setEmailSent(true)
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={sendEmail}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Consulta de trabalhos
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            disabled={emailSent}
            label="Nome"
            name="name"
            autoComplete="name"
            required
          />
          <TextInput
            disabled={emailSent}
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            disabled={emailSent}
            label="Empresa"
            name="company"
            autoComplete="organization"
          />
          <TextInput
            disabled={emailSent}
            label="Telefone"
            type="tel"
            name="phone"
            autoComplete="tel"
            required
          />
          <TextInput
            disabled={emailSent}
            label="Mensagem"
            name="message"
            required
          />
        </div>
        <Button
          disabled={emailSent}
          type="submit"
          className="mt-8 disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-950"
        >
          {emailSent ? 'email enviado com sucesso!' : 'vamos trabalhar juntos'}
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Nossos Dados
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Se você tiver alguma dúvida ou precisar de mais informações, entre em
        contato conosco.
      </p>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Nosso Email
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[['Agência', 'inteligênciamrkt@gmail.com']].map(
            ([label, email]) => (
              <div key={email}>
                <dt className="font-semibold text-neutral-950">{label}</dt>
                <dd>
                  <Link
                    href={`mailto:${email}`}
                    className="text-neutral-600 hover:text-neutral-950"
                  >
                    {email}
                  </Link>
                </dd>
              </div>
            ),
          )}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Nos Acompanhe
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Fale Conosco" title="Vamos trabalhar juntos">
        <p>Mal podemos esperar para ouvir de você.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
