import React from 'react'
import Footer from '../components/layouts/Footer'
import Navbar from '../components/layouts/Navbar'

const Sports = () => {
  return (
    <>
      <div className='container-fluid'>
        <Navbar />
        <div className='row mt-lg-3'>
          <div className='text-center' >
            <h1 className='mt-5 py-2 ' style={{ fontFamily: 'Lato' }}><b>Jannat Sports Facility</b></h1>
            <p className='mt-4 fs-4 px-2 px-lg-5 text-justify'>Daily Physical exercise is essential for students because exercise not only helps students to stay healthy, but it also helps to improve their emotional fitness. In order to be mentally and physically fit, Deo Niwas provides Play Ground outdoor for sporting activities such as Cricket, Volleyball and Badminton that help residents stay as fit and to develop a spirit of sportsmanship. In order to encourage the students in sports activities the Deo Management conducts tournament in sports every year with winning prizes.</p>

            <p className='py-4 px-4 ' style={{ fontSize: '26px' }}><b>DCL (Deo Cricket League) is a platform is a platform sponsored by Deo Niwas Home for the residents to exhibit their sporting talents as well as team work.</b></p>

            <p className='py-4 px-4 fs-4'>The main objective is to encourage skill development, and promote the values of integrity, among the students. </p>
          </div>
          <div className='col-md-4 '>
            <img src='images/sport1.jpg' className='me-lg-0 img-fluid mx-auto d-block' style={{ height: '250px', width: '250px' }}></img>
          </div>
          <div className='col-md-4'>
            <img src='images/sport2.jpg' className='w-100' style={{ height: '410px' }}></img>
          </div>
          <div className='col-md-4'>
            <img src='images/sport3.jpg' className='me-lg-auto ms-lg-0 d-lg-block img-fluid mx-auto d-block' style={{ height: '250px', width: '250px' }}></img>
          </div>
        </div>
        <div className='card mt-5 p-2 w-100 border-0'>
          <h1 className='card-text text-center'>OUTDOOR SPORTS BENEFITS</h1>
          <p className='card-text py-2 text-center fs-5' style={{ fontFamily: 'Roboto' }}>Given below are the reasons why sports and games are essential in a student life:</p>
          <div className='d-flex mx-lg-5 ms-lg-5  justify-content-lg-evenly justify-content-start flex-wrap custom-font'>
            <div className='card border-0 '>
              <div className="d-flex align-items-start">
                <i className="bi bi-check text-warning mt-1 me-3"></i>
                <p className='card-text mb-0'>Improves physical and mental health</p>
              </div>
              <div className="d-flex align-items-start">
                <i className="bi bi-check text-warning mt-1 me-3"></i>
                <p className='card-text mb-0'>Better Sleep</p>
              </div>
              <div className="d-flex align-items-start">
                <i className="bi bi-check text-warning mt-1 me-3"></i>
                <p className='card-text mb-0'>Learn time management and discipline</p>
              </div>
              <div className="d-flex align-items-start">
                <i className="bi bi-check text-warning mt-1 me-3"></i>
                <p className='card-text mb-0'>Better Balance</p>
              </div>
              <div className="d-flex align-items-start">
                <i className="bi bi-check text-warning mt-1 me-3"></i>
                <p className='card-text mb-0'>Strong Immune system</p>
              </div>
            </div>
            <div className='card border-0  '>
              <div className="d-flex align-items-start">
                <i className="bi bi-check text-warning mt-1"></i>
                <p className='card-text mb-0'>Weight Normalizes</p>
              </div>
              <div className="d-flex align-items-start">
                <i className="bi bi-check text-warning mt-1 me-3"></i>
                <p className='card-text mb-0'>Concentration Improves                               </p>
              </div>
              <div className="d-flex align-items-start">
                <i className="bi bi-check text-warning mt-1 me-3"></i>
                <p className='card-text mb-0'>Memory Improves</p>
              </div>
              <div className="d-flex align-items-start">
                <i className="bi bi-check text-warning mt-1 me-3"></i>
                <p className='card-text mb-0'>Depression Decreases</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Sports