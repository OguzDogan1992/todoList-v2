import React, { useState, useEffect, useRef } from 'react'

function Form(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputFocus = useRef(null)

    useEffect(() => {
        inputFocus.current.focus()
    })

    const changeSubmit = e => {
        setInput(e.target.value);
    };

    const submit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return (
        <form className="todoForm" onSubmit={submit}>
            {props.edit ? (
                <>
                <input
                type='text'
                placeholder='Update'
                value={input}
                name='text'
                className='todoInput edit'
                onChange={changeSubmit}
                ref={inputFocus}
            />
            <button className='todoButton edit' >Update</button>
            </>
            ) :
            (
                <>
                <input
                type='text'
                placeholder='Add a new task'
                value={input}
                name='text'
                className='todoInput'
                onChange={changeSubmit}
                ref={inputFocus}
            />
            <button className='todoButton' >Add</button>
            </>
            )}
            
        </form>
    )
}

export default Form