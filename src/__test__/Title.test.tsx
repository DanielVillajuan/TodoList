import Title  from '../components/Title'
import { render, screen } from '@testing-library/react'

describe('<Title />', (): void => {    
    test('Check to render component without subtitle'), (): void => {
        render(<Title  text='Titulo'/>)
        expect(screen.getByText('Titulo')).toBeDefined();
    }
})