import { ReactNode } from 'react'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'

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
          className="h-screen w-screen static skew-x-0 origin-bottom-left 
          bg-[url('/hero.jpg')] bg-cover brightness-[25%] md:skew-x-[-5deg]
          md:absolute md:w-[65%] md:left-[-15%]"
        />
        <div className="container h-full max-w-2xl mx-auto flex flex-col z-50 py-8">
          <header className="relative flex items-center mb-4">
            <Image
              width={20}
              height={20}
              alt="smile co. logo"
              title="smile co. logo"
              src="/logo.svg"
              quality={100}
              className="mr-2"
            />
            <span className="text-white text-xs font-semibold">SMILE Co.</span>
          </header>
          <main className="flex z-50">{children}</main>
        </div>
      </body>
    </html>
  )
}
