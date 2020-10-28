import React from 'react';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import Home from './Home';
import Comments from './Comments';
import Album from './Album';
import Photo from './Photo';
import Todo from './Todo';
import User from './User';
const APIRoute=()=>{
    return(
        <>
        
            <Switch>
        <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route exact path="/comment" component={Comments}>
            <Comments />
          </Route>
          <Route exact path="/album" component={Album}>
            <Album />
          </Route>
          <Route exact path="/photo" component={Photo}>
            <Photo />
          </Route>
          <Route exact path="/todo" component={Todo}>
            <Todo />
          </Route>
          <Route exact path="/user" component={User}>
            <User />
          </Route>
        </Switch>
    

           
        </>
    );
}
export default APIRoute;

