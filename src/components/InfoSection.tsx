import { RiMoneyDollarBoxLine } from 'react-icons/ri'

interface InfoSectionProps {
  title: string
}

export function InfoSection({ title }: InfoSectionProps) {
  return (
    <section className="grid grid-cols-3 mb-8 gap-1 md:gap-3 lg:gap-4 px-2">
      <h1
        className="col-span-2 font-bold text-2xl md:text-3xl lg:text-4xl lg:w-[80%]
       text-white italic text-left"
        data-testid="titleInfoSection"
      >
        {title}
      </h1>
      <div className="col-span-1 flex items-end">
        <div className="flex items-start">
          <div className="flex flex-col items-center mr-2.5 h-full">
            <RiMoneyDollarBoxLine className="text-blue-300 mb-3" size={18} />
            <div className="h-6 w-[1.5px] bg-blue-300 "></div>
          </div>
          <div className="flex flex-col justify-center mt-0 md:mt-1 flex-nowrap">
            <h4 className="text-white text-xs font-bold mb-2">
              SAQUE ANIVERSÁRIO
            </h4>
            <p className="text-white text-[0.6rem] font-light">
              <span className="font-bold">Insira seus dados </span>e verifique o
              quanto você poderá receber!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
