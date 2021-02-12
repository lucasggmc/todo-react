import React from 'react'
import { Link } from 'react-router-dom'
import { General } from './general';

const Navbar = () => {
    return(        
        // <>
        //     <General>teste</General>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src={"./home-icon.png"} width="40" height="40" style={{margin: 10}}></img>
                <a className="navbar-brand" href="#">Todo App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create" className="nav-link">Nova Tarefa</Link>                            
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                    Navbar text with an inline element
                    </span>
                </div>
            </nav>        
        // </>
    );
}

export default Navbar;