import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/template';
import Tasks from './components/tasks';
import CreateForm from './components/tasks/createForm';
import EditForm from './components/tasks/editForm';
import Exercises from './components/exercises';

export default function Routes(){
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Tasks} />
                <Route exact path="/create" component={CreateForm} />
                <Route exact path="/edit/:id" component={EditForm} />
                <Route exact path="/exercises" component={Exercises} />
            </Switch>        
        </BrowserRouter>
    )
}