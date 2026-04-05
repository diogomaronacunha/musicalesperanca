import type { Metadata } from 'next'
import { shows } from '@/data/shows'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Agenda de Shows',
  description: 'Confira os próximos shows da Musical Esperança no interior de Santa Catarina e Rio Grande do Sul.',
}

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split('-').map(Number)
  const date = new Date(year, month - 1, day)
  return {
    dia: date.toLocaleDateString('pt-BR', { day: '2-digit' }),
    mes: date.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '').toUpperCase(),
    diaSemana: date.toLocaleDateString('pt-BR', { weekday: 'long' }),
    completo: date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }),
  }
}

const today = new Date()
today.setHours(0, 0, 0, 0)

const showsFuturos = shows
  .filter((s) => {
    const [y, m, d] = s.data.split('-').map(Number)
    return new Date(y, m - 1, d) >= today
  })
  .sort((a, b) => a.data.localeCompare(b.data))

const showsSC = showsFuturos.filter((s) => s.estado === 'SC')
const showsRS = showsFuturos.filter((s) => s.estado === 'RS')

export default function AgendaPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-primary-950/30 to-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-subtitle mb-4">Onde estaremos</p>
          <h1 className="section-title text-5xl mb-6">Agenda de Shows</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Fique por dentro dos próximos shows e garanta já o seu lugar na pista!
          </p>
        </div>
      </section>

      {/* Todos os shows */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {showsFuturos.length === 0 ? (
            <div className="card p-12 text-center">
              <p className="text-4xl mb-4">🎵</p>
              <h2 className="text-white font-semibold text-xl mb-2">Novidades em breve!</h2>
              <p className="text-gray-400">
                Novos shows estão sendo agendados. Siga nosso Facebook para ficar por dentro.
              </p>
              <a
                href="https://www.facebook.com/musicalesperanca"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 inline-flex"
              >
                Seguir no Facebook
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {showsFuturos.map((show) => {
                const dt = formatDate(show.data)
                return (
                  <div
                    key={show.id}
                    className="card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:border-primary-700/50 transition-colors"
                  >
                    {/* Data */}
                    <div className="flex-shrink-0 bg-primary-900/50 border border-primary-700/50 rounded-2xl w-16 h-16 flex flex-col items-center justify-center text-center">
                      <span className="text-primary-300 text-xs font-medium">{dt.mes}</span>
                      <span className="text-white text-2xl font-bold leading-none">{dt.dia}</span>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-white font-semibold text-lg">{show.evento}</h3>
                        <span className="bg-primary-900/50 border border-primary-700/40 text-primary-300 text-xs px-2 py-0.5 rounded-full">
                          {show.estado}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm">{show.local}</p>
                      <p className="text-gray-500 text-sm">
                        {show.cidade} • {dt.diaSemana}, {dt.completo} às {show.hora}
                      </p>
                      {show.endereco && (
                        <p className="text-gray-600 text-xs mt-1">{show.endereco}</p>
                      )}
                    </div>

                    {/* Hora */}
                    <div className="flex-shrink-0 text-right">
                      <span className="text-primary-400 font-semibold">{show.hora}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Por estado */}
      {(showsSC.length > 0 || showsRS.length > 0) && (
        <section className="py-16 bg-gray-900/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="section-title">Shows por Estado</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { estado: 'Santa Catarina', sigla: 'SC', shows: showsSC, emoji: '🏔️' },
                { estado: 'Rio Grande do Sul', sigla: 'RS', shows: showsRS, emoji: '🌾' },
              ].map(({ estado, sigla, shows: estadoShows, emoji }) => (
                <div key={sigla} className="card p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{emoji}</span>
                    <div>
                      <h3 className="text-white font-semibold text-xl">{estado}</h3>
                      <p className="text-gray-500 text-sm">{estadoShows.length} show{estadoShows.length !== 1 ? 's' : ''} agendado{estadoShows.length !== 1 ? 's' : ''}</p>
                    </div>
                  </div>
                  {estadoShows.length === 0 ? (
                    <p className="text-gray-500 text-sm">Novidades em breve...</p>
                  ) : (
                    <ul className="space-y-3">
                      {estadoShows.map((show) => {
                        const dt = formatDate(show.data)
                        return (
                          <li key={show.id} className="flex items-center gap-3 text-sm">
                            <span className="text-primary-400 font-medium w-12 flex-shrink-0">{dt.dia}/{dt.mes}</span>
                            <div>
                              <p className="text-gray-300">{show.evento}</p>
                              <p className="text-gray-500 text-xs">{show.cidade}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <p className="text-gray-400 text-lg mb-2">Quer a Musical Esperança no seu evento?</p>
          <h2 className="font-display text-3xl font-bold text-white mb-8">
            Consulte a disponibilidade de datas
          </h2>
          <Link href="/contratacao" className="btn-primary">
            Verificar Disponibilidade
          </Link>
        </div>
      </section>
    </>
  )
}
