import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from "uuid";
import todosSlice from "../redux/todosSlice";
import axios from "axios";
import todoType from "../type/index";

type AppProps = { inputEl: any };
// console.log(todosSlice)
const Addtodo = ({inputEl}:AppProps) => {
    // console.log('Addtodo')
    const dispatch = useDispatch();
    const [title, setTitle] = useState("")

    const onSetTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
    }, [])

    const handleTodo = useCallback(()=>{
        if(title == ''){
            alert('trường này bắt buộc nhập')
        }else{
            axios.post('https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist', 
            {
                title: title,
                checked: false,
            })
            .then((res)=>{
                return res.data
            })
            .then((data:todoType)=>{
                dispatch(
                    todosSlice.actions.addTodo({
                        id: data.id,
                        title: data.title,
                        checked: data.checked,
                })
                )
                
            })
            setTitle('')
            inputEl.current.focus();
        }
    },[title])


    useEffect(()=>{
        axios.get('https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist')
        .then((res)=>{
            return res.data
        })
        .then((data:todoType)=>{
            dispatch(
                todosSlice.actions.setInit(data)
            )
            
        })
        
    },[])


    return (

        <div className="flex justify-between"
                style={{borderBottom: "1px solid gray", color: "gray"}}
        >
        <input ref={inputEl} value={title} onChange={onSetTitle}
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
