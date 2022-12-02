import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import TodoType from '../../type/type'
import { requestGetById,requestPutChecked,requestSaveTodo, requestPutTitle, requestRemoveTodo } from "./requestApi";


export const getTodo = createAsyncThunk("todoList/setInit", async (url:string) => {
    const res = await axios.get(url);
    return res.data;
})

export const getTodoById = createAsyncThunk("todoList/updateTitle", async (id:string) => {
    const res = await requestGetById(id);
    return res.data;
})


export const postTodo = createAsyncThunk("todoList/addTodo", 
    async (data:TodoType) => {
        const response = await requestSaveTodo(data);
        return response.data
    
})


export const updateTodo = createAsyncThunk(
    "todoList/checkedTodo",
    async (data:TodoType) => {
        const res = await requestPutChecked(data)
        return res.data;
    }
);

export const updateTitleTodo = createAsyncThunk(
    "todoList/updateTitleTodo",
    async (data:TodoType) => {
        const res = await requestPutTitle(data)
        return res.data;
    }
);

export const deleteTodo = createAsyncThunk(
    "todo/delete",
    async (id: string) => {
        const res = await requestRemoveTodo(id)
        return res.data;
    }
);



