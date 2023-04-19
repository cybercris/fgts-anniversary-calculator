import React from 'react'
import { render } from '@testing-library/react'
import { InfoSection } from './InfoSection'

describe('InfoSection component', () => {
  it('should render', () => {
    render(<InfoSection title="teste" />)
  })
  it('should have title', () => {
    const title = 'teste'
    const { getByTestId } = render(<InfoSection title={title} />)
    const titleNode = getByTestId('titleInfoSection')
    expect(titleNode).toBeInTheDocument()
    expect(titleNode.innerHTML).toBe(title)
  })
})
