import {configureStore} from '@reduxjs/toolkit'
import {todosSlice} from './todosSlice'


const store = configureStore({
    reducer: {
        todoList: todosSlice.reducer,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
