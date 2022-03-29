import { useState } from "react"
import React from "react"
import { useDispatch } from 'react-redux'
import { todoSlice } from '../todo/todoSlice'
import './childTodo.css'

function TodoChildren({ index,name, priority, completed, id }) {
    const dispatch = useDispatch()

    const [checked, setChecked] = useState(completed)


    const handleChecked = e => {
        setChecked(!checked)
        dispatch(todoSlice.actions.toggleTodoStatus(id))
    }
    const handleDeleteTodo = id => {
        dispatch(todoSlice.actions.deleteTodo(id))  
    }

    return (
        <li
            key={id}
            className={`list-todo-child ${completed ? 'active' : ''}`}>
            <div className='left'>
                <input
                    checked={completed}
                    onChange={handleChecked}
                    type='checkbox'
                />
                {name}
            </div>
            <div className='right'>
                <div className={`box ${priority}`}>
                    {priority}
                </div>
                <div 
                className='trash'
                onClick={()=>handleDeleteTodo(index)}
                >
                    <i className="fa-solid fa-trash-can"></i>
                </div>
            </div>

        </li>
    )
}

export default TodoChildren