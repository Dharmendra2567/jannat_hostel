import React from 'react'
import UserSidebar from './UserSidebar'
import { isAuthenticate } from '../../api/userApi'

const UserDashboard = () => {
  const {user} = isAuthenticate();
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3'>
            <UserSidebar/>
          </div>
          <div className='col-md-9 p-3'>
            <h4>User Dashboard</h4>
            <hr/>
            <div className='row shadow rounded'>
              <div className='col-md-3 text-center'>
              <i class="bi bi-person-square text-center" style={{fontSize:'10rem'}}></i>
              </div>
              <div className='col-md-9 text-sstart pt-5 p-3'> 
               <h6 className='p-0 m-0 me-5'><b>Name:&nbsp;&nbsp;&nbsp;&nbsp;</b> {user.firstname }&nbsp;{user.lastname}</h6>
               <span><b>Email:&nbsp;&nbsp;&nbsp;&nbsp;</b> {user.email}</span>
               <p className='p-0 m-0'><b>Address: &nbsp;&nbsp;</b> {user.address}</p>
               <span><b>Role: &nbsp;&nbsp;&nbsp;&nbsp;</b> {user.rol===1?"Admin":"Student"}</span>
               <p className='p-0 m-0'><b>Alloted Room: &nbsp;&nbsp;&nbsp;&nbsp;</b>Not yet</p>
              </div>
            </div>
            <div className='d-flex mt-5 p-2'>
              <button className='btn p-5 w-50 me-1 bg-secondary'><strong>Complaints submitted</strong></button>
              <button className='btn p-5 w-50 me-1 bg-secondary'><strong>Unfair Cases Agains You</strong></button>
              <button className='btn p-5 w-50 bg-secondary'><strong>You Dues</strong></button>
            </div>
            <div className='d-flex mt-2 p-2'>
              <button className='btn p-5 w-50 me-1 bg-secondary'><strong>Change Room</strong></button>
              <button className='btn p-5 w-50 me-1 bg-secondary'><strong>Exit & Entry record</strong></button>
              <button className='btn p-5 w-50 bg-secondary'><strong>Compensation</strong></button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default UserDashboard