import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import TodoContainer from "../components/TodoContainer"
import TodoProvider from "../context/TodoContext"

describe('<TodoContainer />', (): void => {
    beforeEach((): void =>{
        render(
            <TodoProvider>
                <TodoContainer />
            </TodoProvider>)
    })

    test('show title', (): void => {
        expect(screen.getByText('Lista de tareas')).toBeDefined()
    })

    test('show subtitle pending and finish', async () => {
       await waitFor((): void => {
            expect(screen.getByText('Pendientes')).toBeDefined();
            expect(screen.getByText('Terminadas')).toBeDefined();
       })
    })

    test('show a button add task', ():void => {
        const { container } = render(
            <TodoProvider>
                <TodoContainer />
            </TodoProvider>)
        const button = container.querySelector('button');
        expect(button).not.toBeNull()
    })

    test('showld show the modal on screen', ()=> {
        const { container } = render(
            <TodoProvider>
                <TodoContainer />
            </TodoProvider>)
        const button = container.querySelector('button');
        if(button){
            fireEvent.click(button);
        }
        expect(screen.queryByText(/Nueva tarea/i)).toBeDefined()
    })

})