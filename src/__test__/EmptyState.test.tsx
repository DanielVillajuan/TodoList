import { render, screen } from "@testing-library/react"
import EmptyState from "../components/EmptyState"

describe('<EmptyState />', (): void => {
    beforeEach((): void=>{
        render(<EmptyState />)
    })

    test('show render', (): void => {
        const { container } = render(<EmptyState />)
        expect(container).toBeDefined()
    })

    test('show emoji', (): void => {
        expect(screen.getByText('🚀')).toBeDefined();
    })

    test('show text', (): void => {
        expect(screen.getByText('Nada por aqui')).toBeDefined();
    })
})