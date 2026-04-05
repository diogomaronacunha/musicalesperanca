import type { Metadata } from 'next'
import ContatoForm from './ContatoForm'

export const metadata: Metadata = {
  title: 'Contratar a Banda',
  description: 'Solicite um orçamento para contratar a Musical Esperança para o seu baile ou evento no interior de Santa Catarina ou Rio Grande do Sul.',
}

export default function ContratacaoPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-primary-950/30 to-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-subtitle mb-4">Vamos conversar</p>
          <h1 className="section-title text-5xl mb-6">Contratar a Banda</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato em até 24 horas
            com todas as informações e o orçamento para o seu evento.
          </p>
        </div>
      </section>

      {/* Formulário + Info */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Informações laterais */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-white font-semibold text-lg mb-4">📞 Contato Direto</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-primary-400 text-xl">📱</span>
                    <div>
                      <p className="text-gray-300">(xx) xxxxx-xxxx</p>
                      <p className="text-gray-500 text-xs">WhatsApp disponível</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-primary-400 text-xl">✉️</span>
                    <div>
                      <p className="text-gray-300">contato@musicalesperanca.com.br</p>
                      <p className="text-gray-500 text-xs">Respondemos em até 24h</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-primary-400 text-xl">📍</span>
                    <div>
                      <p className="text-gray-300">SC e RS</p>
                      <p className="text-gray-500 text-xs">Interior do Sul do Brasil</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-white font-semibold text-lg mb-4">🎯 O que incluímos</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {[
                    '5 músicos profissionais',
                    'Equipamento de som completo',
                    'Iluminação de palco',
                    'Repertório personalizado',
                    'Pontualidade garantida',
                    'Show de até 4 horas',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-primary-400 text-xs">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-white font-semibold text-lg mb-3">📣 Redes Sociais</h3>
                <a
                  href="https://www.facebook.com/musicalesperanca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  <svg className="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  /musicalesperanca
                </a>
              </div>
            </div>

            {/* Formulário */}
            <div className="lg:col-span-2">
              <ContatoForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
