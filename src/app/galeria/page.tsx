import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Galeria',
  description: 'Fotos e vídeos dos shows da Musical Esperança pelo interior de Santa Catarina e Rio Grande do Sul.',
}

// Vídeos do YouTube (substituir pelos IDs reais)
const videos = [
  {
    id: 1,
    titulo: 'Show ao vivo — Baile em Chapecó/SC',
    youtubeId: 'dQw4w9WgXcQ', // substituir pelo ID real
    descricao: 'Uma noite inesquecível no interior de Santa Catarina.',
  },
  {
    id: 2,
    titulo: 'Gauchesco e Vanerão — RS',
    youtubeId: 'dQw4w9WgXcQ', // substituir pelo ID real
    descricao: 'Tradição gaúcha com muito ritmo e animação.',
  },
  {
    id: 3,
    titulo: 'Forró e Sertanejo — Festa Junina',
    youtubeId: 'dQw4w9WgXcQ', // substituir pelo ID real
    descricao: 'Repertório variado para animar qualquer evento.',
  },
]

// Fotos placeholder
const fotos = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  alt: `Foto do show ${i + 1}`,
}))

export default function GaleriaPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-primary-950/30 to-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-subtitle mb-4">Momentos inesquecíveis</p>
          <h1 className="section-title text-5xl mb-6">Galeria</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Reviva os melhores momentos dos nossos shows em fotos e vídeos.
          </p>
        </div>
      </section>

      {/* Vídeos */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 bg-primary-500 rounded-full" />
            <h2 className="text-2xl font-display font-bold text-white">Vídeos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="card overflow-hidden hover:border-primary-700/50 transition-colors">
                <div className="aspect-video bg-gray-800 relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-sm mb-1">{video.titulo}</h3>
                  <p className="text-gray-500 text-xs">{video.descricao}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.facebook.com/musicalesperanca"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Ver mais vídeos no Facebook →
            </a>
          </div>
        </div>
      </section>

      {/* Fotos */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 bg-primary-500 rounded-full" />
            <h2 className="text-2xl font-display font-bold text-white">Fotos</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {/* Foto real da banda — destaque */}
            <div className="col-span-2 row-span-2 aspect-square relative rounded-xl overflow-hidden border border-primary-700/50 hover:border-primary-500 transition-colors cursor-pointer">
              <Image
                src="/images/banda-foto-principal.jpg"
                alt="Musical Esperança — foto oficial"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Placeholders para fotos futuras */}
            {fotos.map((foto) => (
              <div
                key={foto.id}
                className="aspect-square bg-gray-800 rounded-xl overflow-hidden hover:opacity-90 transition-opacity cursor-pointer border border-gray-700/50 hover:border-primary-700/50 flex items-center justify-center"
              >
                <div className="text-center text-gray-600">
                  <div className="text-3xl mb-1">📷</div>
                  <p className="text-xs">Em breve</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            * Adicione as fotos reais na pasta <code className="bg-gray-800 px-1.5 py-0.5 rounded text-primary-300">/public/images/</code>
          </p>
        </div>
      </section>

      {/* Siga nas redes */}
      <section className="py-16 text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Siga a gente no Facebook
          </h2>
          <p className="text-gray-400 mb-8">
            Fique por dentro de novidades, bastidores e muito mais.
          </p>
          <a
            href="https://www.facebook.com/musicalesperanca"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Seguir no Facebook
          </a>
        </div>
      </section>
    </>
  )
}
