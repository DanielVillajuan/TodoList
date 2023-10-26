import { TodoType } from "../types/Todo";
import * as yup from 'yup'

export const initialValues: TodoType = {
    title: '',
    description: '',
    category_id: ''
}

export const validationSchema: yup.AnyObjectSchema = yup.object({
    title: yup.string().max(40).required('Campo requerido'),
    description: yup.string().max(100),
    category_id: yup.string().required('Campo requerido')
});