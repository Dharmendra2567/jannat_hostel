import React, { useState } from 'react'
import Footer from '../components/layouts/Footer'
import Navbar from '../components/layouts/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { authenticte, isAuthenticate, signin } from '../api/userApi'

const Login = () => {
    const navigate = useNavigate()
    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')
    let [error, setError]=useState('')
    let [success, setSuccess]= useState(false)
    const user_info = isAuthenticate()

    const handleSubmit=e=>{
        setError('')
        setSuccess(false)
        e.preventDefault()
        signin({email,password})
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess(true)
                authenticte(data)
            }
        })
    }
    const showError= ()=>{
        if(error){
         return <div className="alert alert-danger">{error}</div>
        }
     }
     const redirect =()=>{
         if(success){
            {user_info && user_info.user.role ===1 &&
                navigate('/admin/dashboard')

            }
            {user_info && user_info.user.role===0 &&
            navigate('/')
        }
             
         } 
     }
  return (
    <>
    <div className='container-fluid'>
                <Navbar/>
                {showError()}
                {redirect()}
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
                                        <input type='email' className='form-control'
                                        onChange={e=>setEmail(e.target.value)}
                                        id='email' placeholder='Enter your last email' />
                                        <label for='email'>Email</label>
                                    </div>
                                </div>
                               
                               
                                    <div className='input-group'>
                                    <span className='input-group-text '><i className='bi bi-key' /></span>
                                    <div className='form-floating shadow-lg'>
                                        <input type='password' className='form-control' id='password' placeholder='Enter your password' onChange={e=>setPassword(e.target.value)}></input>
                                        <label for='password'>password</label>
                                    </div>
                                </div>
                            <div className='text-center'>
                            <button className='btn btn-success my-5 w-50 ' type='button' onClick={handleSubmit}>Login</button>
                            </div>
                           
                            <div className='d-flex justify-content-between'>
      <div>
      Do not have an account?<Link to="/register" >Register</Link>
      </div>
      <div>
        <Link to="/forgetpassword">forget Password</Link>
      </div>
    </div>
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