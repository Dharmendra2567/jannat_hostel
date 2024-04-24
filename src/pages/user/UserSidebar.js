import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SignOut, isAuthenticate } from '../../api/userApi'

const UserSidebar = () => {
    const {user} = isAuthenticate()
    const navigate = useNavigate()
    const handleSignout=()=>{
        SignOut(user)
        .then(data=>{
          if(data.error){
            console.log(data.error)
          }
          else{
            navigate('/login')
          }
        })
      }
  return (
    <>
      <div className=" shadow-lg d-flex flex-column flex-shrink-0 h-100 p-3 bg-light position-absolute" style={{width: '340px',bottom:'0px'}}>
    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      {/* <i className='bi bi-speedometer2 me-2'></i> */}
      <span className="fs-4">JANNAT<i className='fs-6'>Boys hostel</i></span>
    </Link>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto fs-5">
      

    <li>
        <Link to="/" className="nav-link link-dark">
          <i className='bi bi-house me-2'></i>
          Home
        </Link>
      </li>
    <li>
        <Link to="#" className="nav-link link-dark">
          <i className='bi bi-pencil me-2'></i>
          Edit Profile
        </Link>
      </li>
      <li>
        <Link to="#" className="nav-link link-dark">
          <i className='bi bi-bell me-2'></i>
          Notifications
        </Link>
      </li>
      <li>
        <Link to="#" className="nav-link link-dark">
          <i className='bi bi-gear me-2 '></i>
          Setting
        </Link>
      </li>
      <li>
        <Link to="#" className="nav-link link-dark">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#people-circle"/></svg> */}
          <i className='bi bi-journal-plus me-2'></i>
          Application
        </Link>
      </li>
    </ul>
    <hr/>
    <div className="dropdown" style={{marginBottom:'100px'}}>
      <Link to="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <i alt="" width="32" height="32" className="rounded-circle me-2 bi bi-person-circle"/>
        <strong>{user.firstname}&nbsp; {user.lastname}</strong>
      </Link>
      <ul className="dropdown-menu text-small shadow">
        <li><span className="dropdown-item">{user.firstname}&nbsp;{user.lastname}</span></li>
        <li><span className="dropdown-item">{user.email}</span></li>
        <li><hr className="dropdown-divider"/></li>
        <li><span className="dropdown-item" role={'button'} onClick={handleSignout}>Sign out</span></li>
      </ul>
    </div>
  </div>

    </>
  )
}

export default UserSidebar