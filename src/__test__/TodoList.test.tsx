import { render, screen, waitFor } from "@testing-library/react"
import TodoList from "../components/TodoList"
import { STATUS } from "../enums/Method"
import TodoProvider from "../context/TodoContext"

describe('<TodoList />', (): void => {

    test('show render',()=> {
        const { container } = render(
            <TodoProvider>
                <TodoList title={"title"} status={STATUS.DONE} />
            </TodoProvider>
        )
        expect(container).toBeDefined();
    })

    test('show spinner while loading data', ()=> {
        const { getByRole } = render(
            <TodoProvider>
                <TodoList title={"title"} status={STATUS.DONE} />
            </TodoProvider>
        )
        const spinner = getByRole('progressbar');
        expect(spinner).toBeDefined()
    })

    test('show title and status from props', async () => {
        const title = 'Titulo';
        render(
            <TodoProvider>
                <TodoList title={"Titulo"} status={STATUS.DONE} />
            </TodoProvider>
        )

        await waitFor((): void => {
            expect(screen.getByText(title)).toBeDefined()
        })
    })
})