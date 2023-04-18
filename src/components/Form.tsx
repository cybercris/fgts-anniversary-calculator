'use client'

import axios from 'axios'
import { useForm } from 'react-hook-form'

const API_KEY = 'c7e236db777d4bc593ee012fbee062ab'

interface FormData {
  name: string
  phone: string
  balance: string
  birthdayMonth: string
}

export default function Form() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data) => {
    const url = `https://phonevalidation.abstractapi.com/v1/?api_key=${API_KEY}&phone=${data?.phone}`

    try {
      const response = await axios.get(url)

      if (!response?.data?.valid)
        setError('phone', { type: 'invalid', message: 'Telefone Inválido' })

      if (response?.data?.valid) console.log('Telefone válido')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
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
              {...register('name')}
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
              {...register('phone')}
            />
            {errors.phone && <p>{errors.phone.message}</p>}
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
              {...register('balance')}
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
              {...register('birthdayMonth')}
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
  )
}
