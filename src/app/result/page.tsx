'use client'

import { useUser } from '@/contexts/UserContext'
import { InfoSection } from '../../components/InfoSection'

export default function Result() {
  const { user } = useUser()

  return (
    <div className="h-full">
      <InfoSection title={`Olá, ${user?.name}!`} />
      <section className="bg-white w-full rounded-xl px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col items-center">
            <h3 className="text-teal-500 font-semibold text-lg mb-1">
              Você pode receber até
            </h3>
            <div className="flex items-end">
              <span className="text-lg text-black font-normal mr-1">R$</span>
              <h1 className="font-bold text-teal-600 text-4xl">
                {user.withdrawFgts && user.withdrawFgts.toFixed(2)}
              </h1>
            </div>
          </div>
          <p className="text-xs font-normal">
            <span className="text-teal-500 font-semibold">
              Esta simulação traz valores aproximados.{' '}
            </span>
            Para calcular o valor exato,{' '}
            <span className="text-teal-500 font-semibold">
              entre em contato com o Smile Co. a consultar seu saldo no app do
              FGTS.
            </span>
          </p>
        </div>
      </section>
    </div>
  )
}
