import React from 'react'
import { render } from '@testing-library/react'

import Home from './page'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
}))

jest.mock('../../contexts/UserContext', () => {
  return {
    useUser() {
      return {
        setUser: () => {},
      }
    },
  }
})

describe('Home page', () => {
  it('should render', () => {
    render(<Home />)
  })
  it('should render InfoSection component', () => {
    const { getByText } = render(<Home />)
    expect(
      getByText('Use uma grana que já é sua e saia do aperto.'),
    ).toBeInTheDocument()
  })
})
