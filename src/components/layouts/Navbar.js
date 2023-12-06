import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../Design.css'
import { SignOut, isAuthenticate } from '../../api/userApi'

const Navbar = () => {
  let {user} = isAuthenticate()
  const navigate = useNavigate()

  const handleSignout=()=>{
    
    SignOut()
    .then(data=>{
      if(data.error){
        console.log(data.error)
      }
      else if(data.success){
        navigate('/login')
      }
    })
  }

  return (
    <>
      <div className='row mt-0 text-center position-relative custom-bg fixed-top'>
        <div className='col-md-4 bg-light btop'>
          <div className='slant-line d-none d-md-block'></div>
          <h1 style={{ fontFamily: 'Ravie', fontSize: '30px' }}>JANNAT</h1>
        </div>
        <div className='col-md-4 '>
          <div className="container-fluid">
            <nav className="navbar  navbar-expand-lg">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-0 g-0 ">
                  <li className="nav-item  ">
                    <Link  className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/aboutus">About</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Registration
                    </Link>
                    <ul className="dropdown-menu custom-bg">
                      <li><Link className="dropdown-item" to="#">Booking Room</Link></li>
                      <li><Link className="dropdown-item" to="#">Laundry</Link></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><Link className="dropdown-item" to="#">Wifi</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sports">Sports</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to={"/scholarships"}>Scholarships</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to={"/faqs"}>FAQs</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className='col-md-4 d-flex justify-content-end align-items-center'>
          {!user &&
          <>
          <button className='btn btn-info button-border'> <Link to='/register' className='customFont'>Register<i className="bi bi-box-arrow-right text-dark"></i></Link></button>
          <button className='btn btn-info ms-2 button-border'><Link to='/login' className='customFont'>Login<i className="bi bi-box-arrow-left text-dark customFont"></i></Link></button>
          </>
          }
          {user && user.role ===1 &&
           <button className='btn btn-info button-border me-2 '> <Link to='/admin/dashboard' className='customFont'>{user.firstname}<i className="bi bi-person-fill text-dark"></i></Link></button>
          }
          {user && user.role ===0 &&
           <button className='btn btn-info button-border me-2'> <Link to='/user/dashboard' className='customFont'>{user.firstname}<i className="bi bi-person-fill text-dark"></i></Link></button>
          }
          {user &&
            <button className='btn btn-info button-border' onClick={handleSignout}> <Link className='customFont'>Logout<i className="bi bi-box-arrow-right text-dark"></i></Link></button>
          }
            </div>
      </div>
    </>
  )
}

export default Navbar