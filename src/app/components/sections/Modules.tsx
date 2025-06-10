import { Button } from '../Button'
import { GradientText } from '../GradientText'

const modules = [
  {
    title: 'Introdução ao Varejo Farmacêutico 4.0',
    description: 'Entenda o mercado atual, a legislação essencial e as novas oportunidades com a tecnologia.'
  },
  {
    title: 'Conhecimento de Produtos Farmacêuticos',
    description: 'Domine medicamentos (referência, genéricos, similares), dermocosméticos, suplementos e como usar a IA para comparar e entender interações.'
  },
  {
    title: 'Atendimento com IA na prática',
    description: 'Aprenda a criar prompts infalíveis para cada tipo de cliente, use fluxogramas de perguntas inteligentes e pratique simulações reais usando IA para indicações e vendas complementares.'
  },
  {
    title: 'Procedimentos Operacionais Inteligentes',
    description: 'Saiba tudo sobre interpretação de receitas, dispensação segura e gestão de estoque, incluindo como usar ferramentas (até planilhas!) para configurar alertas e otimizar processos.'
  },
  {
    title: 'Ferramentas e Tecnologias com IA',
    description: 'Descubra os principais sistemas de gestão, ferramentas digitais para estoque e, principalmente, como integrar a IA no seu dia a dia para otimizar tarefas e focar no cliente.'
  },
  {
    title: 'Desenvolvimento Pessoal e Profissional',
    description: 'Desenvolva habilidades de liderança, inteligência emocional, produtividade e crie seu plano de carreira no setor farmacêutico.'
  }
]

export function Modules() {
  return (
    <section className="py-16 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          <span className="text-white">Aprenda tudo sobre <GradientText className="font-extrabold">Farmácia, Atendimento e IA</GradientText></span>
          <span className="text-yellow-400 font-normal"> (em 6 módulos práticos)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-yellow-400/30 bg-black/80 shadow-xl overflow-hidden flex flex-col min-h-[260px] p-8 transition-transform duration-300 ease-out hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-200/80 via-yellow-400/80 to-yellow-200/60" />
              <span className="text-gray-300 text-sm font-semibold mt-4 mb-2">Módulo {index + 1}</span>
              <h3 className="text-2xl font-extrabold mb-4">
                <GradientText className="text-2xl md:text-3xl font-extrabold">
                  {module.title}
                </GradientText>
              </h3>
              <div className="flex-1 flex items-start">
                <p className="text-gray-300 text-base leading-relaxed">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <p className="text-lg mb-8 text-gray-300 max-w-4xl mx-auto">
            Nosso curso é uma jornada completa, do básico ao avançado, com um diferencial que você só encontra aqui: a aplicação prática da Inteligência Artificial. Em 6 módulos dinâmicos, você vai dominar desde a legislação e o conhecimento de produtos até as técnicas de atendimento e o uso estratégico da tecnologia. Damos um foco especial no Módulo 3, onde você aprenderá a usar a IA para interagir com o cliente de forma mais inteligente e eficaz. E como bônus, você leva o nosso &quot;Kit 200 Prompts Ouro&quot;, seu guia rápido para indicações e vendas complementares de sucesso.
          </p>
          <Button size="lg">
            Veja abaixo o que espera por você!
          </Button>
        </div>
      </div>
    </section>
  )
} 