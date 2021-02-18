import React, {useContext} from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TodoContextType } from '../contexts/TodoContextType';
import { Card, ContainerCenter, CircleIcon, Title } from './general/styles';


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
                    {/* <h4 style={{color: '#74cade'}}>Nova tarefa</h4> */}
                    <CircleIcon className="text-center">                        
                    <i className="fas fa-book" style={{fontSize: 30}}></i>
                    </CircleIcon>
                    <Title style={{marginTop: 5}}>Nova tarefa</Title>  
                    <br />                 
                    <div className="form-group">
                        <input type="text" name="title" id="title" placeholder="descrição..." className="form-control" ref={register} />
                        <span><small><strong className="text-danger">{errors.title?.message}</strong></small></span>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary" style={{marginTop: 25}}>Salvar</button>
                    </div>
                </form>
            </Card>
        </ContainerCenter>
    )
}

export default AddTodo