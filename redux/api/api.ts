import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import todoType from '../../type/type'


export const getTodo = createAsyncThunk("todoList/setInit", async () => {
    const get = () => {
        return axios.get("https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist");
    };
    const res = await get();
    return res.data;
})


export const postTodo = createAsyncThunk("todoList/addTodo", 
    async (data:object) => {
        const response = 
            await axios.post("https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist", data);
        return response.data
    
})


export const updateTodo = createAsyncThunk(
    "todoList/checkedTodo",
    async (data:todoType) => {
        const res = await axios.put(`https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist/${data.id}`,{
            checked: !data.checked
        } )
        return res.data;
    }
);

export const remove = async (id:string)=>{
    await axios.delete(`https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist/${id}`)
    
}

export const deleteTodo = createAsyncThunk(
    "todo/delete",
    async (id: string) => {
        const res = await axios.delete(`https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist/${id}`)
        return res.data;
    }
);