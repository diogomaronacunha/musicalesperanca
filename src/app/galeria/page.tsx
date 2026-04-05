import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Galeria',
  description: 'Fotos e vídeos dos shows da Musical Esperança pelo interior de Santa Catarina e Rio Grande do Sul.',
}

// Fotos placeholder
const fotos = Array.from({ length: 3 }, (_, i) => ({
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

          <div className="card p-12 text-center">
            <div className="text-5xl mb-5">🎬</div>
            <h3 className="text-white font-semibold text-xl mb-3">Assista nossos shows</h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Vídeos dos nossos shows ao vivo estão disponíveis na nossa página do Facebook.
              Siga para não perder nenhuma novidade!
            </p>
            <a
              href="https://www.facebook.com/musicalesperanca"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Ver vídeos no Facebook
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
