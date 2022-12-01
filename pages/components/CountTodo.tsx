import { memo } from "react"

const CountTodo:React.FC<{ todos: Array<{title:string, checked:boolean, id:string}> }> = ({todos})=>{
    // console.log('CountTodo')
    const complete = todos.filter((todo) => todo.checked === true).length
    const open = todos.filter((todo) => todo.checked === false).length

    // const complete = useCallback(todos.filter((todo) => todo.checked === true), [])
    return (
        <div className="flex justify-between py-2 mx-5">
            <p>{todos.length} tasks</p>
            <p>{complete} complete</p>
            <p>{open} open</p>
        </div> 
    )
}
export default memo(CountTodo)