import { createSelector } from '@reduxjs/toolkit'


export const todoListSelec = (state) => state.todoList
export const valueFilterSearch = ( state ) => state.filters.search
export const valueFilterStatus = ( state ) => state.filters.status
export const valueFilterPriority = ( state ) => state.filters.priority


export const todoAppRemain = createSelector(
    todoListSelec,
    valueFilterSearch,
    valueFilterStatus,
    valueFilterPriority,
    (todolist, search , status , priority)=>{

        return (
            todolist.filter((todo) => {
                if (status === 'All') {
                    return priority.length
                        ? todo.name.includes(search) && priority.includes(todo.priority)
                        : todo.name.includes(search)
                }
                return (
                    todo.name.includes(search) &&
                    (status === 'Completed'
                        ? todo.completed
                        : !todo.completed) && (priority.length
                            ? priority.includes(todo.priority)
                            : true)
                )
            })
        )

    }
    
)
