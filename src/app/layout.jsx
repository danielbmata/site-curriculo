import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Daniel Mata',
  description: 'Meu portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-900 text-zinc-50">{children}</body>
    </html>
  )
}
