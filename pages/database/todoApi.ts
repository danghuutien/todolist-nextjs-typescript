import axios from "axios"
import todoType from '../type/index'

const get = async () =>{
    
    const response = await axios.get('https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist')
    const data:todoType = response.data
    return data
    
}

const post = async (object:{title:string, checked:boolean}) =>{
    const response = await axios.post('https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist', 
    {
        title: object.title,
        checked: false,
    })
    const data:todoType = response.data
    return data
}

const put = async (id:string, checked:boolean) =>{
    const response = await  axios.put('https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist/'+ id,{
        checked: checked
    })
    const data:todoType = response.data
    return data
}

const remove = async (id:string) =>{
    const response = await axios.delete('https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist/'+id)
    const data:todoType = response.data
    return data
}

export {get, post, put, remove}