import { render, screen } from "@testing-library/react"
import EmptyState from "../components/EmptyState"

describe('', (): void => {
    beforeEach((): void=>{
        render(<EmptyState />)
    })

    test('show emoji', (): void => {
        expect(screen.getByText('🚀')).toBeDefined();
    })

    test('show text', (): void => {
        expect(screen.getByText('Nada por aqui')).toBeDefined();
    })
})