import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

export default props => {
    return(
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand>
        <img
                 alt=""
                 src="https://img.icons8.com/plasticine/100/000000/task.png"
                 width="30"
                 height="30"
                 className="d-inline-block align-top"
        />{' '}
        <Link className="links" to="/">Task Register</Link>    
        </Navbar.Brand>
        <Nav className="mr-auto">
            <Link className="links" to="/exercises">Exercises</Link>
        </Nav>
        </Navbar>

    )
}

