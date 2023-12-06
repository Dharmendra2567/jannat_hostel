import React from 'react'
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'

const AboutUs = () => {
  return (
    <>
    <div className='container-fluid'>
      <Navbar/>
      <div className='d-flex flex-column card position-absolute' style={{ width: '1100px', height: '600px', marginLeft: '100px', marginTop: '170px' }}>
        <div className='card-body align-items-end' style={{ marginLeft: '530px' }}>
          <h4 className='cart-title text-warning mt-2'>ABOUT</h4>
          <h3 className='card-text mt-5'>Residents always say JANNAT Niwas Home is a one man, a billion
            dreams, that is Founder of JANNAT Niwas Home at the age of 24 years, Mr. Ranjit
            JANNAT. He is committed to his promise that is called JANNAT Promise.</h3>
          <p className='card-text mt-4 fs-5'>Consistently delivering what he promised for the last
            13 years has made a big difference for many of our Deo Niwas residents. He is committed
            to providing a secure and safe living place for residents with name tag “ Live With Di
            gnity”. His motive is to help students in their academic period. He is always encourages
            and motivates students with his personal attention, parental care, love.</p>
        </div>
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default AboutUs