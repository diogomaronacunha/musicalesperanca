import type { Metadata } from 'next'
import { integrantes } from '@/data/integrantes'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre a Banda',
  description: 'Conheça a história e os integrantes da Musical Esperança, banda para bailes no interior de Santa Catarina e Rio Grande do Sul.',
}

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-primary-950/30 to-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-subtitle mb-4">Nossa história</p>
          <h1 className="section-title text-5xl mb-6">Sobre a Banda</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Conheça a história, os valores e os músicos por trás da Musical Esperança.
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="card p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-12 bg-primary-500 rounded-full" />
              <h2 className="text-2xl font-display font-bold text-white">Nossa História</h2>
            </div>

            <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
              <p>
                A <strong className="text-white">Musical Esperança</strong> nasceu da paixão pela música e pela tradição dos bailes no Sul do Brasil.
                Formada por cinco músicos apaixonados pelo que fazem, a banda carrega no nome a essência do que representa:
                esperança, alegria e emoção em cada apresentação.
              </p>
              <p>
                Ao longo dos anos, a banda construiu uma trajetória sólida animando bailes, festas e eventos pelo interior de
                <strong className="text-white"> Santa Catarina</strong> e <strong className="text-white">Rio Grande do Sul</strong>,
                conquistando o carinho do público com um repertório diversificado que vai do gauchesco ao forró,
                do sertanejo ao vanerão.
              </p>
              <p>
                Com um som autêntico e uma energia contagiante, a Musical Esperança é sinônimo de festa garantida.
                Cada show é tratado com o mesmo cuidado e dedicação, independente do tamanho do evento —
                porque para nós, o que importa é fazer você e seus convidados viverem momentos inesquecíveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icone: '🎯', titulo: 'Nossa Missão', texto: 'Proporcionar experiências musicais inesquecíveis, animando eventos com profissionalismo e alegria.' },
              { icone: '🌟', titulo: 'Nossos Valores', texto: 'Comprometimento, pontualidade, qualidade musical e respeito pelo público e pela tradição gaúcha.' },
              { icone: '🚀', titulo: 'Nossa Visão', texto: 'Ser referência em música para bailes e festas no Sul do Brasil, levando alegria a cada canto.' },
            ].map((item) => (
              <div key={item.titulo} className="card p-6 text-center">
                <div className="text-4xl mb-4">{item.icone}</div>
                <h3 className="text-white font-semibold text-xl mb-3">{item.titulo}</h3>
                <p className="text-gray-400 leading-relaxed">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrantes */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-3">Quem faz acontecer</p>
            <h2 className="section-title">Os Integrantes</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {integrantes.map((integrante) => (
              <div key={integrante.id} className="card p-6 text-center hover:border-primary-700/50 transition-colors">
                {/* Foto placeholder */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center text-white text-2xl font-bold">
                  {integrante.nome.charAt(0)}
                </div>
                <h3 className="text-white font-semibold text-base mb-1">{integrante.nome}</h3>
                <p className="text-primary-400 text-sm font-medium mb-3">{integrante.instrumento}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{integrante.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-16 bg-primary-900/20 border-y border-primary-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { numero: '5', label: 'Integrantes' },
              { numero: '2', label: 'Estados atendidos' },
              { numero: '100+', label: 'Cidades visitadas' },
              { numero: '500+', label: 'Shows realizados' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-display font-bold text-primary-400 mb-2">{stat.numero}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Quer a gente no seu evento?
          </h2>
          <p className="text-gray-400 mb-8">Entre em contato e faça um orçamento sem compromisso.</p>
          <Link href="/contratacao" className="btn-primary">
            Contratar a Banda
          </Link>
        </div>
      </section>
    </>
  )
}
