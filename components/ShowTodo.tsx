import React, { memo, useCallback } from "react"
import { useAppDispatch } from '../hook';
import {updateTodo, deleteTodo} from '../redux/api/api'
import TodoType from "../type/type";



const ShowTodo: React.FC<{todo:TodoType}> = ({todo})=>{
    
    const dispatch = useAppDispatch();
    const onDelete = useCallback(()=>{
        dispatch(deleteTodo(todo.id))

    },[])    

    const onCheck = useCallback(()=>{
        
       dispatch(updateTodo(todo))
        
    },[dispatch, todo])
    return (
        <li className="flex justify-between mt-5 py-2 border-b border-gray-500" >
            <div>
                 <input id={todo.id} type="checkbox" checked={todo.checked} onChange={onCheck} className="cursor-pointer"/>
                <label htmlFor={todo.id}   
                    className={todo.checked ? 'line-through ml-2.5': "ml-2.5"}>{todo.title}
                    </label>
            </div>
            <button onClick={onDelete} className="fa-solid fa-trash cursor-pointer mr-5"></button>
        </li>
    )
}

export default memo(ShowTodo)