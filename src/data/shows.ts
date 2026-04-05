export interface Show {
  id: number
  data: string
  hora: string
  local: string
  cidade: string
  estado: 'SC' | 'RS'
  evento: string
  endereco?: string
  link?: string
}

export const shows: Show[] = [
  {
    id: 1,
    data: '2025-05-10',
    hora: '21:00',
    local: 'Salão de Baile Exemplo',
    cidade: 'Chapecó',
    estado: 'SC',
    evento: 'Baile de Aniversário',
    endereco: 'Rua Exemplo, 100 - Centro',
  },
  {
    id: 2,
    data: '2025-05-17',
    hora: '20:00',
    local: 'CTG Regional',
    cidade: 'Passo Fundo',
    estado: 'RS',
    evento: 'Festa Gaúcha',
    endereco: 'Av. Brasil, 500',
  },
  {
    id: 3,
    data: '2025-05-24',
    hora: '21:30',
    local: 'Clube Municipal',
    cidade: 'Joaçaba',
    estado: 'SC',
    evento: 'Baile de Sábado',
  },
]
