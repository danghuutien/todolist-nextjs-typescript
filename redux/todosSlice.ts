// import { React } from 'react';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios'
// import {get} from '../database/todoApi'
import todoType from '../type/type'
import { remove, put, post  } from "../api/api";

const todoState:todoType[]  = []

interface todoAdd{
    title:string,
    checked:boolean
}
export default createSlice ({
    name: "todoList",
    initialState:{
        todoState,
    },
    reducers: {
        setInit:(state, action)=>{
            
                void(state.todoState = action.payload)
            
        },
        addTodo: (state, action: PayloadAction<todoType>) => {
            
            state.todoState.push(action.payload);
        }, 
        removeTodo: (state, action:PayloadAction<{id: string}>) => {
            state.todoState = state.todoState.filter((todo:todoType) => todo.id !== action.payload.id);
            remove(action.payload.id)
            
        },
        checkedTodo: (state, action) => {
            const todo:todoType|undefined = state.todoState.find((todo:todoType) => todo.id === action.payload);
            if (todo) {
                todo.checked = !todo.checked;
                put(todo.checked, action.payload)     
            }
        },


       
    },
});
