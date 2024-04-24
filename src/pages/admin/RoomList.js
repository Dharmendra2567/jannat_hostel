import React, { useEffect, useState } from 'react'
import { getAllRooms } from '../../api/roomApi'
import Footer from '../../components/layouts/Footer'
import Navbar from '../../components/layouts/Navbar'
import AdminSidebar from './AdminSidebar'

const RoomList = () => {
  const [rooms, setRooms] = useState([])
  const [error, setError] = useState('')
  const [success,setSuccess] = useState(false)

  useEffect(()=>{
    getAllRooms()
    .then(data=>{
    if(data.error){
      setError(data.error)
    }else{
      setSuccess(true)
      setRooms(data)
    }
  })
  },[])
  return (
    <>
        <Navbar/>
            <div className='container-fluid customMargin'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminSidebar />
                    </div>
                    <div className='col-md-9 p-5 mt-5 pt-5'>
                        <h3>Rooms</h3>
                        <table className='table table-bordered table-hover align-middle text-center'>
                            <thead>
                                <tr className='table-dark'>
                                    <th>S.N</th>
                                    <th>Room Number</th>
                                    <th>Room Type</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rooms.map((room, i) => {
                                    return <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{room.roomNumber}</td>
                                        <td>{room.roomType}</td>
                                        <td>{room.price}</td>
                                        <td>{room.description}</td>
                                        <td>
                                            <div className='btn-group m-2'>
                                                    <button className='btn btn-warning me-2'
                                                        >Edit</button>
                                                    <button className='btn btn-danger'
                                                     >Delete</button>

                                                
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
            {/* <Footer /> */}
    </>
  )
}

export default RoomList