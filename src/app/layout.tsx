import { ReactNode } from 'react'
import { Montserrat } from 'next/font/google'

import { UserProvider } from '@/contexts/UserContext'

import { Header } from '../components/Header'

import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'SMILE Co.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body
        className={`h-screen bg-transparent md:bg-blue-950
        ${montserrat.className}`}
      >
        <div
          className="h-screen w-screen absolute skew-x-0 origin-bottom-left 
          bg-[url('/hero.jpg')] bg-cover brightness-[25%] md:skew-x-[-5deg]
          md:w-[65%] md:left-[-15%]"
        />
        <div className="container h-full max-w-2xl mx-auto flex flex-col z-50 py-8 px-4">
          <Header />
          <main className="flex z-50">
            <UserProvider>{children}</UserProvider>
          </main>
        </div>
      </body>
    </html>
  )
}
