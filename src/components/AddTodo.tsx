import React, {useContext} from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TodoContextType } from '../contexts/TodoContextType';
import { Card, ContainerCenter } from './general/styles';


const schema = yup.object().shape({
    title: yup.string().required('Tarefa inválida'),
})

interface AddTodoForm {
    title: string
}

const AddTodo = () => {
    const { addTodo } = useContext<TodoContextType>(TodoContext)
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data: AddTodoForm, e: any) => {
        addTodo(data.title)
        e.target.reset()
        window.location.href = '/'
    }

    return (
        <ContainerCenter>
            <Card>
                <form onSubmit={handleSubmit<AddTodoForm>(onSubmit)}>
                    <h4 className="text-blue">Nova tarefa</h4>
                    <div className="form-group">
                        <input type="text" name="title" id="title" placeholder="Nova tarefa..." className="form-control" ref={register} />
                        <span><small><strong className="text-danger">{errors.title?.message}</strong></small></span>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </div>
                </form>
            </Card>
        </ContainerCenter>
    )
}

export default AddTodo