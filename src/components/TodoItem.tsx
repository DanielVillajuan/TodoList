import { Box, Checkbox, Paper, Typography } from "@mui/material"
import { type TodoType } from "../types/Todo";
import { useTodoContext } from "../hook/useTodoContext";

const TodoItem = ({ id, completed ,category_id, description, title } :TodoType ) :JSX.Element => {
    const { categoryById, handleTaskStatus } = useTodoContext();
    const { color, name } = categoryById(category_id) || {}
    return (
        <Paper elevation={3}>
            <Box display="flex" paddingX="1rem" paddingY="0.5rem" gap={2} bgcolor={color || "white"}>
                <Checkbox checked={completed} onClick={()=>{ handleTaskStatus({ id, completed ,category_id, description, title }) }} />
                <Box display="flex" flexWrap="wrap" alignItems="center">
                    <Box display="flex" width="100%">
                        <Typography >{name}:</Typography>
                        <Typography >{title}</Typography>
                    </Box>
                    <Typography variant="body2" >{description}</Typography>
                </Box>
            </Box>            
        </Paper>
    )
}

export default TodoItem;