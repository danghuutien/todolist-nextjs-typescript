import { memo, useCallback, useEffect } from "react";
import { todoTitle } from "../redux/selector";
import { useAppDispatch, useAppSelector } from '../hook';
import todosSlice from "../redux/todosSlice";
import  {getTodo, postTodo} from '../redux/api/api'

const Addtodo = () => {

    const dispatch = useAppDispatch();

    const title = useAppSelector(todoTitle)

    const onSetTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(todosSlice.actions.changetodo(e.target.value))
    }, [])

    const handleTodo = useCallback(()=>{
        if(title.trim() == ''){
            alert('trường này bắt buộc nhập')
        }else{
            dispatch(postTodo({title: title, checked: false}))
        }
    },[title])


    useEffect(()=>{
        dispatch(getTodo())
    },[dispatch])


    return (

        <div className="flex justify-between"
                style={{borderBottom: "1px solid gray", color: "gray"}}
        >
        <input  value={title} onChange={onSetTitle}
                className="p-2 w-3/4 focus-visible:outline-none "
                type="text"
                placeholder="Add tack...."
        />
        <button  
            onClick={handleTodo}
            className="cursor-pointer fa-regular fa-pen-to-square p-2 pr-5"
        ></button>
        </div>
    )
};

export default memo(Addtodo);
