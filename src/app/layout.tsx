import { ReactNode } from 'react'
import Image from 'next/image'

import './globals.css'

export const metadata = {
  title: 'SMILE Co.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body className="h-screen bg-transparent md:bg-yellow-700">
        <div
          className="h-screen w-screen static skew-x-0 origin-bottom-left 
          bg-[url('/hero.jpg')] bg-cover brightness-[30%] md:skew-x-[-5deg]
          md:absolute md:w-[70%] md:left-[-20%]"
        />
        <div className="container mx-auto z-50">
          <header className="relative flex">
            <Image
              width={20}
              height={20}
              alt="smile co. logo"
              title="smile co. logo"
              src="/logo.svg"
              quality={100}
              className="mr-1.5"
            />
            <span className="text-white text-sm">SMILE Co.</span>
          </header>
          {/* {children} */}
        </div>
      </body>
    </html>
  )
}
