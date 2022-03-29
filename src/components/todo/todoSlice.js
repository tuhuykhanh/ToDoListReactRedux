import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [
        {
            id: 0,
            name: 'learn huy khanh', 
            completed: false,
            priority: 'Medium'
        },
        {
            id: 1,
            name: 'learn reactJs', 
            completed: true,
            priority: 'Low'
        },
        {
            id: 2,
            name: 'learn Nodejs', 
            completed: false,
            priority: 'High'
        }
    ],
    reducers:{
        addTodo: (state,action)=>{
            state.push(action.payload)
        },
        toggleTodoStatus: (state,action)=>{
            const currentTodo = state.find( todo => todo.id === action.payload )
            currentTodo.completed = !currentTodo.completed
        },
        deleteTodo: (state, action) =>{
            state.splice(action.payload, 1 )
        }
    }

})