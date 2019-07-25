import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/js/all'

import React from 'react'
import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <div className="container">
        <Todo />
        <About />
    </div>
)