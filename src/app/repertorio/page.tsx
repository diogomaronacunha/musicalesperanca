import type { Metadata } from 'next'
import { estilos } from '@/data/repertorio'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Repertório',
  description: 'Conheça o repertório da Musical Esperança — gauchesco, sertanejo, forró, vanerão, chamamé e muito mais.',
}

export default function RepertorioPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-primary-950/30 to-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-subtitle mb-4">Nossa música</p>
          <h1 className="section-title text-5xl mb-6">Repertório</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Uma seleção diversificada para animar qualquer tipo de evento, do baile tradicional à festa temática.
            Música para todos os gostos e todas as idades.
          </p>
        </div>
      </section>

      {/* Estilos */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {estilos.map((estilo) => (
              <div key={estilo.id} className="card p-8 hover:border-primary-700/50 transition-colors">
                <div className="text-5xl mb-5">{estilo.icone}</div>
                <h2 className="text-white font-display font-bold text-2xl mb-3">{estilo.estilo}</h2>
                <p className="text-gray-400 leading-relaxed mb-6">{estilo.descricao}</p>

                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">Subgêneros</p>
                  <div className="flex flex-wrap gap-2">
                    {estilo.exemplos.map((ex) => (
                      <span
                        key={ex}
                        className="bg-primary-900/40 border border-primary-800/40 text-primary-300 text-sm px-3 py-1 rounded-full"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nota */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="card p-8 bg-primary-900/20 border-primary-700/30 text-center">
            <div className="text-4xl mb-4">🎵</div>
            <h3 className="text-white font-semibold text-xl mb-3">Repertório personalizado</h3>
            <p className="text-gray-300 leading-relaxed">
              A Musical Esperança adapta o repertório conforme o perfil do seu evento.
              Se você tem pedidos especiais ou quer um tema musical específico para a sua festa,
              entre em contato — faremos o possível para atender!
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Curtiu o repertório?
          </h2>
          <p className="text-gray-400 mb-8">
            Solicite um orçamento e garanta a Musical Esperança no seu evento!
          </p>
          <Link href="/contratacao" className="btn-primary">
            Contratar a Banda
          </Link>
        </div>
      </section>
    </>
  )
}
