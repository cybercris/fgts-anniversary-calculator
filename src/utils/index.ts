export const calculateWithdrawFgtsAmount = (totalAmount: number) => {
  let withdrawAmount = 0

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
