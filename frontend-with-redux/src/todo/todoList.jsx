import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from './todoActions'

const TodoList = props => {
    
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone': ''}>
                    {todo.description}
                </td>
                <td className="text-center">
                    <IconButton
                        bg="success" icon="check"
                        onClick={() => props.markAsDone(todo)}
                        hide={todo.done}
                    ></IconButton>
                     <IconButton
                        bg="warning" icon="undo"
                        onClick={() => props.markAsPending(todo)}
                        hide={!todo.done}
                    ></IconButton>
                    <IconButton
                        bg="danger" icon="trash"
                        onClick={() => props.remove(todo)}
                        hide={!todo.done}
                    ></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className="mt-4 table table-bordered">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)