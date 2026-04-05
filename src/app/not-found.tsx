import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center py-24">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-8xl font-display font-bold text-primary-700/40 mb-4">404</p>
        <h1 className="font-display text-3xl font-bold text-white mb-4">
          Página não encontrada
        </h1>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          A página que você está procurando não existe ou foi movida.
          Volte para o início e continue navegando!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Voltar para o início
          </Link>
          <Link href="/contratacao" className="btn-outline">
            Contratar a Banda
          </Link>
        </div>
      </div>
    </section>
  )
}
