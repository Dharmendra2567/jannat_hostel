
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <div className='container-fluid'>
                <Navbar/>
                <div className='d-flex flex-column justify-content center align-items-center py-5'>
                    <div className='col col-md-8'>
                        <div className='card shadow-lg'>
                            <div className='card-body w-100'>
                                <div className='d-flex flex-column justify-content center align-items-center py-3'>
                                    <span><i className='bi bi-person-circle  ' style={{ fontSize: '50px' }}></i></span>
                                </div>
                                <div className='input-group mb-3'>
                                    <span className='input-group-text'>F</span>
                                    <div className='form-floating me-2 shadow-lg'>
                                        <input type='text' className='form-control' id='First Name' placeholder='Enter your first name' />
                                        <label for='First Name'>First Name</label>
                                    </div>
                                    <span className='input-group-text'>L</span>
                                    <div className='form-floating shadow-lg'>
                                        <input type='text' className='form-control' id='lastname' placeholder='Enter your last name' />
                                        <label for='lastname'>lastname</label>
                                    </div>
                                </div>
                                <div className='input-group w-100 mb-3'>
                                    <div className='input-group-text'><i className='bi bi-envelope'></i></div>
                                    <div className='form-floating shadow-lg'>
                                        <input type='email' className='form-control' id='email' placeholder='Enter your last email' />
                                        <label for='email'>Email</label>
                                    </div>
                                </div>
                                <div className='input-group w-100 mb-3'>
                                    <div className='input-group-text'><i className='bi bi-envelope'></i></div>
                                    <div className='form-floating shadow-lg'>
                                        <input type='text' className='form-control' id='address' placeholder='Enter your last address' />
                                        <label for='address'>Address</label>
                                    </div>
                                </div>
                                <div className='input-group mb-3'>
                                    <span className='input-group-text '><i className='bi bi-telephone' /></span>
                                    <div className='form-floating shadow-lg'>
                                        <input type='number' className='form-control' id='phone_number' placeholder='Enter your phone number'></input>
                                        <label for='phone_number'>Phone Number</label>
                                    </div>
                                    <div className='d-flex flex-column input-group w-50 px-3 '>
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
                                    </div>
                                    <div className='input-group'>
                                    <span className='input-group-text '><i className='bi bi-key' /></span>
                                    <div className='form-floating shadow-lg'>
                                        <input type='password' className='form-control' id='password' placeholder='Enter your password'></input>
                                        <label for='password'>password</label>
                                    </div>
                                </div>
                            <div className='text-center'>
                            <button className='btn btn-success my-5 w-50 '>Submit</button>
                            </div>
                            <p>Already have an account?<Link to='/login'>Sign in Here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Register