import { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoSlice } from './todoSlice'
import { v4 as uuidv4 } from 'uuid'
import TodoChildren from '../child/childTodo'
import { todoAppRemain } from '../../store/selector'
import './todo.scss'


function Todo() {

    const todoList = useSelector(todoAppRemain)
    const dispatch = useDispatch()
    const constant = ['High', 'Medium', 'Low']
    const [box, setBox] = useState(false)
    const [name, setName] = useState('Medium')
    const [enterInput, setEnterInput] = useState('')
    const elementInput = useRef()

    const handleName = name => {
        setName(name)
    }
    const handleAllTodo = e => {
        if (enterInput === '') {
            return alert('vui long nhap ten')
        }
        dispatch(todoSlice.actions.addTodo({
            id: uuidv4(),
            name: enterInput,
            priority: name,
            completed: false
        }))
        setEnterInput('')
        elementInput.current.focus()
    }
    return (
        <div className='container-todo'>
            <div className='todoList'>
                <ul className='list-todo'>
                    {todoList.map((todoChild, index) => (

                        <TodoChildren
                            index={index}
                            key={todoChild.id}
                            name={todoChild.name}
                            priority={todoChild.priority}
                            completed={todoChild.completed}
                            id={todoChild.id}

                        />

                    ))}
                </ul>
            </div>
            <div className='inputArea'>

                <input
                    ref={elementInput}
                    value={enterInput}
                    className='entertodo'
                    onChange={e => setEnterInput(e.target.value)}
                />
                <div
                    onClick={() => setBox(!box)}
                    className='option'
                >
                    {box &&
                        <ul className='choice'>
                            {constant.map((boxItem, index) => <li
                                key={index}
                                className={`${boxItem}`}
                                onClick={() => handleName(boxItem)}
                            >{boxItem}</li>)}
                        </ul>
                    }
                    <div className={`option-child ${name}`}>
                        {name}
                    </div>
                    
                </div>
                <button onClick={handleAllTodo}> Add </button>
            </div>
        </div>
    )
}

export default Todo