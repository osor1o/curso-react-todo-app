import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {

    const keyHandler = e => {
        if (e.key === 'Enter')
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        if (e.key === 'Escape')
            props.handleClear()
    }

    return (
        <div role="form" className="todoForm form-row">
            <Grid cols="12 9 10">
                <input 
                    id="description" className="form-control" 
                    placeholder="Adicione uma tarefa"
                    onChange={props.handleChange}
                    value={props.description}
                    onKeyUp={keyHandler}
            />
            </Grid>
            <Grid cols="12 3 2" className="text-center">
                <IconButton bg="primary" icon="plus" onClick={props.handleAdd} />
                <IconButton bg="info" icon="search" onClick={props.handleSearch} />
                <IconButton bg="default" icon="times" onClick={props.handleClear} />
            </Grid>
        </div>
    )
}