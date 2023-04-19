import React from 'react'
import { render } from '@testing-library/react'
import Result from './page'

jest.mock('../../contexts/UserContext', () => {
  return {
    useUser() {
      return {
        user: {
          name: 'Cristiano Soares',
          birthdayMonth: 'DEC',
          balanceFgts: 5000,
          withdrawFgts: 1250,
        },
      }
    },
  }
})

describe('Result page', () => {
  it('should render', () => {
    render(<Result />)
  })
})
