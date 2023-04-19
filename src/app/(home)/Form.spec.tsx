import React from 'react'
import { render } from '@testing-library/react'
import fireEvent from '@testing-library/user-event'
import { Form } from './Form'

const push = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      route: '/result',
      pathname: '',
      query: '',
      asPath: '',
      push,
    }
  },
}))

jest.mock('../../contexts/UserContext', () => {
  return {
    useUser() {
      return {
        setUser: (
          name: String,
          balanceFgts: Number,
          birthdayMonth: String,
        ) => {},
      }
    },
  }
})

// const mockRegister = jest.fn((name, phone, balance, birthdayMonth) => {
//   return Promise.resolve({ name, phone, balance, birthdayMonth })
// })

describe('Form component', () => {
  it('should render', () => {
    render(<Form />)
  })
  it('should call onSubmit function when clicked', async () => {
    const { getByTestId } = render(<Form />)
    const inputNameElement = getByTestId('inputName')
    const inputPhoneElement = getByTestId('inputPhone')
    const inputBalanceElement = getByTestId('inputBalance')
    const buttonElement = getByTestId('buttonSubmit')
    await fireEvent.type(inputNameElement, 'Cristiano Soares')
    await fireEvent.type(inputPhoneElement, '81985526666')
    await fireEvent.type(inputBalanceElement, '5000')
    fireEvent.click(buttonElement)
    expect(push).toHaveBeenCalled()
  })
})
