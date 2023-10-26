import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const useTodoContext = () => {
    const context = useContext(TodoContext)
    if(!context) throw new Error('Context error')
    return context;
}