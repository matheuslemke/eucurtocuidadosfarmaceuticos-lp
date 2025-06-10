import { Button } from '../Button'
import { Card } from '../Card'
import { GradientText } from '../GradientText'
import Image from 'next/image'

const team = [
  {
    title: 'Cris Zanol',
    job: 'Farmacêutica e Treinadora',
    description: 'Com mais de 15 anos de experiência no setor farmacêutico e visão inovadora, Cris traz o conhecimento técnico e a validação prática para o uso da IA no balcão. Ela viu a IA revolucionar seu próprio negócio e compartilha o caminho com você.',
    image: null
  },
  {
    title: 'Cleverson Alves',
    job: 'Designer e Treinador em Marketing',
    description: 'Especialista em estratégias visuais e de vendas de alta performance, Cleverson desenvolveu a metodologia de aplicação da IA focada em resultados de vendas e atendimento, com cases de sucesso comprovados no mercado farmacêutico.',
    image: '/cleverson.jpeg'
  },
  {
    title: 'Lemke',
    job: 'Agência de Desenvolvimento',
    description: 'Uma equipe dedicada a criar experiências de aprendizado online fluidas, modernas e eficazes, garantindo que sua jornada no curso seja a melhor possível.',
    image: '/lemke.jpg'
  },
  {
    title: 'Vanderlei Freitas',
    job: 'Gestor do Projeto',
    description: 'Mais de 25 anos de experiência no mercado farmacêutico, tendo atuado em diversas áreas, desde atendente até sócio-proprietário de uma rede de drogarias.',
    image: '/vanderlei.jpeg'
  }
]

export function Team() {
  return (
    <section className="py-16 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <GradientText>Conheça nossa equipe de especialistas</GradientText>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className='flex flex-col'>
              <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg bg-gray-800">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`${member.title} - ${member.job}`}
                    fill
                    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-600">
                    <span className="text-4xl">👤</span>
                  </div>
                )}
              </div>
              <GradientText className="text-xl font-bold mb-2">
                {member.title}
              </GradientText>
              <span className="text-md italic font-extrabold mb-2 text-gray-50">
                {member.job}
              </span>
              <p className="text-gray-300 font-light">
                {member.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg mb-8 text-gray-300 max-w-4xl mx-auto">
            Você estará aprendendo com quem realmente entende do assunto e vive o dia a dia do varejo farmacêutico e 
            das estratégias de marketing digital. Cris Zanol traz a base técnica e a visão de quem já aplicou a IA com 
            sucesso. Cleverson Alves adiciona a expertise em vendas e marketing para garantir que você não apenas aprenda, 
            mas venda mais. E a agência Lemke assegura que sua experiência de estudo seja impecável.
          </p>
          
          <Button size="lg">
            Confie em quem tem resultados!
          </Button>
        </div>
      </div>
    </section>
  )
} 