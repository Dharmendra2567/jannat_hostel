import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      duration: 500,
      transition: '0.4s',
      behavior: 'smooth',
    });
  };
  return (
    <>
      <div className=' row custom-dark-bg text-center mt-5'>
        <div className='col-md-4 col-sm-12 py-lg-5'>
          <div className='   py-5 px-5 mt-5'>
            <h4 className='text-light'>ADDRESS</h4>
            <p className='text-light'>VPO: Nanak Nagri, Chaheru<br />
              <p className='text-muted '>Chaheru on Maheru Road<br />
                Distt: Kapurthala, City: Phagwara<br />
                Punjab, Pin-144411</p></p>
          </div>
        </div>
        <div className='col-md-4 col-sm-12'>
          <div className='mt-3'>
            <div className='  '>
              <h3 className='text-light'>JANNAT BOYS HOSTEL</h3>
            </div>
            <div className=' text-light ' >
              <Link to="" className="text-center text-light text-decoration-none" style={{ fontSize: '60px' }}>
                <i className='bi bi-facebook'></i>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-md-4 col-sm-12 py-lg-5'>
          <div className=' py-5 mt-5 px-5 '>
            <h4 className='text-light'>+91-98765-83155</h4>
            <Link className='text-decoration-none text-light'><i className='bi bi-envelope'></i>   ranadeo@hotmail.com</Link><br />
            <Link className='text-decoration-none text-light'><i className='bi bi-envelope'></i>   ranadeo@jannathostel.com</Link>
          </div>
        </div>

      </div>
      <div className='row bg-dark'>
        <a className='text-center' style={{fontSize:'50px'}}>
        <i className="bi bi-arrow-up-circle-fill text-light " onClick={handleScrollToTop}></i>
        </a>
        <p className='text-muted py-5 text-light text-center'>@2023</p>
      </div>


    </>
  )
}

export default Footer