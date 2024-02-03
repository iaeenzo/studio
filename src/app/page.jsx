import Image from 'next/image'

import { Container } from '../components/Container'
import { FadeIn, FadeInStagger } from '../components/FadeIn'
import { List, ListItem } from '../components/List'
import { SectionIntro } from '../components/SectionIntro'
import { StylizedImage } from '../components/StylizedImage'
import { Testimonial } from '../components/Testimonial'
import logoBrightPath from '../images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '../images/clients/family-fund/logo-light.svg'
import logoGreenLife from '../images/clients/green-life/logo-light.svg'
import logoHomeWork from '../images/clients/home-work/logo-light.svg'
import logoMailSmirk from '../images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '../images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '../images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '../images/clients/phobia/logo-light.svg'
import logoUnseal from '../images/clients/unseal/logo-light.svg'
import imageMobile from '../images/mobile.jpeg'
import logo1 from '../images/clients/family-fund/logomark-dark.svg'
import logo2 from '../images/clients/phobia/logomark-dark.svg'
import logo3 from '../images/clients/unseal/logomark-dark.svg'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function WhatsappIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      className="bi bi-whatsapp h-4 w-4"
    >
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />{' '}
    </svg>
  )
}

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Vamos trabalhar juntos
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <div className="mt-16 flex w-full items-center justify-center gap-8">
            <a
              href="https://wa.me/message/HUFRUR62PQUCJ1"
              className="flex items-center gap-2 rounded-full bg-white p-4 shadow-lg"
            >
              <WhatsappIcon />
              <span>Converse conosco</span>
            </a>
          </div>
        </FadeInStagger>
      </Container>
    </div>
  )
}

const caseStudies = [
  {
    client: 'Design',
    title: 'Comunique eficácia em uma arte',
    description:
      'O investimento em design é fundamental para empresas, pois proporciona diferenciação no mercado, fortalece a identidade da marca, melhora a experiência do cliente, comunica eficazmente valores e mensagens, aumenta a confiança dos consumidores e valoriza os produtos ou serviços oferecidos. Resumindo, o design não apenas embeleza, mas impulsiona o sucesso e a competitividade empresarial.',
    logo: logo1,
  },

  {
    client: 'Trafego Pago',
    title: 'Alcance resultados mais rápido',
    description:
      'Investir em tráfego pago oferece resultados rápidos e mensuráveis, controle sobre o orçamento e segmentação precisa, escalabilidade e potencial de retorno sobre o investimento significativo, tornando-se uma estratégia eficaz para aumentar a visibilidade, o engajamento e as vendas de uma empresa.',
    logo: logo2,
  },

  {
    client: 'Social Media',
    title: 'Confiabilidade que impulsiona',
    description:
      'Um social media na empresa é essencial para construir e manter uma presença online, aumentar a visibilidade da marca, gerenciar a reputação online, compreender o público-alvo e impulsionar o engajamento e a lealdade à marca, contribuindo para o crescimento dos negócios.',
    logo: logo3,
  },
]

function CardsInfo() {
  return (
    <>
      <SectionIntro
        title="Você estará sempre a frente!"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Potencialize seu negócio com a expertise de uma agência de marketing
          dedicada a impulsionar marcas como a sua para o sucesso. Desde
          estratégias personalizadas até campanhas criativas e resultados
          mensuráveis, estamos aqui para tornar sua visão uma realidade. Não
          deixe sua marca perdida na multidão. Junte-se a nós e destaque-se no
          mercado!
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.client} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <span>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </span>
                </h3>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Serviços"
        title="Nós te ajudamos a se destacar nas redes sociais, a expandir sua presença online e a conquistar novos clientes.
        "
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Descubra com a Andrômeda uma galáxia de possibilidades para
          transformar sua marca e conquistar o universo digital!
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageMobile}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Design">
              Nosso serviço de design é a chave para destacar sua marca. Com uma
              abordagem criativa e focada no cliente, transformamos conceitos em
              visualmente cativantes realidades. De logotipos a designs
              digitais, fazemos todos os tipos de design para contar a história
              da sua marca.
            </ListItem>
            <ListItem
              title="Trafego pago
"
            >
              Nosso serviço de tráfego pago é a solução para impulsionar sua
              presença online. Com estratégias especializadas em publicidade
              digital, alcançamos seu público-alvo com eficiência, gerando
              resultados tangíveis. Maximizamos seu retorno sobre o
              investimento, direcionando tráfego qualificado para seu site ou
              campanhas específicas.
            </ListItem>
            <ListItem
              title="Social media
"
            >
              Nosso serviço de social media é a chave para uma presença online
              impactante. Com estratégias personalizadas, criamos conteúdo
              envolvente, gerenciamos suas plataformas e cultivamos uma
              comunidade fiel em torno da sua marca. Do planejamento à execução,
              estamos aqui para impulsionar sua marca nas redes sociais.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default function Home() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Transforme sua visão em realidade. Imagine uma Galáxia de
            possibilidades.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Somos uma agência de marketing que opera na confluência entre
            criatividade e inovação tecnológica. Nossa equipe está
            constantemente mergulhada nesse dinâmico cruzamento, resultando em
            soluções que não apenas captam a atenção, mas também deixam uma
            marca duradoura.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CardsInfo />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Wilian Rodrigues', logo: logoPhobiaDark }}
      >
        A agência de marketing superou nossas expectativas em todos os aspectos.
        Com sua abordagem profissional, criativa e focada em resultados, eles
        não apenas entenderam nossas necessidades, mas também as superaram.
        Estamos muito satisfeitos com os resultados e recomendamos seus serviços
        sem hesitação.
      </Testimonial>

      <Services />
    </>
  )
}
