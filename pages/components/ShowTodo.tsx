import React, { memo, useCallback } from "react"
import { useDispatch } from 'react-redux'
import todosSlice from "../redux/todosSlice";
import axios from "axios";

import todoType from "../type/index";



const ShowTodo: React.FC<{todo:todoType}> = ({todo})=>{
    
    // console.log('ShowTodo')
    const dispatch = useDispatch();
    const onDelete = useCallback(()=>{
        axios.delete('https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist/'+todo.id)
        .then((res)=>{
            return res.data
        })
        .then((data:todoType)=>{
            dispatch(todosSlice.actions.removeTodo({id:data.id}))
        })
    },[])    

    const onCheck = useCallback(()=>{
        dispatch(todosSlice.actions.checkedTodo(todo.id))
    },[])
    return (
        <li className="flex justify-between mt-5 py-2 border-b border-gray-500" >
            <div>
                <input id={todo.id} type="checkbox" onChange={onCheck} className="cursor-pointer"/>
                <label htmlFor={todo.id}   
                    className={todo.checked ? 'line-through ml-2.5': "ml-2.5"}>{todo.title}
                    </label>
            </div>
            <button onClick={onDelete} className="fa-solid fa-trash cursor-pointer mr-5"></button>
        </li>
    )
}

export default memo(ShowTodo)