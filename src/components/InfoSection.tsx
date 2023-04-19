import { RiMoneyDollarBoxLine } from 'react-icons/ri'

interface InfoSectionProps {
  title?: string
}

export function InfoSection({ title }: InfoSectionProps) {
  return (
    <section className="flex mb-8">
      <h1 className="font-bold text-4xl text-white italic text-left w-[50%]">
        {title}
      </h1>
      <div className="flex items-end">
        <div className="flex flex-col items-center mr-2.5">
          <RiMoneyDollarBoxLine className="text-blue-300 mb-3" size={18} />
          <div className="h-5 w-[1.5px] bg-blue-300 "></div>
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-white text-xs font-bold mb-2">
            SAQUE ANIVERSÁRIO
          </h4>
          <p className="text-white text-[0.6rem] font-light">
            <span className="font-bold">Insira seus dados </span>e verifique o
            quanto você poderá receber!
          </p>
        </div>
      </div>
    </section>
  )
}
