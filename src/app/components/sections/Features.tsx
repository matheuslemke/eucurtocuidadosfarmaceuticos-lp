import { Button } from '../Button'
import { Card } from '../Card'

const features = [
  {
    title: 'KIT 200 PROMPTS OURO EXCLUSIVO',
    description: 'Acesso imediato a templates prontos para os medicamentos e suplementos mais lucrativos. Saiba exatamente o que dizer e sugerir para cada cliente, validado por farmacêuticos!'
  },
  {
    title: 'DOMINE O CONHECIMENTO EM SEGUNDOS',
    description: 'Use a IA para extrair informações cruciais sobre produtos, interações e cuidados em menos de 30 segundos, mesmo para produtos que você nunca viu!'
  },
  {
    title: 'VENDA CRUZADA ÉTICA E EFICAZ',
    description: 'Aprenda a identificar oportunidades de vendas complementares baseadas em evidências científicas e nas necessidades reais do cliente, aumentando seu ticket médio de forma responsável.'
  },
  {
    title: 'ATENDIMENTO ESPECIALIZADO',
    description: 'Aplique as técnicas de IA para otimizar atendimentos no balcão e por telemarketing, oferecendo consultas rápidas e precisas que fidelizam o cliente.'
  },
  {
    title: 'FLEXIBILIDADE TOTAL (EAD)',
    description: 'Estude onde e quando quiser, no seu ritmo, com aulas gravadas de alta qualidade e materiais complementares para fixar o aprendizado.'
  },
  {
    title: 'COMUNIDADE EXCLUSIVA',
    description: 'Faça parte de um grupo VIP para trocar experiências, tirar dúvidas e fazer networking com outros profissionais que estão transformando suas carreiras.'
  },
  {
    title: 'CERTIFICAÇÃO RECONHECIDA',
    description: 'Receba um certificado digital que comprova suas novas habilidades em IA e atendimento farmacêutico, valorizando seu currículo.'
  }
]

export function Features() {
  return (
    <section className="py-16 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          PARE DE PERDER VENDAS!
        </h2>
        <p className="text-xl text-center mb-12 text-yellow-400">
          VEJA COMO NOSSOS 200 PROMPTS PRONTOS REVOLUCIONAM SEU ATENDIMENTO:
        </p>
        
        <p className="text-lg text-center mb-12 text-gray-300 max-w-4xl mx-auto">
          Enquanto outros cursos ensinam apenas o básico, nós te preparamos para o futuro do varejo farmacêutico, 
          onde o conhecimento rápido e as indicações estratégicas são a chave para o sucesso. Com nosso método e o 
          poder da IA, você estará à frente!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} variant="feature">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg mb-8 text-gray-300 max-w-4xl mx-auto">
            No nosso curso, você não aprende apenas sobre produtos e vendas. Nós te entregamos a ferramenta mais poderosa 
            do mercado: o domínio da Inteligência Artificial aplicada ao seu dia a dia! Imagine ter acesso a 200 &apos;atalhos&apos; 
            (nossos Prompts Ouro) que te dizem exatamente o que sugerir para quem compra Puran T4, Omeprazol, ou qualquer 
            outro produto campeão de vendas. Você vai parar de &apos;chutar&apos; indicações e começar a vender com confiança, base 
            científica e resultados reais. Além disso, estude no seu tempo, tenha suporte e faça parte de uma comunidade 
            que te impulsiona.
          </p>
          
          <Button size="lg">
            Chega de perder oportunidades!
          </Button>
        </div>
      </div>
    </section>
  )
} 