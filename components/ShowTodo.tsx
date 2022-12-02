import React, { memo, useCallback } from "react"
import { useAppDispatch } from '../hook';
import {updateTodo, deleteTodo} from '../redux/api/api'
import TodoType from "../type/type";



const ShowTodo = ({id, title, checked}:TodoType)=>{
    
    const dispatch = useAppDispatch();
    const onDelete = useCallback(()=>{
        dispatch(deleteTodo(id))

    },[])    

    const onCheck = useCallback(()=>{
        
       dispatch(updateTodo({id, title, checked}))
        
    },[dispatch, {id, title, checked}])
    return (
        <li className="flex justify-between mt-5 py-2 border-b border-gray-500" >
            <div>
                 <input id={id} type="checkbox" checked={checked} onChange={onCheck} className="cursor-pointer"/>
                <label htmlFor={id}   
                    className={checked ? 'line-through ml-2.5': "ml-2.5"}>{title}
                    </label>
            </div>
            <button onClick={onDelete} className="fa-solid fa-trash cursor-pointer mr-5"></button>
        </li>
    )
}

export default memo(ShowTodo)