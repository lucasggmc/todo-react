import React, { useContext } from 'react'
import { TodoContext } from '../../contexts/TodoContext';
import { TodoContextType } from '../../contexts/TodoContextType';
import { ContainerCenter, Card } from '../general/styles';
import TodoListItem from '../TodoListItem';


const TodoList = () => {
    const { todos } = useContext<TodoContextType>(TodoContext)

    return(
        <ContainerCenter>
            <Card>
                <table className="table">
                    {/* <caption>Lista de tarefas</caption> */}
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Descrição</th>
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