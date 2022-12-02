import axios from "axios"
import TodoType from "../../type/type"

const url = "https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist/"


const requestGetAllTodo = async ()  => {
    const response = await axios.get(url)
    return response 
} 

const requestGetById = async ({id}:TodoType)  => {
    const response = await axios.get(url+id)
    return response 
}

const requestSaveTodo = async (data:TodoType)  => {
    const response = await axios.post(url, data)
    return response
}

const requestPutChecked = async (data:TodoType)  => {
    const response = await axios.put(url+data.id,{
        checked: !data.checked
    } )
    return response
}

const requestPutTitle= async (data:TodoType)  => {
    const response = await axios.put(url+data.id,{
        title: data.title
    } )
    return response
}

const requestRemoveTodo= async ({id}:TodoType)  => {
    const response = await axios.delete(url+id)
    return response
}


export {requestGetAllTodo, requestGetById, requestSaveTodo, requestPutChecked, requestPutTitle, requestRemoveTodo}