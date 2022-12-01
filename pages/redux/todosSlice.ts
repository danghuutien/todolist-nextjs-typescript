// import { React } from 'react';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios'
import {get} from '../database/todoApi'
import todoType from '../type/index'





const todoState:todoType[]  = []


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
            
        },
        checkedTodo: (state, action) => {
            const todo:todoType|undefined = state.todoState.find((todo:todoType) => todo.id === action.payload);
            if (todo) {
                axios.put('https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist/'+action.payload,{
                    checked: todo.checked
                } )
                todo.checked = !todo.checked;
            }
        },

        getTodos: ()=>{
            async ()=>{
                const data =  await get()
                return data
            }
        }

       
    },
});
