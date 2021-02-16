import React, { useContext } from 'react'
import { TodoContext } from '../../contexts/TodoContext';
import { TodoContextType } from '../../contexts/TodoContextType';
import TodoListItem from '../TodoListItem';
import { ContainerCenter, Card } from './styles';


const TodoList = () => {
    const { todos } = useContext<TodoContextType>(TodoContext)

    return(
        <ContainerCenter>
            <Card>
                <table className="table">
                    {/* <caption>Lista de tarefas</caption> */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tarefa</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos?.map(
                                todo => (<TodoListItem key={todo.id} todo={todo}></TodoListItem>)
                            )
                        }
                    </tbody>
                </table>
            </Card>
        </ContainerCenter>
    );
}

export default TodoList;