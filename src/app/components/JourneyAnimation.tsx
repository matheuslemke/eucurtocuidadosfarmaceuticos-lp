import { Bot, Brain, Rocket } from 'lucide-react'

const descStyle = 'text-gray-100 text-base font-["Arial_Rounded_MT_Bold",Arial,sans-serif] font-medium mt-1 text-center opacity-85 leading-tight max-w-[260px] mx-auto'

export function JourneyAnimation() {
  return (
    <div className="relative w-full h-[260px] bg-gradient-to-br from-[#181e29] from-60% to-[#111319] rounded-2xl overflow-hidden pb-6 px-6 flex flex-col justify-start items-center">
      <div className="w-full relative z-10">
        <svg
          viewBox="0 0 700 110"
          className="w-full h-full block m-0 p-0"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
        >
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fde047" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            className="stroke-[#fde047] stroke-[5px] fill-none [stroke-dasharray:18] [stroke-dashoffset:0] animate-[flow_2.5s_linear_infinite] opacity-85"
            d="M80,58 C180,18 260,98 350,58 S520,18 620,58"
          />
          <g>
            <polygon
              className="fill-[#fde047] opacity-90"
              points="620,58 610,53 610,63"
            />
            <circle
              className="fill-[#fde047] [filter:drop-shadow(0_0_8px_#fde04788)]"
              cx="620"
              cy="58"
              r="7"
            />
          </g>
          <g>
            <circle cx="80" cy="58" r="44" fill="url(#glow)" className="animate-[glowPulse_2.2s_ease-in-out_infinite_alternate]" />
            <circle className="fill-[#fde047] [filter:drop-shadow(0_0_16px_#fde04788)] transition-[filter] duration-300" cx="80" cy="58" r="28" />
            <g transform="translate(62,40)"><Bot color="#181e29" size={36} strokeWidth={2.2} /></g>
          </g>
          <g>
            <circle cx="350" cy="58" r="44" fill="url(#glow)" className="animate-[glowPulse_2.2s_ease-in-out_infinite_alternate]" />
            <circle className="fill-[#fde047] [filter:drop-shadow(0_0_16px_#fde04788)] transition-[filter] duration-300" cx="350" cy="58" r="28" />
            <g transform="translate(332,40)"><Brain color="#181e29" size={36} strokeWidth={2.2} /></g>
          </g>
          <g>
            <circle cx="620" cy="58" r="44" fill="url(#glow)" className="animate-[glowPulse_2.2s_ease-in-out_infinite_alternate]" />
            <circle className="fill-[#fde047] [filter:drop-shadow(0_0_16px_#fde04788)] transition-[filter] duration-300" cx="620" cy="58" r="28" />
            <g transform="translate(602,40)"><Rocket color="#181e29" size={36} strokeWidth={2.2} /></g>
          </g>
        </svg>
      </div>
      <div className="w-full flex justify-between items-start mt-0 z-20 gap-32">
        <div className="w-[260px] flex flex-col items-center">
          <span className="text-base font-['Inter',Arial,sans-serif] font-black tracking-[0.01em] uppercase [text-shadow:0_2px_12px_#000a]">IA</span>
          <span className={descStyle}>Automatize tarefas e ganhe tempo com Inteligência Artificial aplicada ao balcão.</span>
        </div>
        <div className="w-[260px] flex flex-col items-center">
          <span className="text-base font-['Inter',Arial,sans-serif] font-black tracking-[0.01em] uppercase [text-shadow:0_2px_12px_#000a]">CONHECIMENTO</span>
          <span className={descStyle}>Aprenda de verdade: domine produtos, técnicas e atendimento com base científica.</span>
        </div>
        <div className="w-[260px] flex flex-col items-center">
          <span className="text-base font-['Inter',Arial,sans-serif] font-black tracking-[0.01em] uppercase [text-shadow:0_2px_12px_#000a]">RESULTADOS</span>
          <span className={descStyle}>Venda mais, fidelize clientes e transforme sua carreira com tecnologia.</span>
        </div>
      </div>
    </div>
  )
}