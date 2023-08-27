import React, { useState } from 'react'
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'
import { forgetpassword } from '../api/userApi'

const ForgetPassword = () => {
    const [email, setEmail]=useState('')
    const[success,setSuccess]=useState('')
    const[error,setError]=useState('')
    const handleSubmit=e=>{
        e.preventDefault()
        forgetpassword({email})
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
            return <div className='alert alert-danger'>{error}</div>
        }
    }

    const showSuccess = () => {
        if (success) {
            return <div className='alert alert-success'>{success}</div>
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
                                        <input type='email' className='form-control'
                                        onChange={e => setEmail(e.target.value)}
                                        id='email' placeholder='Enter your last email' />
                                        <label for='email'>Email</label>
                                    </div>
                                </div>     
                            <div className='text-center'>
                            <button className='btn btn-success my-5 w-50 ' type='button'  onClick={handleSubmit}>Submit</button>
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