import React, { useRef } from "react"
import Addtodo from "./Addtodo"
import CountTodo from "./CountTodo";
import ShowTodo from "./ShowTodo"
import { todoListSelector } from "../redux/selector";
import { useSelector } from "react-redux";
import todoType from "../type/index";



const Content = () => {
    const inputEl:any = useRef(null);

    const todos = useSelector(todoListSelector);
    
    return (
        <div className="bg-white p-2.5">
            <Addtodo
                inputEl = {inputEl} />
            <ul className="h-80 overflow-scroll" >
                {todos.length > 0 ? (todos.map((todo)=>
                    (<ShowTodo key = {todo.id}
                        todo = {todo}
                    />)
                
                )): ''}

            </ul>
            <CountTodo todos = {todos}/>
        </div>
    )
}
export default Content