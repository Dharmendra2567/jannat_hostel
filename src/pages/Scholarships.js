import React from 'react'
import Footer from '../components/layouts/Footer'
import Navbar from '../components/layouts/Navbar'
import { GoogleFonts } from 'google-fonts'

const Scholarships = () => {
  return (
    <>
      <div className='container-fluid'>
        <Navbar />
        <div className='row'>
          <div className='col-md-2'>
          </div>
          <div className='col-md-8 text-center'>
            <h1 className='mt-lg-5 py-2 ' style={{ fontFamily: 'Lato' }}><b>Jannat Sports Facility</b></h1>
            <p className='py-3 fs-4'>The Deo Niwas will award scholarship to DEO current residents for a total of Rs.1,00,000/- (One Lakh ) in awards.</p>
            <img className='w-100' src='images/scholarships.jpg' style={{ height: '400px' }}></img>
          </div><div className='col-md-2'>
          </div>
          <div className='custom-orange-bg mt-5'>
            <div className='bg-warning mt-5 mx-4 '>
              <h2 className='text-center py-2'>Who is Eligible</h2>
              <p className='text-center' style={{ fontFamily: '', fontSize: '30px' }}>Only Jannat residents! </p>
              <div className='card mt-5 border-0 px-5 w-100'>
                <div className='card-body px-5 d-flex flex-column ' style={{ minHeight: '200px' }}>
                  <p className='card-title fs-3 fw-100 py-3'>Judging Criteria</p>
                  <p className='mb-2' style={{ fontSize: '20px', fontWeight: '300' }}>
                    The judging committee will evaluate scholarship applicants and select scholarship winners based on the following criteria: Academic Scholarship (both graduate and undergraduate)
                  </p>
                  <div className=' py-2'>
                    <p className='mb-2 fs-4 '><b>-</b> 50% Behavior, character and personality/ Be a Helpful Person
                    </p>
                    <p className='mb-2 fs-4 '><b>-</b>30% Academic achievement ( last two semester Cumulative GPA at least 7.0)
                    </p>
                    <p className='mb-2 fs-4 '><b>-</b> 10% Additional leadership / fitness/ involment in games/ social work/ career planning
                    </p>
                    <p className='mb-2 fs-4 '><b>-</b>10% Financial need
                    </p>
                  </div>
                  <p className='card-title fs-3 fw-100 py-3'>Timeline</p>
                  <p className='mb-2' style={{ fontSize: '20px', fontWeight: '300' }}>
                    <b>August 20:</b> Deadline to submit all application materials, please note: no fine or pending payment from Jannat hostel management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Scholarships