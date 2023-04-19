'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { SlClose } from 'react-icons/sl'

import { useUser } from '@/contexts/UserContext'
import {
  normalizeBalanceBRL,
  normalizeName,
  normalizePhoneNumber,
  unmaskBalanceURL,
} from '@/utils/mask'

// TODO: COLOCAR PRA DENTRO DO .ENV
const API_KEY = 'c7e236db777d4bc593ee012fbee062ab'
const BASE_URL = 'https://phonevalidation.abstractapi.com/v1/'

interface FormData {
  name: string
  phone: string
  balance: string
  birthdayMonth: string
}

export function Form() {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>()
  const { setUser } = useUser()
  const router = useRouter()

  const onSubmit = handleSubmit(async (data) => {
    const url = `${BASE_URL}?api_key=${API_KEY}&phone=${data?.phone}`

    try {
      const response = await axios.get(url)

      if (!response.data.valid)
        setError('phone', { type: 'invalid', message: 'Telefone Inválido' })

      if (response.data.valid) {
        const formattedBalance = unmaskBalanceURL(data.balance)

        setUser({
          name: data.name,
          balanceFgts: formattedBalance,
          birthdayMonth: data.birthdayMonth,
        })
        router.push('/result')
      }
    } catch (error) {
      console.log(error)
    }
  })

  const nameValue = watch('name')
  const phoneValue = watch('phone')
  const balanceValue = watch('balance')

  useEffect(() => {
    setValue('name', normalizeName(nameValue))
  }, [nameValue, setValue])

  useEffect(() => {
    setValue('phone', normalizePhoneNumber(phoneValue))
  }, [phoneValue, setValue])

  useEffect(() => {
    setValue('balance', normalizeBalanceBRL(balanceValue))
  }, [balanceValue, setValue])

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <div className="mb-0 md:mb-5">
        <div className="flex flex-col md:flex-row">
          <div className="flex-col mb-4 mr-0 w-full md:w-1/2 md:mb-0 md:mr-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-semibold text-gray-900"
            >
              Qual seu nome?
            </label>
            <input
              type="text"
              id="name"
              className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded font-semibold
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ex.: Guilherme Neves"
              data-testid="inputName"
              {...register('name')}
            />
          </div>
          <div className="flex-col mb-4 w-full md:w-1/2 md:mb-0">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-semibold text-gray-900"
            >
              Qual seu telefone?
            </label>
            <input
              type="tel"
              id="phone"
              className={`h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded font-semibold
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-blue-500 dark:focus:border-blue-500
                ${errors?.phone && 'mb-1'}`}
              placeholder="ex.: (21) 98765-9087"
              required
              data-testid="inputPhone"
              {...register('phone')}
            />
            {errors?.phone && (
              <div className="flex h-12 px-4 items-center bg-red-100 rounded font-semibold">
                <SlClose size={24} className="text-red-800 mr-3" />
                <span className="text-sm font-semibold text-red-800">
                  {errors?.phone?.message}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row">
          <div className="flex-col mb-4 mr-0 w-full md:w-1/2 md:mb-0 md:mr-2">
            <label
              htmlFor="balance"
              className="block mb-2 text-sm font-semibold text-gray-900"
            >
              Qual seu saldo?
            </label>
            <input
              type="text"
              id="balance"
              className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded font-semibold
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ex.: R$ 5.000,00"
              required
              data-testid="inputBalance"
              {...register('balance')}
            />
          </div>
          <div className="flex-col w-full md:w-1/2">
            <label
              htmlFor="months"
              className="block mb-2 text-sm font-semibold text-gray-900"
            >
              Qual seu mês de aniversário?
            </label>
            <select
              id="months"
              className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded font-semibold
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue=""
              required
              {...register('birthdayMonth')}
            >
              <option value="" disabled>
                Selecione...
              </option>
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
        className="text-white bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:outline-none
      focus:ring-yellow-300 font-semibold rounded text-sm w-full sm:w-auto px-5 py-2.5 
        text-center dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-600 
        transition-all h-11"
        data-testid="buttonSubmit"
      >
        Ver proposta
      </button>
    </form>
  )
}
