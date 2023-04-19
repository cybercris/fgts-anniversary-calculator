import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="relative mb-6 px-2">
      <Link className="flex items-center" href="/">
        <Image
          width={20}
          height={20}
          alt="smile co. logo"
          title="smile co. logo"
          src="/logo.svg"
          quality={100}
          className="mr-2"
          data-testid="headerLogo"
        />
        <span className="text-white text-xs font-semibold">SMILE Co.</span>
      </Link>
    </header>
  )
}
