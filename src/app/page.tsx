import { RiMoneyDollarBoxLine } from 'react-icons/ri'

export default function Home() {
  return (
    <div className="h-full">
      <div className="flex mb-8">
        <h1 className="font-bold text-4xl text-white italic text-left w-[50%]">
          Use uma grana que já é sua e saia do aperto.
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
      </div>
      <div className="bg-white w-full rounded-xl px-12 py-6">
        <form className="flex flex-col">
          <div className="mb-6">
            <div className="flex">
              <div className="flex-col mr-2 w-1/2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Qual seu nome?
                </label>
                <input
                  type="text"
                  id="name"
                  className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ex.: Guilherme Neves"
                  required
                />
              </div>
              <div className="flex-col w-1/2">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Qual seu telefone?
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ex.: (21) 98765-9087"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex">
              <div className="flex-col mr-2 w-1/2">
                <label
                  htmlFor="balance"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Qual seu saldo?
                </label>
                <input
                  type="balance"
                  id="number"
                  className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ex.: R$ 5.000,00"
                  required
                />
              </div>
              <div className="flex-col w-1/2">
                <label
                  htmlFor="months"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Qual seu mês de aniversário?
                </label>
                <select
                  id="months"
                  className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Selecione...</option>
                  <option value="JAN">Janeiro</option>
                  <option value="FEB">Fevereiro</option>
                  <option value="MAR">Março</option>
                  <option value="APR">Abril</option>
                  <option value="MAY">Maio</option>
                  <option value="JUN">Junho</option>
                  <option value="JUL">Julho</option>
                  <option value="AUG">Agosto</option>
                  <option value="SEP">Setembro</option>
                  <option value="OCT">Outubro</option>
                  <option value="NOV">Novembro</option>
                  <option value="DEC">Dezembro</option>
                </select>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Ver proposta
          </button>
        </form>
      </div>
    </div>
  )
}
