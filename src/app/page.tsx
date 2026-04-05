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

const proximosShows = shows.slice(0, 3)

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
        {/* Foto da banda como fundo */}
        <div className="absolute inset-0">
          <Image
            src="/images/banda-foto-principal.jpg"
            alt="Musical Esperança"
            fill
            className="object-cover object-center opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-gray-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/60" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary-900/60 border border-primary-700/50 rounded-full px-3 py-1.5 text-primary-300 text-xs sm:text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              Banda para bailes no Sul do Brasil
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-5">
              Musical<br />
              <span className="text-primary-400">Esperança</span>
            </h1>

            <p className="text-base sm:text-xl text-gray-300 max-w-xl mb-8 leading-relaxed">
              Animando bailes e festas com muita música, alegria e tradição pelo interior de
              <strong className="text-white"> Santa Catarina</strong> e
              <strong className="text-white"> Rio Grande do Sul</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contratacao" className="btn-primary text-base px-8 py-4 justify-center">
                Contratar a Banda
              </Link>
              <Link href="/agenda" className="btn-outline text-base px-8 py-4 justify-center">
                Ver Próximos Shows
              </Link>
            </div>

            {/* Estilos */}
            <div className="mt-10 sm:mt-14 flex flex-wrap gap-3">
              {['🤠 Gauchesco', '🎸 Sertanejo', '🪗 Forró', '💃 Vanerão'].map((tag) => (
                <span key={tag} className="bg-gray-800/80 border border-gray-700/50 text-gray-300 text-sm px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Foto destacada no lado direito em telas grandes */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2">
          <div className="relative h-full">
            <Image
              src="/images/banda-foto-principal.jpg"
              alt="Musical Esperança — banda ao vivo"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 to-transparent" />
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
              { icone: '🎤', titulo: '5 músicos profissionais', texto: 'Equipe experiente e dedicada para garantir o sucesso do seu evento.' },
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
