interface MonthMap {
  [key: string]: number
}

const monthsMap: MonthMap = {
  JAN: 1,
  FEB: 2,
  MAR: 3,
  APR: 4,
  MAY: 5,
  JUN: 6,
  JUL: 7,
  AUG: 8,
  SEP: 9,
  OCT: 10,
  NOV: 11,
  DEC: 12,
}

export const calculateWithdrawFgtsAmount = (
  totalAmount: number,
  birthdayMonth: string,
) => {
  let withdrawAmount = 0

  const birthdayMonthNumber = monthsMap[birthdayMonth]
  const currentMonth = new Date().getMonth() + 1
  if (currentMonth !== birthdayMonthNumber) {
    return withdrawAmount
  }

  if (totalAmount <= 500) {
    withdrawAmount = totalAmount * 0.5
  } else if (totalAmount <= 1000) {
    withdrawAmount = totalAmount * 0.4 + 50
  } else if (totalAmount <= 5000) {
    withdrawAmount = totalAmount * 0.3 + 150
  } else if (totalAmount <= 10000) {
    withdrawAmount = totalAmount * 0.2 + 650
  } else if (totalAmount <= 15000) {
    withdrawAmount = totalAmount * 0.15 + 1150
  } else if (totalAmount <= 20000) {
    withdrawAmount = totalAmount * 0.1 + 1900
  } else {
    withdrawAmount = totalAmount * 0.05 + 2900
  }

  return withdrawAmount
}
