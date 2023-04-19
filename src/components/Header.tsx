import Image from 'next/image'

export function Header() {
  return (
    <header className="relative flex items-center mb-6">
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
  )
}
