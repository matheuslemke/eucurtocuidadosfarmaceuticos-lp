import { Button } from '../Button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
            [LOGO]
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Transforme seu atendimento em drogarias com o poder da{' '}
          <span className="text-yellow-400">inteligência artificial!</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-300">
          Aprenda a usar Inteligência Artificial para saber TUDO sobre os 200 medicamentos mais vendidos em segundos, 
          identificar complementos ideais (como Puran T4 + Vitamina B12) e transformar atendimentos básicos em consultas 
          especializadas. Tudo 100% online, no seu ritmo, com acesso ao exclusivo Kit 200 Prompts Ouro.
        </p>
        
        <Button size="lg">
          QUERO APRENDER IA E VENDER MAIS AGORA
        </Button>
      </div>
    </section>
  )
} 