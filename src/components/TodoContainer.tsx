import { Box, Container, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Title from "./Title";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import { STATUS } from "../enums/Method";
import TodoList from "./TodoList";

const TodoContainer = (): JSX.Element =>  {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleShowModal = (): void => { setIsOpen(!isOpen) };

    return (
        <Container fixed sx={{ display: 'flex', justifyContent:'center'}}>
            <Box display="flex" flexDirection="column" paddingTop="4rem" width="70%" height="100vh" position="relative"> 
                <Title text="Lista de tareas" />
                <TodoList title="Pendientes" status={STATUS.PENDING} />
                <TodoList title="Terminadas" status={STATUS.DONE} />
                <Box position="absolute" bottom={20} right={0}>
                    <Fab color="primary" aria-label="add" onClick={handleShowModal}>
                        <AddIcon />
                    </Fab> 
                </Box>
            </Box>
            <AddTodoModal show={isOpen} handleClose={handleShowModal} />
        </Container>
    )
}

export default TodoContainer;