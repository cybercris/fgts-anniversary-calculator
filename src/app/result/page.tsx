'use client'

import { useUser } from '@/app/contexts/UserContext'
import { InfoSection } from '../components/InfoSection'
import { formatNumberToCurrencyBRL } from '@/utils/mask'

export default function Result() {
  const { user } = useUser()

  return (
    <div className="h-full">
      <InfoSection title={`Olá, ${user?.name}!`} />
      <section className="bg-white w-full rounded-xl px-12 py-10">
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <h1>{formatNumberToCurrencyBRL(user?.withdrawFgts)}</h1>
          </div>
        </div>
      </section>
    </div>
  )
}
