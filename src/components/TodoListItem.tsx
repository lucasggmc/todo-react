import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContextType';
import { Todo } from '../models/Todo';

interface TodoListItemProps {
    todo: Todo
}

const TodoListItem = (props: TodoListItemProps) => {   
    const {removeTodo, toggle} = useContext<TodoContextType>(TodoContext)

    const onRemove = (todo: Todo) => {
        removeTodo(todo)
    }

    const handleChange = (event: any) => {
        toggle(props.todo)
    }

    return(
        <tr>
            <td>
                <label>
                    <input type="checkbox" checked={props.todo.done} onChange={handleChange}/>
                </label>
            </td>
            <td>{props.todo.title}</td>
            <td>
                {/* <button className="btn btn-danger" onClick={() => onRemove(props.todo)}>Remover</button> */}
                <a href="#"><i className="fas fa-trash-alt text-danger"  onClick={() => onRemove(props.todo)}></i></a>
            </td>
        </tr>
    );
}

export default TodoListItem
