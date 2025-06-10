import { Button } from '../Button'
import { Card } from '../Card'
import { GradientText } from '../GradientText'

const modules = [
  {
    title: '1. Introdução ao Varejo Farmacêutico 4.0',
    description: 'Entenda o mercado atual, a legislação essencial e as novas oportunidades com a tecnologia.'
  },
  {
    title: '2. Conhecimento de Produtos Farmacêuticos',
    description: 'Domine medicamentos (referência, genéricos, similares), dermocosméticos, suplementos e como usar a IA para comparar e entender interações.'
  },
  {
    title: '3. Atendimento com IA na prática',
    description: 'Aprenda a criar prompts infalíveis para cada tipo de cliente, use fluxogramas de perguntas inteligentes e pratique simulações reais usando IA para indicações e vendas complementares.'
  },
  {
    title: '4. Procedimentos Operacionais Inteligentes',
    description: 'Saiba tudo sobre interpretação de receitas, dispensação segura e gestão de estoque, incluindo como usar ferramentas (até planilhas!) para configurar alertas e otimizar processos.'
  },
  {
    title: '5. Ferramentas e Tecnologias com IA',
    description: 'Descubra os principais sistemas de gestão, ferramentas digitais para estoque e, principalmente, como integrar a IA no seu dia a dia para otimizar tarefas e focar no cliente.'
  },
  {
    title: '6. Desenvolvimento Pessoal e Profissional',
    description: 'Desenvolva habilidades de liderança, inteligência emocional, produtividade e crie seu plano de carreira no setor farmacêutico.'
  }
]

export function Modules() {
  return (
    <section className="py-16 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          APRENDA TUDO SOBRE FARMÁCIA, ATENDIMENTO E IA EM{' '}
          <GradientText>6 MÓDULOS PRÁTICOS</GradientText>
        </h2>

        <div className="space-y-8">
          {modules.map((module, index) => (
            <Card key={index}>
              <GradientText className="text-xl font-bold mb-4">
                {module.title}
              </GradientText>
              <p className="text-gray-300">
                {module.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg mb-8 text-gray-300 max-w-4xl mx-auto">
            Nosso curso é uma jornada completa, do básico ao avançado, com um diferencial que você só encontra aqui: 
            a aplicação prática da Inteligência Artificial. Em 6 módulos dinâmicos, você vai dominar desde a legislação 
            e o conhecimento de produtos até as técnicas de atendimento e o uso estratégico da tecnologia. Damos um foco 
            especial no Módulo 3, onde você aprenderá a usar a IA para interagir com o cliente de forma mais inteligente 
            e eficaz. E como bônus, você leva o nosso &apos;Kit 200 Prompts Ouro&apos;, seu guia rápido para indicações e vendas 
            complementares de sucesso.
          </p>
          
          <Button size="lg">
            Veja abaixo o que espera por você!
          </Button>
        </div>
      </div>
    </section>
  )
} 