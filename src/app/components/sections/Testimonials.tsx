import { GradientText } from '../GradientText'
import { Button } from '../Button'
import { Card } from '../Card'

const testimonials = [
  {
    quote: 'Com os prompts prontos do curso, minha taxa de vendas complementares subiu de 15% para 62% em um mês! Agora me sinto muito mais segura para indicar produtos',
    author: 'Maria Lopes, Balconista em Porto Alegre-RS'
  },
  {
    quote: 'A aula sobre como usar a IA para saber interações medicamentosas em segundos mudou completamente minha forma de trabalhar no balcão! Atendimento mais rápido e seguro.',
    author: 'João Pereira, Balconista em São Paulo-SP'
  },
  {
    quote: 'Minha equipe de telemarketing está usando os modelos de script com IA e o resultado é incrível! As vendas por telefone dispararam porque eles conseguem dar informações precisas na hora.',
    author: 'Ana Régis, Gerente de Farmácia no Rio - RJ'
  },
  {
    quote: 'Nunca imaginei que usar IA seria tão fácil e prático. Os prompts são a &apos;mão na roda&apos; que eu precisava para aumentar meu ticket médio sem complicação.',
    author: 'Carlos Almeida, Balconista em Montes Claros - MG'
  }
]

export function Testimonials() {
  return (
    <section className="py-16 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <GradientText>
            Veja quem já está vendendo mais e se destacando com a IA!
          </GradientText>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} variant="testimonial">
              <p className="text-gray-300 mb-4 italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="text-yellow-400 font-bold">
                {testimonial.author}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg mb-8 text-gray-300 max-w-4xl mx-auto">
            Não acredite apenas na nossa palavra. Veja o que profissionais como você estão conquistando ao aplicar as 
            técnicas de IA e usar o Kit 200 Prompts Ouro no dia a dia. Eles já estão vendendo mais, atendendo melhor 
            e se sentindo mais confiantes.
          </p>
          
          <Button size="lg">
            Seja o próximo caso de sucesso!
          </Button>
        </div>
      </div>
    </section>
  )
} 