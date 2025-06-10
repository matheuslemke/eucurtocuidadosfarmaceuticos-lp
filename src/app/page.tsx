export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
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
          
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            QUERO APRENDER IA E VENDER MAIS AGORA
          </button>
        </div>
      </section>

      {/* Introduction Section */}
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
          
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full transition-all duration-300">
            Baixe agora um exemplo do nosso Prompt Ouro e veja a IA em ação!
          </button>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            O Segredo dos Balconistas Que Mais Vendem!
          </h2>
          <div className="bg-gray-800 rounded-lg p-8 mb-8">
            <p className="text-gray-400 text-lg">[Vídeo]</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
            <div className="bg-black p-6 rounded-lg border border-yellow-400/20">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                KIT 200 PROMPTS OURO EXCLUSIVO
              </h3>
              <p className="text-gray-300">
                Acesso imediato a templates prontos para os medicamentos e suplementos mais lucrativos. 
                Saiba exatamente o que dizer e sugerir para cada cliente, validado por farmacêuticos!
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-yellow-400/20">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                DOMINE O CONHECIMENTO EM SEGUNDOS
              </h3>
              <p className="text-gray-300">
                Use a IA para extrair informações cruciais sobre produtos, interações e cuidados em menos de 30 segundos, 
                mesmo para produtos que você nunca viu!
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-yellow-400/20">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                VENDA CRUZADA ÉTICA E EFICAZ
              </h3>
              <p className="text-gray-300">
                Aprenda a identificar oportunidades de vendas complementares baseadas em evidências científicas e nas 
                necessidades reais do cliente, aumentando seu ticket médio de forma responsável.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-yellow-400/20">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                ATENDIMENTO ESPECIALIZADO
              </h3>
              <p className="text-gray-300">
                Aplique as técnicas de IA para otimizar atendimentos no balcão e por telemarketing, oferecendo consultas 
                rápidas e precisas que fidelizam o cliente.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-yellow-400/20">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                FLEXIBILIDADE TOTAL (EAD)
              </h3>
              <p className="text-gray-300">
                Estude onde e quando quiser, no seu ritmo, com aulas gravadas de alta qualidade e materiais complementares 
                para fixar o aprendizado.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-yellow-400/20">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                COMUNIDADE EXCLUSIVA
              </h3>
              <p className="text-gray-300">
                Faça parte de um grupo VIP para trocar experiências, tirar dúvidas e fazer networking com outros 
                profissionais que estão transformando suas carreiras.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-yellow-400/20">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                CERTIFICAÇÃO RECONHECIDA
              </h3>
              <p className="text-gray-300">
                Receba um certificado digital que comprova suas novas habilidades em IA e atendimento farmacêutico, 
                valorizando seu currículo.
              </p>
            </div>
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
            
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Chega de perder oportunidades!
            </button>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-16 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Mostrando o Caminho da Transformação
          </h2>
          <div className="bg-gray-800 rounded-lg p-12 mb-8">
            <p className="text-gray-400 text-lg">
              [ALGUMA ILUSTRAÇÃO, ARTE, ÍCONE OU VÍDEO QUE ILUSTRE INTELIGENCIA ARTIFICAL, CURSO, CAMINHO, JORNADA ETC.]
            </p>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            APRENDA TUDO SOBRE FARMÁCIA, ATENDIMENTO E IA EM{' '}
            <span className="text-yellow-400">6 MÓDULOS PRÁTICOS</span>
          </h2>

          <div className="space-y-8">
            <div className="bg-black p-6 rounded-lg border border-yellow-400/20">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                1. Introdução ao Varejo Farmacêutico 4.0
              </h3>
              <p className="text-gray-300">
                Entenda o mercado atual, a legislação essencial e as novas oportunidades com a tecnologia.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-yellow-400/20">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                2. Conhecimento de Produtos Farmacêuticos
              </h3>
              <p className="text-gray-300">
                Domine medicamentos (referência, genéricos, similares), dermocosméticos, suplementos e como usar a IA 
                para comparar e entender interações.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-yellow-400/20">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                3. Atendimento com IA na prática
              </h3>
              <p className="text-gray-300">
                Aprenda a criar prompts infalíveis para cada tipo de cliente, use fluxogramas de perguntas inteligentes 
                e pratique simulações reais usando IA para indicações e vendas complementares.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-yellow-400/20">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                4. Procedimentos Operacionais Inteligentes
              </h3>
              <p className="text-gray-300">
                Saiba tudo sobre interpretação de receitas, dispensação segura e gestão de estoque, incluindo como usar 
                ferramentas (até planilhas!) para configurar alertas e otimizar processos.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-yellow-400/20">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                5. Ferramentas e Tecnologias com IA
              </h3>
              <p className="text-gray-300">
                Descubra os principais sistemas de gestão, ferramentas digitais para estoque e, principalmente, como 
                integrar a IA no seu dia a dia para otimizar tarefas e focar no cliente.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-yellow-400/20">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                6. Desenvolvimento Pessoal e Profissional
              </h3>
              <p className="text-gray-300">
                Desenvolva habilidades de liderança, inteligência emocional, produtividade e crie seu plano de carreira 
                no setor farmacêutico.
              </p>
            </div>
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
            
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Veja abaixo o que espera por você!
            </button>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-16 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Bônus exclusivo
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

      {/* Team Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            QUEM ESTÁ POR TRÁS DA SUA TRANSFORMAÇÃO COM A IA?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black p-6 rounded-lg border border-yellow-400/20">
              <h3 className="text-xl font-bold mb-2 text-yellow-400">
                Cris Zanol - FARMACÊUTICA E TREINADORA
              </h3>
              <p className="text-gray-300">
                Com mais de 15 anos de experiência no setor farmacêutico e visão inovadora, Cris traz o conhecimento 
                técnico e a validação prática para o uso da IA no balcão. Ela viu a IA revolucionar seu próprio negócio 
                e compartilha o caminho com você.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-yellow-400/20">
              <h3 className="text-xl font-bold mb-2 text-yellow-400">
                Cleverson Alves - DESIGNER E TREINADOR EM MARKETING
              </h3>
              <p className="text-gray-300">
                Especialista em estratégias visuais e de vendas de alta performance, Cleverson desenvolveu a metodologia 
                de aplicação da IA focada em resultados de vendas e atendimento, com cases de sucesso comprovados no 
                mercado farmacêutico.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-yellow-400/20">
              <h3 className="text-xl font-bold mb-2 text-yellow-400">
                Lemke - AGÊNCIA DE DESENVOLVIMENTO
              </h3>
              <p className="text-gray-300">
                Uma equipe dedicada a criar experiências de aprendizado online fluidas, modernas e eficazes, garantindo 
                que sua jornada no curso seja a melhor possível.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-yellow-400/20">
              <h3 className="text-xl font-bold mb-2 text-yellow-400">
                Vanderlei Freitas - GESTOR DO PROJETO
              </h3>
              <p className="text-gray-300">
                Mais de 25 anos de experiência no mercado farmacêutico, tendo atuado em diversas áreas, desde atendente 
                até sócio-proprietário de uma rede de drogarias.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg mb-8 text-gray-300 max-w-4xl mx-auto">
              Você estará aprendendo com quem realmente entende do assunto e vive o dia a dia do varejo farmacêutico e 
              das estratégias de marketing digital. Cris Zanol traz a base técnica e a visão de quem já aplicou a IA com 
              sucesso. Cleverson Alves adiciona a expertise em vendas e marketing para garantir que você não apenas aprenda, 
              mas venda mais. E a agência Lemke assegura que sua experiência de estudo seja impecável.
            </p>
            
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Confie em quem tem resultados!
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            VEJA QUEM JÁ ESTÁ VENDENDO MAIS E SE DESTACANDO COM A IA!
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400/20">
              <p className="text-gray-300 mb-4 italic">
                &quot;Com os prompts prontos do curso, minha taxa de vendas complementares subiu de 15% para 62% em um mês! 
                Agora me sinto muito mais segura para indicar produtos&quot;
              </p>
              <p className="text-yellow-400 font-bold">
                Maria Lopes, Balconista em Porto Alegre-RS
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400/20">
              <p className="text-gray-300 mb-4 italic">
                &quot;A aula sobre como usar a IA para saber interações medicamentosas em segundos mudou completamente minha 
                forma de trabalhar no balcão! Atendimento mais rápido e seguro.&quot;
              </p>
              <p className="text-yellow-400 font-bold">
                João Pereira, Balconista em São Paulo-SP
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400/20">
              <p className="text-gray-300 mb-4 italic">
                &quot;Minha equipe de telemarketing está usando os modelos de script com IA e o resultado é incrível! As vendas 
                por telefone dispararam porque eles conseguem dar informações precisas na hora.&quot;
              </p>
              <p className="text-yellow-400 font-bold">
                Ana Régis, Gerente de Farmácia no Rio - RJ
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400/20">
              <p className="text-gray-300 mb-4 italic">
                &quot;Nunca imaginei que usar IA seria tão fácil e prático. Os prompts são a &apos;mão na roda&apos; que eu precisava 
                para aumentar meu ticket médio sem complicação.&quot;
              </p>
              <p className="text-yellow-400 font-bold">
                Carlos Almeida, Balconista em Montes Claros - MG
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg mb-8 text-gray-300 max-w-4xl mx-auto">
              Não acredite apenas na nossa palavra. Veja o que profissionais como você estão conquistando ao aplicar as 
              técnicas de IA e usar o Kit 200 Prompts Ouro no dia a dia. Eles já estão vendendo mais, atendendo melhor 
              e se sentindo mais confiantes.
            </p>
            
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Seja o próximo caso de sucesso!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

