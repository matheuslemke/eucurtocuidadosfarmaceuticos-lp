import { Button } from '../Button'

const features = [
  {
    title: 'Kit 200 Prompts Ouro',
    description: 'Acesso imediato a templates prontos para os medicamentos e suplementos mais lucrativos. Saiba exatamente o que dizer e sugerir para cada cliente, validado por farmacêuticos!'
  },
  {
    title: 'Domine o conhecimento em segundos',
    description: 'Use a IA para extrair informações cruciais sobre produtos, interações e cuidados em menos de 30 segundos, mesmo para produtos que você nunca viu!'
  },
  {
    title: 'Venda cruzada ética e eficaz',
    description: 'Aprenda a identificar oportunidades de vendas complementares baseadas em evidências científicas e nas necessidades reais do cliente, aumentando seu ticket médio de forma responsável.'
  },
  {
    title: 'Atendimento especializado',
    description: 'Aplique as técnicas de IA para otimizar atendimentos no balcão e por telemarketing, oferecendo consultas rápidas e precisas que fidelizam o cliente.'
  },
  {
    title: 'Flexibilidade total (EAD)',
    description: 'Estude onde e quando quiser, no seu ritmo, com aulas gravadas de alta qualidade e materiais complementares para fixar o aprendizado.'
  },
  {
    title: 'Comunidade exclusiva',
    description: 'Faça parte de um grupo VIP para trocar experiências, tirar dúvidas e fazer networking com outros profissionais que estão transformando suas carreiras.'
  },
  {
    title: 'Certificação reconhecida',
    description: 'Receba um certificado digital que comprova suas novas habilidades em IA e atendimento farmacêutico, valorizando seu currículo.'
  }
]

function VerifiedIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <circle cx="16" cy="16" r="15" fill="#18181b" stroke="#fde047" strokeWidth="2" />
      <path d="M10.5 16.5L14 20L21.5 12.5" stroke="#fde047" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Features() {
  return (
    <section className="py-16 px-6 bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Para quem <span className="font-extrabold">é</span>
          </span> esta Imersão?
        </h2>
        <div className="rounded-2xl border border-gray-700 bg-black/60 p-6 md:p-10 flex flex-col gap-0 shadow-lg">
          {features.map((feature, idx) => (
            <div key={feature.title} className="flex flex-col items-center gap-4 py-6 md:py-8 px-2 md:px-6 w-full">
              <div className="flex gap-4 items-center">
                <VerifiedIcon />
                <span className="text-lg md:text-xl font-medium bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">{feature.title}</span>
              </div>
              <span className="text-md md:text-lg text-gray-100 font-light">{feature.description}</span>
              {idx < features.length - 1 && (
                <div className="absolute left-10 right-10 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" style={{top: '100%'}} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 