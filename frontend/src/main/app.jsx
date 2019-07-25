import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/js/all'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

export default props => (
    <div className="container">
        <Routes>
            <Menu />
        </Routes>
    </div>
)