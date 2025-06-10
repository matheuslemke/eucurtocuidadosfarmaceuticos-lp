import { Hero } from './components/sections/Hero'
import { Features } from './components/sections/Features'
import { Modules } from './components/sections/Modules'
import { Team } from './components/sections/Team'
import { Testimonials } from './components/sections/Testimonials'
import { Button } from './components/Button'
import { GradientText } from './components/GradientText'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />

      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg leading-relaxed text-gray-300 mb-8">
            Você quer se destacar no balcão da farmácia, oferecer um atendimento que encanta e, claro, aumentar suas vendas 
            de forma ética e inteligente? O futuro do varejo farmacêutico chegou, e ele usa Inteligência Artificial! Nosso 
            curso te ensina a dominar a IA para ter o conhecimento dos 200 produtos mais vendidos na palma da sua mão, saber 
            exatamente o que indicar como complemento (já pensou em sugerir Vitamina B12 para quem compra Puran T4, com base 
            científica?) e transformar cada interação em uma oportunidade de ajudar o cliente e aumentar seu ticket médio. 
            Tudo isso com a flexibilidade do EAD e acesso a templates prontos que vão acelerar seus resultados.
          </p>
          
          <Button>
            Baixe agora um exemplo do nosso Prompt Ouro e veja a IA em ação!
          </Button>
        </div>
      </section>

      <section className="py-16 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <GradientText>O Segredo dos Balconistas Que Mais Vendem!</GradientText>
          </h2>
          <div className="bg-gray-800 rounded-lg p-8 mb-8">
            <p className="text-gray-400 text-lg">[Vídeo]</p>
          </div>
        </div>
      </section>

      <Features />

      <section className="py-16 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <GradientText>Mostrando o Caminho da Transformação</GradientText>
          </h2>
          <div className="bg-gray-800 rounded-lg p-12 mb-8">
            <p className="text-gray-400 text-lg">
              [ALGUMA ILUSTRAÇÃO, ARTE, ÍCONE OU VÍDEO QUE ILUSTRE INTELIGENCIA ARTIFICAL, CURSO, CAMINHO, JORNADA ETC.]
            </p>
          </div>
        </div>
      </section>

      <Modules />

      <section className="py-16 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <GradientText>Bônus exclusivo</GradientText>
          </h2>
          
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-8 rounded-lg text-black mb-8">
            <h3 className="text-2xl font-bold mb-4">Kit 200 Prompts Ouro</h3>
            <p className="text-lg">
              Templates editáveis e validados para os medicamentos e suplementos mais lucrativos das drogarias brasileiras. 
              Sua &apos;cola&apos; inteligente para vender mais!
            </p>
          </div>
        </div>
      </section>

      <Team />
      <Testimonials />
    </div>
  )
}

