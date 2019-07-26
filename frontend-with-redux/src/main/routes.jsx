import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <React.Fragment>
        <BrowserRouter>
            {props.children}
            <Switch>
                <Route path='/todo' exact={true} component={Todo} />
                <Route path='/about' exact={true} component={About} />
                <Route path='*' component={Todo} />
            </Switch>
        </BrowserRouter>
    </React.Fragment>
)