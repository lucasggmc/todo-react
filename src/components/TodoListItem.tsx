import React from 'react'
import { Todo } from '../models/Todo';

interface TodoListItemProps {
    todo: Todo
}

const TodoListItem = (props: TodoListItemProps) => {   
    return(
        <tr>
            <td>
                <label>
                    <input type="checkbox"/>
                </label>
            </td>
            <td>{props.todo.title}</td>
            <td>
                <button className="btn btn-danger">Remover</button>
            </td>
        </tr>
    );
}

export default TodoListItem
