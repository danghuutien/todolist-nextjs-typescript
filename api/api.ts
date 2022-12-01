import axios from "axios"

export const get = async ()=>{
    const response = await axios.get('https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist')
    return response.data
}


export const post = async (title:string, checked:boolean)=>{
    const response = await axios.post('https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist', 
    {
        title: title,
        checked: checked
    })

    return response.data
    
}

export const put = async (checked:boolean, id:string)=>{
    const response =  await axios.put('https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist/'+id,{
        checked: checked
    } )

    return response.data
    
}

export const remove = async (id:string)=>{
    await axios.delete(`https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist/${id}`)
    
}