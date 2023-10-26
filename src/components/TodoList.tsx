import { Box, CircularProgress } from "@mui/material"
import Title from "./Title";
import TodoItem from "./TodoItem";
import EmptyState from "./EmptyState";

import { StatusTodoType, TodoType } from "../types/Todo";
import { STATUS } from "../enums/Method";
import { useTodoContext } from "../hook/useTodoContext";

const TodoList = ({ status, title }: StatusTodoType ): JSX.Element => {    
    const { todos, isLoading } = useTodoContext();
    const filters = todos.filter(({ completed }:TodoType) => status === STATUS.DONE ? completed : !completed);

    if(isLoading) return <Box sx={{ display: 'flex' }}><CircularProgress /></Box>

    return (
        <Box display="flex" flexDirection="column" marginY="1rem" gap={1}>
            <Title text={title} subtitle/>
            { !filters.length ? <EmptyState /> :
            filters.map(({ id,title,description,completed, category_id }: TodoType) => 
                <TodoItem key={id} id={id} title={title} description={description} completed={completed} category_id={category_id}/>)
            }
        </Box>
    )
}

export default TodoList