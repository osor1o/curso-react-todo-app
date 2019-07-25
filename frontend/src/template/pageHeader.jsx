import React from 'react'

export default props => (
    <div className="pb-2 mt-4 mb-4 border-bottom">
        <h1>{props.name} <small class="text-muted">{props.small}</small></h1>
    </div>
)