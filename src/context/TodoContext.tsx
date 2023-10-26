import { PropsWithChildren, createContext, useEffect, useState } from "react";
import type { TodoType, ContextType, CategoryType } from "../types/Todo";
import { http } from "../service";
import { v4 as uuidv4 } from 'uuid';

const { VITE_APP_ENDPOINT_TASKS, VITE_APP_ENDPOINT_CATEGORIES } = import.meta.env

export const TodoContext = createContext<ContextType | null>(null);

const TodoProvider = ({ children }: PropsWithChildren): JSX.Element => {
    const [todos, setTodos] = useState<TodoType[]>([]);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(()=>{       
        getTodos();     
        getCategories();
    },[]);

    const saveNewTodo = (task: TodoType):void => {
        const taskWithId = {...task, id: uuidv4() };
        http.post(VITE_APP_ENDPOINT_TASKS, taskWithId)
        .then(()=>{ setTodos([...todos, taskWithId]) });
    }

    const categoryById = ( id:string ): CategoryType | undefined => {
        return categories.find(c => c.id === id)
    }

    const handleTaskStatus = (task: TodoType): void => {        
            const taskModify = {...task, completed: !task.completed }
            http.put(VITE_APP_ENDPOINT_TASKS + `/${task.id}` , taskModify )
            .then(()=> {
                const newTodosList = todos.map(t =>{
                    if(t.id === task.id)
                        return taskModify
                    return t
                });
                setTodos([...newTodosList]);
            })        
    }

    async function getTodos(): Promise<void>{
        if(!todos.length){
            setLoading(true);
            const response = await http.get<TodoType[]>(VITE_APP_ENDPOINT_TASKS);
            setTodos(response);
            setLoading(false);
        }
    }

    async function getCategories(): Promise<void>{
        if(!categories.length){
            setLoading(true);
            const response = await http.get<CategoryType[]>(VITE_APP_ENDPOINT_CATEGORIES);
            setCategories(response);
            setLoading(false);
        }       
    }

    return (
        <TodoContext.Provider value={{
            todos, 
            setTodos, 
            categories, 
            getCategories, 
            isLoading, 
            categoryById, 
            handleTaskStatus, 
            saveNewTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;