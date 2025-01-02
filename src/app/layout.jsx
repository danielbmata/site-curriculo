import { Inter } from 'next/font/google'
import './globals.css'
import { RootLayoutClient } from '../components/RootLayoutClient'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const metadata = {
  title: 'Daniel Mata',
  description: 'Meu portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
