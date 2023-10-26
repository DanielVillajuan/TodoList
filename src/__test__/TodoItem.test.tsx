import { render, screen, waitFor } from "@testing-library/react"
import TodoItem from "../components/TodoItem"
import TodoProvider from "../context/TodoContext"

describe('<TodoItem />',(): void => {

    test('show render', (): void => {
        const { container } = render(
            <TodoProvider >
                <TodoItem title="Task" category_id="123" />
            </TodoProvider>
        )
        expect(container).toBeDefined();
    })

    test('show title',(): void => {
        render(
            <TodoProvider >
                <TodoItem title="Task" category_id="123" />
            </TodoProvider>
        )
        expect(screen.getByText('Task')).toBeDefined()
    })
    test('show description', (): void => {
        render(
            <TodoProvider >
                <TodoItem title="Task" category_id="123" description="Task Description" />
            </TodoProvider>
        )
        expect(screen.getByText('Task Description')).toBeDefined()
    })

    test('checkbox is checked',(): void => {
        const todoItem = render(
            <TodoProvider >
                <TodoItem title="Task" category_id="123" completed={false} />
            </TodoProvider>
        )
        const checkbox = todoItem.container.querySelector('input[type="checkbox"]') as HTMLInputElement
        if(checkbox)
            expect(checkbox.checked).toBe(false)
    })

    test('name from a category', async () => {
        const todoItem = render(
            <TodoProvider >
                <TodoItem title="Task" category_id="c39e10f9-7355-5eac-bdff-99b08f1eb0cc" />
            </TodoProvider>
        )
        await waitFor(():void => {
            expect(todoItem.queryByText('Familia')).toBeDefined()
        })
    })
})