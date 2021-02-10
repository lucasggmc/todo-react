import React from 'react';
import TodoContext from '../contexts/TodoContext';
import Navbar from './Navbar';
import TodoList from './TodoList';

const App = () => {
    return (
        <TodoContext>
        <div className="container-fluid">
            <Navbar></Navbar>
            <h1>Meu Primeiro App</h1> 
            <TodoList></TodoList>           
        </div>  
        </TodoContext>
    );
}

export default App;