import React from 'react'
import Footer from '../components/layouts/Footer'
import Navbar from '../components/layouts/Navbar'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className='container-fluid'>
                <Navbar/>
                <div className='d-flex flex-column justify-content center align-items-center py-5'>
                    <div className='col col-md-8 px-5'>
                        <div className='card shadow-lg px-5'>
                            <div className='card-body w-100'>
                                <div className='d-flex flex-column justify-content center align-items-center py-3'>
                                    <span><i className='bi bi-person-circle  ' style={{ fontSize: '50px' }}></i></span>
                                </div>
                               
                                <div className='input-group w-100 mb-3'>
                                    <div className='input-group-text'><i className='bi bi-envelope'></i></div>
                                    <div className='form-floating shadow-lg'>
                                        <input type='email' className='form-control' id='email' placeholder='Enter your last email' />
                                        <label for='email'>Email</label>
                                    </div>
                                </div>
                               
                               
                                    <div className='input-group'>
                                    <span className='input-group-text '><i className='bi bi-key' /></span>
                                    <div className='form-floating shadow-lg'>
                                        <input type='password' className='form-control' id='password' placeholder='Enter your password'></input>
                                        <label for='password'>password</label>
                                    </div>
                                </div>
                            <div className='text-center'>
                            <button className='btn btn-success my-5 w-50 '>Login</button>
                            </div>
                            <p>Not have an account?<Link to='/register'>Register Here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
    </>
  )
}

export default Login