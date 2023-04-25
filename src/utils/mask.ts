export const normalizeName = (value: string) => {
  if (!value) return ''

  const cleanedValue = value.replace(/[^A-Za-z\s]/g, '')
  const words = cleanedValue.split(/\s+/)
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1),
  )
  return capitalizedWords.join(' ')
}

export const normalizePhoneNumber = (value: String | undefined) => {
  if (!value) return ''

  return value
    .replace(/[\D]/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})(\d+?)/, '$1')
}

export const unmaskPhoneNumber = (value: String | undefined) => {
  if (!value) return ''
  return value.replace(/[^0-9]/g, '')
}

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
})

export const normalizeBalanceBRL = (value: string) => {
  if (!value) return ''
  const onlyDigits = value.replace(/[^\d]/g, '')
  const formattedNumber = formatter.format(Number(onlyDigits) / 100)
  return formattedNumber
}

export const unmaskBalanceURL = (value: string): number | undefined => {
  if (!value) return undefined

  const formattedBalance = value.replace(/[^\d,]/g, '').replace(',', '.')
  return parseFloat(formattedBalance)
}

export const formatNumberToCurrencyBRL = (value: number | undefined) => {
  if (!value) return undefined
  return formatter.format(value)
}
