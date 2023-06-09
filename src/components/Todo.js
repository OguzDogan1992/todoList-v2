import React, { useState } from 'react'
import Form from './Form'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { RxPencil2 } from 'react-icons/rx'

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <Form edit={edit} onSubmit={submitUpdate}/>;
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <AiOutlineCloseSquare onClick={() => removeTodo(todo.id)} className='deleteIcon'/>
                <RxPencil2 onClick={() => setEdit({id: todo.id, value: todo.text})} className='editIcon'/>
            </div>
        </div>
    ))
}

export default Todo