import styles from './JourneyAnimation.module.css'
import { Bot, Brain, Rocket } from 'lucide-react'

const descStyle = {
  color: '#f3f4f6',
  fontSize: '1rem',
  fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif',
  fontWeight: 500,
  marginTop: '0.25rem',
  textAlign: 'center' as const,
  opacity: 0.85,
  lineHeight: 1.3,
  maxWidth: '260px',
  marginLeft: 'auto',
  marginRight: 'auto'
}

export function JourneyAnimation() {
  return (
    <div className={styles.container} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '100%' }}>
      <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
        <svg
          viewBox="0 0 700 110"
          className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          style={{ display: 'block', margin: 0, padding: 0 }}
        >
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fde047" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            className={styles.dashedLine}
            d="M80,58 C180,18 260,98 350,58 S520,18 620,58"
          />
          <g>
            <polygon
              className={styles.arrow}
              points="620,58 610,53 610,63"
            />
            <circle
              className={styles.arrowHead}
              cx="620"
              cy="58"
              r="7"
            />
          </g>
          {/* Glow e ícone IA */}
          <g>
            <circle cx="80" cy="58" r="44" fill="url(#glow)" className={styles.glow} />
            <circle className={styles.circle} cx="80" cy="58" r="28" />
            <g transform="translate(62,40)"><Bot color="#181e29" size={36} strokeWidth={2.2} /></g>
          </g>
          {/* Glow e ícone Conhecimento (Brain Lucide) */}
          <g>
            <circle cx="350" cy="58" r="44" fill="url(#glow)" className={styles.glow} />
            <circle className={styles.circle} cx="350" cy="58" r="28" />
            <g transform="translate(332,40)"><Brain color="#181e29" size={36} strokeWidth={2.2} /></g>
          </g>
          {/* Glow e ícone Resultados (Rocket Lucide) */}
          <g>
            <circle cx="620" cy="58" r="44" fill="url(#glow)" className={styles.glow} />
            <circle className={styles.circle} cx="620" cy="58" r="28" />
            <g transform="translate(602,40)"><Rocket color="#181e29" size={36} strokeWidth={2.2} /></g>
          </g>
        </svg>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 0, zIndex: 2, gap: 128 }}>
        {/* IA */}
        <div style={{ width: 260, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className={styles.labelTitle}>IA</span>
          <span style={descStyle}>Automatize tarefas e ganhe tempo com Inteligência Artificial aplicada ao balcão.</span>
        </div>
        {/* Conhecimento */}
        <div style={{ width: 260, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className={styles.labelTitle}>CONHECIMENTO</span>
          <span style={descStyle}>Aprenda de verdade: domine produtos, técnicas e atendimento com base científica.</span>
        </div>
        {/* Resultados */}
        <div style={{ width: 260, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className={styles.labelTitle}>RESULTADOS</span>
          <span style={descStyle}>Venda mais, fidelize clientes e transforme sua carreira com tecnologia.</span>
        </div>
      </div>
    </div>
  )
}