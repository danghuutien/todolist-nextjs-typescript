import {configureStore} from '@reduxjs/toolkit'
import todosSlice from './todosSlice'


const store = configureStore({
    reducer: {
        todoList: todosSlice.reducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
