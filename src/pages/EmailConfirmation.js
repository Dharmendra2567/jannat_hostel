import React, { useEffect, useState } from 'react'

import Footer from '../components/layouts/Footer'
import { Link, useParams } from 'react-router-dom'
import { emailConfirm } from '../api/userApi'
import Navbar from '../components/layouts/Navbar'

const EmailConfirmation = () => {
    const params = useParams()
    const token = params.token
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    // const {token} = useParams()
    useEffect(() => {
        setError('');
        setSuccess('');
        emailConfirm(token)
            .then(data => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setSuccess(data.message);
                }
            })
            .catch(err => console.log(err))
    }, []);


    // const showError = () => {
    //     if (error) {
    //         return <div className='alert alert-danger'>{error}</div>;
    //     }
    // };

    // const showSuccess = () => {
    //     if (success) {
    //         return <div className='alert alert-success'>{success} <Link to="/login">Login</Link>.</div>;
    //     }
    // };

    return (
        <>
            <div className='container-fluid'>
                <Navbar />
                <div className='card'>
                    {success && (
                        <div className='alert alert-success'>{success} <Link to="/login">Login</Link>.</div>
                    )}
                    {error && !success && (
                        <div className='alert alert-danger'>{error}</div>
                    )}
                </div>
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default EmailConfirmation