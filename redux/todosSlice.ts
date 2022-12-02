// import { React } from 'react';
import { createSlice } from "@reduxjs/toolkit";

import TodoType from '../type/type'
import { deleteTodo, updateTodo,  getTodo, postTodo, getTodoById, updateTitleTodo } from "./api/api";


const title: string| undefined= ''
const todoState:TodoType[]  = []
const isAdd:boolean = true
const objUpdate:string|undefined =  ''
export const todosSlice = createSlice ({
    name: "todoList",
    initialState:{
        todoState, title, isAdd, objUpdate
    },
    reducers: {
        changetodo:(state, action)=>{
            state.title = action.payload;
        },

        changeIsAdd:(state, action)=>{
            state.isAdd = action.payload;
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

        build.addCase(updateTitleTodo.fulfilled, (state, action) => {
            
            state.todoState = state.todoState.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.title = action.payload.title
                }
                return todo;
            });
            state.isAdd = true
            state.title = "";
        });

        build.addCase(deleteTodo.fulfilled, (state, action) => {
            state.title = "";
            state.isAdd = true
            state.todoState = state.todoState.filter(
                (state) => action.payload.id !== state.id
            );
        });

        build.addCase(getTodoById.fulfilled, (state, action) => {
            state.title = action.payload.title
            state.objUpdate = action.payload.id
            
        });
    },
    
},


);
