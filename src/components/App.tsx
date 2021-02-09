import React from 'react';
import Navbar from './Navbar';
import TodoList from './TodoList';

const App = () => {
    return (
        <div className="container-fluid">
            <Navbar></Navbar>
            <h1>Meu Primeiro App</h1> 
            <TodoList></TodoList>           
        </div>  
    );
}

export default App;