export interface EstiloMusical {
  id: number
  estilo: string
  icone: string
  descricao: string
  exemplos: string[]
}

export const estilos: EstiloMusical[] = [
  {
    id: 1,
    estilo: 'Gauchesco / Nativista',
    icone: '🤠',
    descricao: 'O coração da nossa música, com toda a tradição e identidade do Sul.',
    exemplos: ['Chimarrão', 'Milonga', 'Chula', 'Vanerão'],
  },
  {
    id: 2,
    estilo: 'Sertanejo',
    icone: '🎸',
    descricao: 'Os grandes sucessos do sertanejo raiz e universitário para animar seu baile.',
    exemplos: ['Sertanejo raiz', 'Sertanejo universitário', 'Modão'],
  },
  {
    id: 3,
    estilo: 'Forró',
    icone: '🪗',
    descricao: 'Ritmo contagiante que coloca todo mundo na pista de dança.',
    exemplos: ['Forró pé-de-serra', 'Xote', 'Baião'],
  },
  {
    id: 4,
    estilo: 'Vanerão / Chamamé',
    icone: '💃',
    descricao: 'A tradição dos bailes do interior do Sul, perfeita para casais.',
    exemplos: ['Vanerão', 'Chamamé', 'Polca'],
  },
  {
    id: 5,
    estilo: 'Música Popular Brasileira',
    icone: '🎵',
    descricao: 'Os clássicos do Brasil que todo mundo conhece e canta junto.',
    exemplos: ['MPB', 'Pop', 'Pagode gaúcho'],
  },
]
