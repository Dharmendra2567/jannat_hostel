import React from 'react'
import AdminSidebar from './AdminSidebar'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'>
                    <AdminSidebar/>
                </div>
                <div className='col-md-9 '>
                    <h2 className='mt-4'>Admin Dashboard</h2><hr/>
                    <div className='d-flex flex-wrap text-center p-1'>
                       <Link className='w-50 ' to={'/users'}> <button className='btn w-100 shadow-lg fs-4 me-1 p-5 me-1 mb-2' style={{backgroundColor:'#7c9299'}}>Manage Users</button></Link>

                       <Link  className='w-50' to={'/addnewroom'} > <button className='btn w-100 p-5 fs-4 shadow-lg '  style={{backgroundColor:'#7c9299'}}>Add Room</button></Link>

                       <Link  className='w-50' to={'/rooms'} > <button className='btn w-100 p-5 fs-4 shadow-lg '  style={{backgroundColor:'#7c9299'}}>Manage Rooms</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AdminDashboard