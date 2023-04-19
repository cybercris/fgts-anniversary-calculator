import React from 'react'
import { render } from '@testing-library/react'
import { Header } from './Header'

describe('Header component', () => {
  it('should render', () => {
    render(<Header />)
  })
  it('should render image', () => {
    const { getByTestId } = render(<Header />)
    expect(getByTestId('headerLogo')).toBeInTheDocument()
  })
})
