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
})
