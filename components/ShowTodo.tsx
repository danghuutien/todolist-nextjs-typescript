import React, { memo, useCallback } from "react"
import { useAppDispatch } from '../hook';
import {updateTodo, deleteTodo, getTodoById} from '../redux/api/api'
import { todosSlice } from "../redux/todosSlice";
import TodoType from "../type/type";



const ShowTodo = ({id, title, checked}:TodoType)=>{
    
    const dispatch = useAppDispatch();
    const onDelete = useCallback(()=>{
        dispatch(deleteTodo({id}))

    },[])    

    const onCheck = useCallback(()=>{
        
       dispatch(updateTodo({id, title, checked}))
        
    },[dispatch, {id, title, checked}])

    const onUpdateTitleTodo = useCallback(()=>{
        dispatch(todosSlice.actions.changeIsAdd(false))
        dispatch(getTodoById({id}))
         
     },[dispatch, id])
    return (
        <li className="flex justify-between mt-5 py-2 border-b border-gray-500" >
            <div>
                 <input id={id} type="checkbox" checked={checked} onChange={onCheck} className="cursor-pointer"/>
                <label htmlFor={id}   
                    className={checked ? 'line-through ml-2.5': "ml-2.5"}>{title}
                    </label>
            </div>
            <div className="flex">

            <button onClick={onDelete} className="fa-solid fa-trash cursor-pointer mr-5"></button>
            <button onClick={onUpdateTitleTodo} className="fa-solid fa-pen-to-square cursor-pointer mr-5"></button>
            </div>
        </li>
    )
}

export default memo(ShowTodo)