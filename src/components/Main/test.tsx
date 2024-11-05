import { render, screen } from '@testing-library/react'
import Main from './index'

describe(Main, () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(screen.queryByText('Typescript, ReactJS, NextJS e Styled Components')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092B',
      color: '#FFFFFF'
    })
  })
})
