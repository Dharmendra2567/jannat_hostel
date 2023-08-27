import { useParams } from "react-router-dom"
import { API } from "../config"

export const register = (user) => {
    return fetch(`${API}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return console.log(err)
        })
}

//email confirmation
export const emailConfirm=(token)=>{
    return fetch(`${API}/confirm/${token}`,{
        method:'GET',
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))

}
//sign in
export const signin =user=>{
    return fetch(`${API}/signin`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
        })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return console.log(err)
        })
}
//sign out
export const SignOut = ()=>{
    localStorage.removeItem('jwt')
    return fetch(`${API}/signout`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        return console.log(err)
    })
}
export const authenticte = (data) => {
    localStorage.setItem('jwt', JSON.stringify(data))
}
export const isAuthenticate=()=>{
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    } else{
        return false
    }
}
//forget password
export const forgetpassword = ({email}) => {
    return fetch(`${API}/forgetpassword`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return console.log(err)
        })
}
//reset password
export const resetpassword=({token,password})=>{
    return fetch(`${API}/resetpassword/${token}`,
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({password})
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        return console.log(err)
    })
}