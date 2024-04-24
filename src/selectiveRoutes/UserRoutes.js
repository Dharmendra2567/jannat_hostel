import React from 'react'
import { isAuthenticate } from '../api/userApi'
import { Navigate, Outlet } from 'react-router-dom'

const UserRoutes = () => {
  return (
    <>
        {
            isAuthenticate() && isAuthenticate().user.role===0?
            <Outlet/>:<Navigate to={'/login'}></Navigate>
            
        }
    </>
  )
}

export default UserRoutes