import { API } from "../config"

export const addRoom=(info)=>{
    return fetch(`${API}/addroom`,{
        method:'POST',
        headers:{
            // "Content-Type":"application/json"
        },
        body:info
    })
    .then(res => res.json())
        .catch(err => console.log(err))
}
export const getAllRooms = ()=>{
    return fetch(`${API}/getallrooms`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}