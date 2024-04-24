import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../Design.css'
import { SignOut, isAuthenticate } from '../../api/userApi'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const closeBtnClicked = () => {
    setToggle(false);
  };

  const iconClicked = () => {
    setToggle(!toggle);
  };


  let { user } = isAuthenticate()
  const navigate = useNavigate()

  const handleSignout = () => {
    SignOut()
      .then(data => {
        if (data.error) {
          console.log(data.error)
        }
        else if (data.success) {
          navigate('/login')
        }
      })
  }

  return (
    <>
      <div className='row mt-0 text-center custom-bg fixed-top'>


        <div className='col-4 bg-light btop d-flex align-items-center justify-content-evenly'>
          {/* <nav className="navbar  navbar-expand-lg">
        <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              </nav> */}

          <span className="navbar-icon " onClick={iconClicked}></span>
          {toggle && (
            <div className="side-bar ">
              <button className="close-btn" type="button" onClick={closeBtnClicked}>
                Close
              </button>
              <div className="list-in-side">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/aboutus">About</Link>
                  </li>
                  <li>
                    <Link to="#">Registration</Link>
                  </li>
                  <li>
                    <Link to="/sports">Sports</Link>
                  </li>
                  <li>
                    <Link to="/scholarships">Scholarship</Link>
                  </li>
                  <li>
                    <Link to="/faqs">FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <div className='slant-line '></div>
          <p className=' jannat-edit' style={{ fontFamily: 'Robust' }}>JANNAT</p><br></br>
         
        </div>
        <div className=' col-4 '>
          <div className="container-fluid">
            <nav className="navbar  navbar-expand-lg">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-0 g-0 ">
                  <li className="nav-item  ">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/aboutus">About</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Registration
                    </Link>
                    <ul className="dropdown-menu custom-bg">
                      <li><Link className="dropdown-item" to="/booking">Booking Room</Link></li>
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
        <div className='col-4 d-flex justify-content-end align-items-center align-items-sm-center px-5'>
          {!user &&
            <>
              {/* <button className='btn btn-info button-border ms-md-2 '> <Link to='/register' className='customFont'>Register<i className="bi bi-box-arrow-right text-dark"></i></Link></button> */}
              <button className='btn btn-info  button-border ms-2'><Link to='/login' className='customFont'>Login<i className="bi bi-box-arrow-left text-dark customFont"></i></Link></button>
            </>
          }
          {user && user.role === 1 &&
            <button className='btn btn-info button-border me-2 '> <Link to='/admin/dashboard' className='customFont'>{user.firstname}<i className="bi bi-person-fill text-dark"></i></Link></button>
          }
          {user && user.role === 0 &&
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