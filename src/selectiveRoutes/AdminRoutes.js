import React from 'react'
import { isAuthenticate } from '../api/userApi'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoutes = () => {
  return (
    <>
        {
            isAuthenticate() && isAuthenticate().user.role ===1?
            <Outlet/>:<Navigate to={'/login'}></Navigate>
        }
    </>
  )
}

export default AdminRoutes