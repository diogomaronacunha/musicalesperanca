export interface Integrante {
  id: number
  nome: string
  instrumento: string
  foto: string
  descricao: string
}

export const integrantes: Integrante[] = [
  {
    id: 1,
    nome: 'Integrante 1',
    instrumento: 'Voz Principal',
    foto: '/images/integrante-1.jpg',
    descricao: 'Adicione a descrição do integrante aqui.',
  },
  {
    id: 2,
    nome: 'Integrante 2',
    instrumento: 'Guitarra / Violão',
    foto: '/images/integrante-2.jpg',
    descricao: 'Adicione a descrição do integrante aqui.',
  },
  {
    id: 3,
    nome: 'Integrante 3',
    instrumento: 'Teclado / Acordeon',
    foto: '/images/integrante-3.jpg',
    descricao: 'Adicione a descrição do integrante aqui.',
  },
  {
    id: 4,
    nome: 'Integrante 4',
    instrumento: 'Baixo',
    foto: '/images/integrante-4.jpg',
    descricao: 'Adicione a descrição do integrante aqui.',
  },
  {
    id: 5,
    nome: 'Integrante 5',
    instrumento: 'Bateria / Percussão',
    foto: '/images/integrante-5.jpg',
    descricao: 'Adicione a descrição do integrante aqui.',
  },
]
