import { render, screen } from '@testing-library/react'

import Main from '@/components/main'

describe('<Main/>', () => {
  it('should render the heading', () => {
    // Renderizar
    const { container } = render(<Main />)

    // Busca o elemento e verifica se ele existe
    expect(
      screen.getByRole('heading', { level: 1, name: /react avançado/i })
    ).toBeInTheDocument()

    // gerar um snapshot do componente
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    // Renderizar
    const { container } = render(<Main />)

    // Verifica a cor do background
    expect(container.firstChild).toHaveStyle({ backgroundColor: '#06092b' })
  })
})
