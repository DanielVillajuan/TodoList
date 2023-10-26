import { STATUS } from "../enums/Method"

export type TodoType = {
    id?: string,
    title: string,
    description?: string,
    category_id: string,
    completed?: boolean
}

export type CategoryType = {
    id?: string,
    name: string,
    color: string | null
} 

export type ContextType = {
    todos: TodoType[],
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>,
    categories: CategoryType[],
    getCategories: () => Promise<void>,
    isLoading: boolean,
    categoryById: (id: string) => CategoryType | undefined,
    handleTaskStatus: (task: TodoType) => void,
    saveNewTodo: (task: TodoType) => void,
}

export type StatusTodoType = {
    status: STATUS,
    title: string
}