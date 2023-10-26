import Title  from '../components/Title'
import { render, screen } from '@testing-library/react'

describe('<Title />', (): void => {    

    test('show render', (): void => {
        const { container } = render(<Title  text='Titulo'/>)
        expect(container).toBeDefined();
    })

    test('Check to render component without subtitle'), (): void => {
        render(<Title  text='Titulo'/>)
        expect(screen.getByText('Titulo')).toBeDefined();
    }
})