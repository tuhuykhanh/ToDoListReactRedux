import { configureStore } from '@reduxjs/toolkit'
import { filterSlice as filterReducer } from '../components/filter/filterSlice'
import { todoSlice as todoReducer } from '../components/todo/todoSlice'
const store = configureStore({

    reducer: {
        filters: filterReducer.reducer,
        todoList: todoReducer.reducer
    }

})
export default store