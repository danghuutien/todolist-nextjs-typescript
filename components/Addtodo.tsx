import { memo, useCallback, useEffect } from "react";
import { isAddSelector, objUpdateSelector, todoTitleSelector } from "../redux/selector";
import { useAppDispatch, useAppSelector } from '../hook';
import {todosSlice} from "../redux/todosSlice";
import  {getTodo, postTodo, updateTitleTodo} from '../redux/api/api'


const urlGet = "https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist"
const postUrl:string = "https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist"
const Addtodo = () => {

    const dispatch = useAppDispatch();

    const title = useAppSelector(todoTitleSelector)
    let isAdd = useAppSelector(isAddSelector)
    let objUpdate = useAppSelector(objUpdateSelector)
    // console.log(isAdd)
    
    const onSetTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(todosSlice.actions.changetodo(e.target.value))
    }, [])

    const handleTodo = useCallback(()=>{
        if(title.trim() == ''){
            alert('trường này bắt buộc nhập')
        }else{
            dispatch(postTodo({
                title, checked: false,
                
            }))
        }
    },[title])

    const handleTitleTodo = useCallback(()=>{
        if(title.trim() == ''){
            alert('trường này bắt buộc nhập')
        }else{
            dispatch(updateTitleTodo({title, id: objUpdate}))
        }
    },[title])


    useEffect(()=>{
        dispatch(getTodo(urlGet))
    },[dispatch])


    return (

        <div className="flex justify-between text-gray-500 border-b border-solid border-gray-300">
            <input  value={title} onChange={onSetTitle}
                    className="p-2 w-3/4 focus-visible:outline-none "
                    type="text"
                    placeholder="Add tack...."
            />
            {isAdd? <button  
                onClick={handleTodo}
                className="cursor-pointer fa-regular fa-pen-to-square p-2 pr-5"
            ></button>:
            <button  
                onClick={handleTitleTodo}
                className="cursor-pointer fa-solid fa-pencil p-2 pr-5"
            ></button>}
        </div>
    )
};

export default memo(Addtodo);
