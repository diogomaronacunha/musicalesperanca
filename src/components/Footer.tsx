import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 border-t border-gray-800/50 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                ME
              </div>
              <div>
                <p className="font-display font-bold text-white text-lg leading-none">Musical Esperança</p>
                <p className="text-primary-400 text-xs tracking-widest uppercase mt-0.5">Música para o Sul do Brasil</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Animando bailes e festas pelo interior de Santa Catarina e Rio Grande do Sul com muita música e alegria.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {[
                ['/', 'Início'],
                ['/sobre', 'Sobre a Banda'],
                ['/agenda', 'Agenda de Shows'],
                ['/galeria', 'Galeria'],
                ['/repertorio', 'Repertório'],
                ['/contratacao', 'Contratar a Banda'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-0.5">📍</span>
                <span>Santa Catarina e Rio Grande do Sul</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-400">📱</span>
                <span>(xx) xxxxx-xxxx</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-400">✉️</span>
                <span>contato@musicalesperanca.com.br</span>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-gray-500 text-xs mb-3">Siga nas redes sociais</p>
              <a
                href="https://www.facebook.com/musicalesperanca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-400 text-sm transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {year} Musical Esperança. Todos os direitos reservados.
          </p>
          <Link
            href="/contratacao"
            className="btn-primary text-sm"
          >
            Contratar a Banda
          </Link>
        </div>
      </div>
    </footer>
  )
}
