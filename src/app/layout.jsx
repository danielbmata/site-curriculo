import { Inter } from 'next/font/google'
import './globals.css'
import { RootLayoutClient } from '../components/RootLayoutClient'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Daniel Mata',
  description: 'Meu portfolio',
}

export default function RootLayout({ children }) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}
