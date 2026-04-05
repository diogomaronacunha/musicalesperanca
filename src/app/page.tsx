import Link from 'next/link'
import Image from 'next/image'
import { shows } from '@/data/shows'
import { estilos } from '@/data/repertorio'

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
  })
}

const today = new Date()
today.setHours(0, 0, 0, 0)

const proximosShows = shows
  .filter((s) => {
    const [y, m, d] = s.data.split('-').map(Number)
    return new Date(y, m - 1, d) >= today
  })
  .slice(0, 3)

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
        {/* Gradiente de fundo limpo */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950/40 via-gray-950 to-gray-950" />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-700/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-primary-900/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* Texto à esquerda */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary-900/60 border border-primary-700/50 rounded-full px-3 py-1.5 text-primary-300 text-xs sm:text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                Banda para bailes no Sul do Brasil
              </div>

              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-5">
                Musical<br />
                <span className="text-primary-400">Esperança</span>
              </h1>

              <p className="text-base sm:text-xl text-gray-300 mb-8 leading-relaxed">
                Animando bailes e festas com muita música, alegria e tradição pelo interior de
                <strong className="text-white"> Santa Catarina</strong> e
                <strong className="text-white"> Rio Grande do Sul</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="/contratacao" className="btn-primary text-base px-8 py-4 justify-center">
                  Contratar a Banda
                </Link>
                <Link href="/agenda" className="btn-outline text-base px-8 py-4 justify-center">
                  Ver Próximos Shows
                </Link>
              </div>

              {/* Estilos */}
              <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
                {['🤠 Gauchesco', '🎸 Sertanejo', '🪗 Forró', '💃 Vanerão'].map((tag) => (
                  <span key={tag} className="bg-gray-800/80 border border-gray-700/50 text-gray-300 text-sm px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Foto à direita — card estilizado */}
            <div className="flex-shrink-0 w-full max-w-sm lg:max-w-md">
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary-700/40 shadow-2xl shadow-primary-900/30">
                <Image
                  src="/images/banda-foto-principal.jpg"
                  alt="Musical Esperança — foto oficial da banda"
                  width={500}
                  height={420}
                  className="w-full object-cover object-bottom"
                  priority
                />
                {/* Overlay sutil na base */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-950/60 to-transparent" />
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Por que contratar */}
      <section className="py-14 sm:py-24 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <p className="section-subtitle mb-3">Por que nos escolher</p>
            <h2 className="section-title">Uma banda de verdade para o seu evento</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icone: '🎵', titulo: 'Repertório variado', texto: 'Gauchesco, sertanejo, forró, vanerão e muito mais para animar todo tipo de público.' },
              { icone: '🎤', titulo: '3 músicos profissionais', texto: 'Equipe experiente e dedicada para garantir o sucesso do seu evento.' },
              { icone: '🌍', titulo: 'SC e RS', texto: 'Atendemos bailes e festas por todo o interior de Santa Catarina e Rio Grande do Sul.' },
              { icone: '🤝', titulo: 'Comprometidos', texto: 'Pontualidade, profissionalismo e animação garantidos em cada apresentação.' },
            ].map((item) => (
              <div key={item.titulo} className="card p-6 hover:border-primary-700/50 transition-colors">
                <div className="text-4xl mb-4">{item.icone}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.titulo}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Próximos shows */}
      <section className="py-14 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <p className="section-subtitle mb-2">Agenda</p>
              <h2 className="section-title">Próximos shows</h2>
            </div>
            <Link href="/agenda" className="btn-outline text-sm">
              Ver agenda completa →
            </Link>
          </div>

          {proximosShows.length === 0 ? (
            <div className="card p-10 text-center">
              <p className="text-3xl mb-3">🎵</p>
              <p className="text-white font-semibold mb-1">Novidades em breve!</p>
              <p className="text-gray-400 text-sm">Novos shows estão sendo agendados. Siga o Facebook para ficar por dentro.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {proximosShows.map((show) => (
                <div key={show.id} className="card p-6 hover:border-primary-700/50 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary-900/50 border border-primary-700/50 rounded-xl px-3 py-1.5">
                      <p className="text-primary-300 text-xs font-medium">{show.estado}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary-400 text-sm font-medium">{show.hora}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-1">{formatDate(show.data)}</p>
                  <h3 className="text-white font-semibold text-lg mb-1">{show.evento}</h3>
                  <p className="text-gray-400 text-sm">{show.local}</p>
                  <p className="text-gray-500 text-sm">{show.cidade} — {show.estado}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Estilos musicais */}
      <section className="py-14 sm:py-24 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <p className="section-subtitle mb-3">Repertório</p>
            <h2 className="section-title">Música para todos os gostos</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {estilos.map((estilo) => (
              <div key={estilo.id} className="card p-6 hover:border-primary-700/50 transition-colors">
                <div className="text-3xl mb-3">{estilo.icone}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{estilo.estilo}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{estilo.descricao}</p>
                <div className="flex flex-wrap gap-2">
                  {estilo.exemplos.map((ex) => (
                    <span key={ex} className="bg-gray-800 text-gray-300 text-xs px-2.5 py-1 rounded-full">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/repertorio" className="btn-outline">
              Ver repertório completo
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="card p-12 bg-gradient-to-br from-primary-900/30 to-gray-900 border-primary-700/30">
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Pronto para animar o seu evento?
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Entre em contato agora e faça um orçamento sem compromisso. A Musical Esperança está pronta para tornar o seu baile inesquecível!
            </p>
            <Link href="/contratacao" className="btn-primary text-base px-10 py-4">
              Solicitar Orçamento Agora
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
