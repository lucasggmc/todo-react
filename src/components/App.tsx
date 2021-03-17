import React from 'react';
import Navbar from './navbar/Navbar';
import TodoList from './todo-list/TodoList';
import TodoContext from '../contexts/TodoContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddTodo from './AddTodo';
import '../styles/global.css';

const App = () => {
    return (
        <TodoContext>
            <Router basename="/todo-react">
                <Navbar></Navbar>
                <br />
                <div className="container-fluid">
                    <Switch>
                        <Route path="/create">
                            <AddTodo></AddTodo>
                        </Route>
                        <Route path="/">
                            {/* <h4 className="text-center">Minha lista de tarefas</h4> */}
                            <TodoList></TodoList>
                        </Route> 
                    </Switch>        
                </div>  
            </Router>
        </TodoContext>
    );
}

export default App;