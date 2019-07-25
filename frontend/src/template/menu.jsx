import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
            <Link to="/todo" className="navbar-brand">
                <i className="fa fa-calendar-check"></i> TodoApp
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse">
                <ul className="navbar-nav mr-auto">
                    <li class="nav-item"><Link to="/todo" className="nav-link">Todo</Link></li>
                    <li class="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                </ul>
            </div>
        </div>
    </nav>
)