# Landing Page - Curso IA para Farmácias

## Descrição
Landing page estática criada com Next.js 15, TypeScript e Tailwind CSS, baseada no estilo do site "A Máquina Extrema" e na estrutura de conteúdo fornecida.

## Características
- **Framework**: Next.js 15 com App Router
- **Estilo**: Tailwind CSS
- **Linguagem**: TypeScript
- **Configuração**: SSG (Static Site Generation)
- **Design**: Inspirado no site de referência com tema escuro, destaques em amarelo/dourado
- **Responsivo**: Adaptado para desktop e mobile

## Estrutura do Projeto
```
landing-page-farmacia/
├── src/
│   └── app/
│       ├── layout.tsx      # Layout principal com metadados
│       ├── page.tsx        # Página principal da landing page
│       └── globals.css     # Estilos globais
├── next.config.ts          # Configuração do Next.js para SSG
├── tailwind.config.ts      # Configuração do Tailwind CSS
├── package.json            # Dependências e scripts
└── .eslintrc.json         # Configuração do ESLint
```

## Seções Implementadas
1. **Hero Section** - Título principal com CTA
2. **Introdução** - Descrição do curso e benefícios
3. **Vídeo** - Seção para vídeo explicativo
4. **Diferenciais** - Grid com 7 principais benefícios
5. **Transformação** - Seção visual para ilustrações
6. **Módulos** - 6 módulos do curso detalhados
7. **Bônus** - Kit 200 Prompts Ouro em destaque
8. **Equipe** - Apresentação dos criadores
9. **Depoimentos** - Testemunhos de clientes

## Como usar

### Desenvolvimento
```bash
cd landing-page-farmacia
pnpm install
pnpm run dev
```

### Build para produção
```bash
pnpm run build
```

**Nota**: Se houver erros de ESLint relacionados a aspas, você pode:
1. Corrigir manualmente as aspas nos textos
2. Ou usar: `ESLINT_NO_DEV_ERRORS=true pnpm run build`

### Deploy
O projeto está configurado para gerar arquivos estáticos na pasta `out/` após o build, prontos para deploy na Vercel ou qualquer hosting estático.

## Customizações Necessárias
- [ ] Adicionar logo real no lugar de "[LOGO]"
- [ ] Inserir vídeo real na seção "O Segredo dos Balconistas"
- [ ] Adicionar ilustração na seção "Transformação"
- [ ] Configurar links reais nos CTAs
- [ ] Adicionar imagens dos membros da equipe
- [ ] Otimizar textos se necessário

## Tecnologias Utilizadas
- Next.js 15.3.3
- React 19
- TypeScript 5.8.3
- Tailwind CSS 4.1.8
- ESLint com configuração Next.js

## Estilo Visual
- **Cores principais**: Preto, cinza escuro, amarelo/dourado
- **Tipografia**: Inter (Google Fonts)
- **Layout**: Responsivo com breakpoints md: e lg:
- **Efeitos**: Hover states, transições suaves, gradientes
- **Componentes**: Botões com efeito hover e scale, cards com bordas sutis

