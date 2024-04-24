import React, { useEffect, useState } from 'react'
import Footer from '../../components/layouts/Footer'
import Navbar from '../../components/layouts/Navbar'
import AdminSidebar from './AdminSidebar'
import { getAllUsers } from '../../api/userApi'

const UserLists = () => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  const [success,setSuccess] = useState(false)

  useEffect(()=>{
    getAllUsers()
    .then(data=>{
    if(data.error){
      setError(data.error)
    }else{
      setSuccess(true)
      setUsers(data)
    }
  })
  },[])
  return (
    <>
        <Navbar/>
        <div className='container-fluid mt-3 pt-5'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminSidebar />
                    </div>
                    <div className='col-md-9 p-5'>
                        <h3>Customers</h3>
                        <table className='table table-bordered table-hover align-middle text-center'>
                            <thead>
                                <tr className='table-dark'>
                                    <th>S.N</th>
                                    <th>User Name</th>
                                    <th>user Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, i) => {
                                    return <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{user.firstname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role ? "Admin" : "Normal User"}</td>
                                        <td>
                                            <div className='btn-group m-2'>
                                                {user && user.role === 0 &&
                                                    <button className='btn btn-warning'
                                                        >Make Admin</button>
                                                }
                                                {user && user.role === 1 &&
                                                    <button className='btn btn-warning'
                                                    >Make User</button>
                                                }
                                                <button className="btn btn-success ms-2">Enable</button>
                                                <button className='btn btn-danger ms-2' >Disable</button>
                                            </div>
                                        </td>
                                    </tr>
                                })}
                                <tr>
                                    <td colSpan={6}>
                                        <button className='btn btn-primary'>Load More</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default UserLists