import React from 'react';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
  import APIRoute from './Router';
const Navbar=()=>{
    return(
        <>
    <Router>
    <div className="NavDiv">
            <Nav variant="pills" defaultActiveKey="/home" className="NavTabs">
            <Nav.Item>
                <Nav.Link className="NavItem"><Link to="/">Post</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="NavItem"><Link to="/comment">Comment</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="NavItem"><Link to="/album">Albums</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="NavItem"><Link to="/photo">Photos</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="NavItem"><Link to="/todo">Todos</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="NavItem"><Link to="/user">Users</Link></Nav.Link>
            </Nav.Item>
            </Nav>
            </div>
        <APIRoute />
</Router>
                </>
                )}
export default Navbar;

