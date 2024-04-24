import React, { useState } from 'react'
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'
import { forgetpassword, resetpassword } from '../api/userApi'
import { useParams } from 'react-router-dom'

const ForgetPassword = () => {
    const [password, setPassword]=useState('')
    const[success,setSuccess]=useState('')
    const[error,setError]=useState('')
    const params= useParams()
    const token = params.token
    const handleSubmit=e=>{
        e.preventDefault()
        resetpassword({token,password})
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess('')
            }
            else{
                setSuccess(data.message)
                setError('')
            }
        })
    }
    const showError = () => {
        if (error) {
            return <div className='alert alert-danger mt-5 pt-5'>{error}</div>
        }
    }

    const showSuccess = () => {
        if (success) {
            return <div className='alert alert-success mt-5 pt-5'>{success}</div>
        }
    }
  return (
    
     <>
    <div className='container-fluid'>
                <Navbar/>
                {showError()}
                {showSuccess()}
                {/* {success && (
                        <div className='alert alert-success'>{success}</div>
                    )}
                    {error && !success && (
                        <div className='alert alert-danger'>{error}</div>
                    )} */}

                <div className='d-flex flex-column justify-content center align-items-center py-5'>
                    <div className='col col-md-8 px-5'>
                        <div className='card shadow-lg px-5'>
                            <div className='card-body w-100'>
                               
                                <div className='input-group w-100 py-5'>
                                    <div className='input-group-text'><i className='bi bi-envelope'></i></div>
                                    <div className='form-floating shadow-lg'>
                                        <input type='password' className='form-control'
                                        onChange={e => setPassword(e.target.value)}
                                        id='password' placeholder='Enter new password' />
                                        <label for='password'>Password</label>
                                    </div>
                                </div>     
                            <div className='text-center'>
                            <button className='btn btn-success my-5 w-50 ' type='button'  onClick={handleSubmit}>Reset Password</button>
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

export default ForgetPassword