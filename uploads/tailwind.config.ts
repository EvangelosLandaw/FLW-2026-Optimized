import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        flw: {
          red:            '#B01C1C',
          'red-border':   '#8A1414',
          'red-dark':     '#7A1010',
          'red-light':    '#D42B2B',
          gold:           '#DAA520',
          'gold-border':  '#B08010',
          'gold-dark':    '#A07810',
          'gold-bright':  '#C8A840',
          blue:           '#4299FF',
          green:          '#16A86A',
          'green-dark':   '#0A6B40',
          'footer-bg':    '#0E0602',
          dark:           '#1A0C04',
          surface:        '#2C1A0E',
          card:           '#1E0E06',
          white:          '#F5F0E8',
          cream:          '#F0E8D8',
          'cream-mid':    '#C8B49A',
          'cream-dim':    '#C8B89A',
          muted:          '#A8927A',
          faint:          '#7A6A5A',
          'footer-link':  '#C8B48A',
          'footer-copy':  '#8A7050',
        }
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        ui:      ['Barlow Condensed', 'sans-serif'],
        body:    ['Barlow', 'sans-serif'],
        mono:    ['Share Tech Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '2px',
        sm:      '2px',
        md:      '4px',
        lg:      '4px',
        full:    '9999px',
      },
      letterSpacing: {
        tactical: '0.08em',
        label:    '0.14em',
        wide:     '0.06em',
        nav:      '0.08em',
      },
      fontSize: {
        hero: ['clamp(28px,4vw,40px)', { lineHeight: '1.05', fontWeight: '700' }],
        h1:   ['clamp(24px,3vw,34px)', { lineHeight: '1.1',  fontWeight: '700' }],
        h2:   ['clamp(20px,2.5vw,28px)',{ lineHeight: '1.15', fontWeight: '700' }],
        h3:   ['clamp(16px,2vw,20px)', { lineHeight: '1.2',  fontWeight: '600' }],
        label:['11px',                  { lineHeight: '1',    letterSpacing: '0.14em' }],
      },
      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'blink':      'blink 1s step-end infinite',
        'crosshair':  'pulse-crosshair 4s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        'pulse-crosshair': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.05' },
          '50%':      { transform: 'scale(1.04)', opacity: '0.07' },
        },
      },
      boxShadow: {
        'red-glow':  '0 0 20px rgba(176,28,28,0.3)',
        'red-sm':    '0 0 8px rgba(176,28,28,0.2)',
        'gold-glow': '0 0 20px rgba(218,165,32,0.3)',
        'card':      '0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}

export default config
