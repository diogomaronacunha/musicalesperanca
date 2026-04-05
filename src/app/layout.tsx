import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileBar from '@/components/MobileBar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Musical Esperança — Banda para Bailes | SC e RS',
    template: '%s | Musical Esperança',
  },
  description:
    'Musical Esperança — banda para bailes e festas no interior de Santa Catarina e Rio Grande do Sul. Gauchesco, sertanejo, forró, vanerão e muito mais. Contrate agora!',
  keywords: ['banda para baile', 'musical esperança', 'banda santa catarina', 'banda rio grande do sul', 'gauchesco', 'sertanejo', 'forró'],
  openGraph: {
    title: 'Musical Esperança — Banda para Bailes | SC e RS',
    description: 'Animando bailes e festas pelo interior do Sul do Brasil.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main className="pt-16 pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  )
}
