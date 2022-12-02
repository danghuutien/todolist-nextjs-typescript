// import { React } from 'react';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios'
// import {get} from '../database/todoApi'
import todoType from '../type/type'
import { deleteTodo, updateTodo,  getTodo, postTodo } from "./api/api";

const todoState:todoType[]  = []

interface todoAdd{
    title:string,
    checked:boolean
}
export default createSlice ({
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
            .addCase(getTodo.pending, (state, action) => {})
            .addCase(getTodo.fulfilled, (state, action) => {
                state.todoState = action.payload;
                
            });
        build
            .addCase(postTodo.pending, (state, action) => {})
            .addCase(postTodo.fulfilled, (state, action) => {
                state.todoState.push(action.payload);
                state.title = "";
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
});
