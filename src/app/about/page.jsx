import { SectionIntro } from '../../components/SectionIntro'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Sobre Nós"
        title="Seja bem-vindo à Andromeda."
        invert
      >
        <p>
          Somos uma agência de marketing criada no início de 2024 por fundadores
          apaixonados que têm atuado no ramo desde 2018. Nossa jornada é
          impulsionada pela busca incessante pela excelência, combinando
          experiência sólida com uma visão inovadora para oferecer soluções de
          marketing de ponta. Na Andromeda, mergulhamos fundo nas estrelas do
          universo digital, criando estratégias personalizadas que elevam a
          presença e o impacto das marcas que atendemos. Com uma abordagem
          centrada no cliente e uma paixão pelo crescimento, estamos aqui para
          levar sua marca a novos patamares de sucesso cósmico.
        </p>
      </SectionIntro>
    </div>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default function About() {
  return <Culture />
}
