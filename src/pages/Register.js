
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { register } from '../api/userApi'

const Register = () => {
    let [firstname,setFirstname] = useState('')
    let [lastname,setLastname] = useState('')
    let [email,setEmail] = useState('')
    let [address,setAddress]=useState('')
    let [password, setPassword] = useState('')
    let [error, setError] =useState('')
    let [success, setSuccess] = useState(false)

    const handleSubmit=e=>{
        setError('')
        setSuccess(false)
        e.preventDefault()
        register({firstname,lastname,email,address,password})
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess(true)
            }
        })
    }

    const showError= ()=>{
        if(error){
         return <div className="alert alert-danger mt-5 pt-5">{error}</div>
        }
     }
     const showSuccess =()=>{
         if(success){
             return <div className='alert alert-success mt-5 pt-5'>Registration successful. Check your email for verification</div>
         }
     }
    return (
        <>
            <div className='container-fluid'>
                <Navbar/>
                {showError()}
                {showSuccess()}
                <div className='d-flex flex-column justify-content-center align-items-center py-5'>
                    {/* <div className=' d-flex justify-content-center align-items-center  '> */}
                        <div className='card shadow-lg px-lg-5'>
                            <div className='card-body w-100'>
                                <div className='d-flex flex-column justify-content-center align-items-center py-3'>
                                    <span><i className='bi bi-person-circle  ' style={{ fontSize: '50px' }}></i></span>
                                </div>
                                <div className='input-group mb-3 '>
                                    <span className='input-group-text'>F</span>
                                    <div className='form-floating me-2 shadow-lg'>
                                        <input type='text' className='form-control' id='First Name' placeholder='Enter your first name' onChange={e=>{
                                             return setFirstname(e.target.value)}}/>
                                        <label for='First Name'>First Name</label>
                                    </div>
                                    <span className='input-group-text'>L</span>
                                    <div className='form-floating shadow-lg'>
                                        <input type='text' className='form-control' id='lastname' placeholder='Enter your last name' onChange={e=>{
                                             return setLastname(e.target.value)}} />
                                        <label for='lastname'>lastname</label>
                                    </div>
                                </div>
                                <div className='input-group w-100 mb-3'>
                                    <div className='input-group-text'><i className='bi bi-envelope'></i></div>
                                    <div className='form-floating shadow-lg'>
                                        <input type='email' className='form-control' id='email' placeholder='Enter your last email' onChange={e=>{ 
                                            return setEmail(e.target.value)}} />
                                        <label for='email'>Email</label>
                                    </div>
                                </div>
                                <div className='input-group w-100 mb-3'>
                                    <div className='input-group-text'><i className='bi bi-envelope'></i></div>
                                    <div className='form-floating shadow-lg'>
                                        <input type='text' className='form-control' id='address' placeholder='Enter your last address' onChange={e=>{
                                             return setAddress(e.target.value)}}/>
                                        <label for='address'>Address</label>
                                    </div>
                                </div>
                                {/* <div className='input-group mb-3'>
                                    <span className='input-group-text '><i className='bi bi-telephone' /></span>
                                    <div className='form-floating shadow-lg'>
                                        <input type='number' className='form-control' id='phone_number' placeholder='Enter your phone number' onChange={e=>{ return setPhonnumber(e.target.value)}}></input>
                                        <label for='phone_number'>Phone Number</label>
                                    </div>
                                    {/* <div className='d-flex flex-column input-group w-50 px-3 '>
                                        Gender:
                                       <div className=' d-flex flex-row justify-content-evenly'>
                                       <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="male" />
                                            <label class="male" for="male">
                                                Male
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="female" />
                                            <label class="female" for="female">
                                                Female
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="others" />
                                            <label class="others" for="others">
                                                Others
                                            </label>
                                        </div>
                                       </div>
                                    </div> 
                                    </div> */}
                                    <div className='input-group'>
                                    <span className='input-group-text '><i className='bi bi-key' /></span>
                                    <div className='form-floating shadow-lg'>
                                        <input type='password' className='form-control' id='password' placeholder='Enter your password' onChange={e=>{ return setPassword(e.target.value)}}></input>
                                        <label for='password'>password</label>
                                    </div>
                                </div>
                            <div className='text-center'>
                            <button className='btn btn-success my-5 w-50 ' type='submit' onClick={handleSubmit}>Register</button>
                            </div>
                            <p>Already have an account?<Link to='/login'>Sign in Here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            {/* </div> */}
        </>
    )
}

export default Register