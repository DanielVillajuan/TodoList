import { useFormik } from 'formik';
import { useTodoContext } from "../hook/useTodoContext";
import { CategoryType, TodoType } from "../types/Todo";
import { initialValues, validationSchema } from '../constant/todo';
import { AddModalProps } from "../types/Modal";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const AddTodoModal = ({ show, handleClose }: AddModalProps): JSX.Element => {
    const { categories, saveNewTodo } = useTodoContext();

    const onSubmit = (value: TodoType) => {
        saveNewTodo(value);
        formik.resetForm();
        handleClose();
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    const onClose = () => {
        formik.resetForm();
        handleClose();
    }

    return (
        <Dialog open={show} onClose={onClose} maxWidth="xs" fullWidth>
            <form onSubmit={formik.handleSubmit}>
                <DialogTitle>Nueva tarea</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="title"
                        label="Título"
                        value={formik.values.title}
                        fullWidth
                        variant="standard"
                        onChange={formik.handleChange}
                        autoComplete="off"
                        inputProps={{ maxLength: 40 }}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="description"
                        label="Descripción"
                        value={formik.values.description}
                        fullWidth
                        variant="standard"
                        onChange={formik.handleChange}
                        autoComplete="off"
                        inputProps={{ maxLength: 100 }}
                    />
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="select">Categoría</InputLabel>
                        <Select
                            labelId="select"
                            name="category_id"
                            value={formik.values.category_id}
                            label="Label"
                            onChange={formik.handleChange}                            
                            onBlur={formik.handleBlur}
                            error={formik.touched.category_id && Boolean(formik.errors.category_id)}
                        >
                            {categories.map((c: CategoryType) => <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>)}
                        </Select>
                        {formik.touched.category_id && <FormHelperText sx={{color: '#d32f2f'}}>{formik.errors.category_id}</FormHelperText>}
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" type="button" onClick={onClose}>Cancelar</Button>
                    <Button variant="contained" type="submit">Crear</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default AddTodoModal;