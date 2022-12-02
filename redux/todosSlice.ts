// import { React } from 'react';
import { createSlice } from "@reduxjs/toolkit";

import TodoType from '../type/type'
import { deleteTodo, updateTodo,  getTodo, postTodo } from "./api/api";

const todoState:TodoType[]  = []
export const todosSlice = createSlice ({
    name: "todoList",
    initialState:{
        todoState, title:''
    },
    reducers: {
        changetodo:(state, action)=>{
            state.title = action.payload;
        },
        
    },
    extraReducers: (build) => {
        build
            .addCase(getTodo.fulfilled, (state, action) => {
                state.todoState = action.payload;
                
            });
        build
            .addCase(postTodo.fulfilled, (state, action) => {
                state.title = "";
                state.todoState.push(action.payload);
            });
        build.addCase(updateTodo.fulfilled, (state, action) => {
            state.todoState = state.todoState.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.checked = !todo.checked;
                }
                return todo;
            });
        });

        build.addCase(deleteTodo.fulfilled, (state, action) => {
            state.todoState = state.todoState.filter(
                (state) => action.payload.id !== state.id
            );
        });
    },
    
},


);
