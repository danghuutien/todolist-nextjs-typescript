import axios from "axios"
import TodoType from "../../type/type"

const requestGetById = async (id:string)  => {
    const response = await axios.get(`https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist/${id}`)
    return response 
}

const requestSaveTodo = async (data:TodoType)  => {
    const response = await axios.post("https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist", data)
    return response
}

const requestPutChecked = async (data:TodoType)  => {
    const response = await axios.put(`https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist/${data.id}`,{
        checked: !data.checked
    } )
    return response
}

const requestPutTitle= async (data:TodoType)  => {
    const response = await axios.put(`https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist/${data.id}`,{
        title: data.title
    } )
    return response
}

const requestRemoveTodo= async (id:string)  => {
    const response = await axios.delete(`https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist/${id}`)
    return response
}


export {requestGetById, requestSaveTodo, requestPutChecked, requestPutTitle, requestRemoveTodo}