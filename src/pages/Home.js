import React, { useState } from 'react'
import Navbar from '../components/layouts/Navbar'
import Carousel from '../components/layouts/Carousel'
import CardBody from '../components/CardBody'
import Footer from '../components/layouts/Footer'
import Accomodation from '../components/layouts/Accomodation'
import { Link } from 'react-router-dom'
// import AboutUs from './AboutUs'


const Home = () => {
  const [activeCard, setActiveCard] = useState(null);
  const handleButtonClick = (cardIndex) => {
    setActiveCard(cardIndex);
  }
  return (
    <>
      <div className=' container-fluid'>
        <Navbar />

        <div className='row mt-1'>
          <div className='col cols-sm-12 cols-md-6 cols-lg-3'>
            {/* cardbody */}
            <div divclassName='card shadow-lg mt-2 w-100 ' >
              <div className='card-body shadow-lg ' style={{ fontFamily: 'Agency' }}>
                <button className='btn btn-success w-100  mb-2'>FAQs</button>
                <button className='btn btn-success w-100 mb-2'>Register Here</button>
                <button className='btn btn-success w-100  mb-2'>Know About Rent</button>
                <button className='btn btn-success w-100  mb-2'>Cooking Schedule</button>
                <button className='btn btn-success w-100  mb-2'>Function & Events </button>
                <button className='btn btn-success w-100  mb-2'>Cooking Schedule</button>
              </div>
            </div>
          </div>
          <div className='col-lg-9'>
            <Carousel />
          </div>
        </div>
        <CardBody />
        <Accomodation />
        {/* live with dignity */}

        <div className='row mt-5 ms-1 me-1 position-relative' style={{ backgroundImage: "radial-gradient(circle farthest-corner at 46% 87.5%, rgba(177, 232, 248, 1) 13.3%, rgba(49, 75, 125, 1) 89.7%)" }}>
          <h1 className='text-center mt-2' style={{ fontFamily: 'algerian' }}>LIVE  WITH DIGNITY!</h1>
          <div className='position-relative' style={{ display: 'flex', justifyContent: 'center' }}>
            <img className='small-screen-image w-100 m-2' src='https://lv2.be1.myftpupload.com/wp-content/uploads/2021/03/1.jpg' height='auto' />
          </div>
          <div className='card position-relative bg-warning ms-5' style={{ height: '400px', width: '400px' }}>
            <div className='card-body'>
              <h4 className='card-text fs-1 me-3'>We are happy to answer questions<br />Fill out the form or use WhatsApp</h4>
              <button className='btn btn-dark mt-5'>ENQUIRE NOW</button>
            </div>
            <div className='position-absolute' style={{ marginLeft: '350px', top: '75px' }}>
              <img className='large-screen-image size' src='https://lv2.be1.myftpupload.com/wp-content/uploads/2021/03/1.jpg' />
            </div>
          </div>
        </div>


        {/* aoubtus  */}

        <div className='row mt-5 position-relative lg-screen'>
          <img src='https://c8.alamy.com/comp/2GNCB8T/modern-youth-hostel-building-accommodation-for-students-and-young-people-building-exterior-2GNCB8T.jpg'
            style={{ opacity: '0.3', height: '850px' }} />
          <div className=' card position-absolute' style={{ width: '1100px', height: '', marginLeft: '100px', marginTop: '170px' }}>
            <div className='card-body' style={{ marginLeft: '530px' }}>
              <h4 className='cart-title text-warning mt-2'>ABOUT</h4>
              <h3 className='card-text mt-5'>Residents always say JANNAT Niwas Home is a one man, a billion
                dreams, that is Founder of JANNAT Niwas Home at the age of 24 years, Mr. Ranjit
                JANNAT. He is committed to his promise that is called JANNAT Promise.</h3>
              <p className='card-text mt-4 fs-5'>Consistently delivering what he promised for the last
                13 years has made a big difference for many of our Deo Niwas residents. He is committed
                to providing a secure and safe living place for residents with the name tag “ Live With Di
                gnity”. His motive is to help students in their academic period. He always encourages
                and motivates students with his personal attention, parental care, love.</p>
            </div>
          </div>
          <img src='aboutus.jpg' className='position-absolute' style={{ height: '700px', width: '450px', marginLeft: '170px', bottom: '0', marginBottom: '44px' }} />
        </div>

        <div className='row mt-5 position-relative md-screen'>
          <img src='https://c8.alamy.com/comp/2GNCB8T/modern-youth-hostel-building-accommodation-for-students-and-young-people-building-exterior-2GNCB8T.jpg'
            style={{ opacity: '0.3', height: '850px' }} />
          <div className='position-absolute '>
            <div className=' card' style={{ width: '500', height: '', marginLeft: '20px', marginTop: '170px' }}>
              <div className='card-body' style={{ marginLeft: '300px' }}>
                <h4 className='cart-title text-warning mt-2'>ABOUT</h4>
                <h3 className='card-text mt-5'>Residents always say JANNAT Niwas Home is a one man, a billion
                  dreams, that is Founder of JANNAT Niwas Home at the age of 24 years, Mr. Ranjit
                  JANNAT. He is committed to his promise that is called JANNAT Promise.</h3>
                <p className='card-text mt-4 fs-5'>Consistently delivering what he promised for the last
                  13 years has made a big difference for many of our Deo Niwas residents. He is committed
                  to providing a secure and safe living place for residents with the name tag “ Live With Di
                  gnity”. His motive is to help students in their academic period. He always encourages
                  and motivates students with his personal attention, parental care, love.</p>
              </div>
            </div>
          </div>


          <img src='aboutus.jpg' className='position-absolute col-md-3' style={{ height: '700px', width: '280px', marginLeft: '40px', bottom: '0', marginBottom: '44px' }} />
        </div>
        {/* end of about us */}
        {/* cards */}
        <div className='card-group text-center mt-5 d-flex flex-wrap justify-content-evenly'>
          <div className='card shadow-lg ms-lg-5'>
            <div className='card-body'>
              <div className='card-title'><i className='bi bi-geo-alt-fill text-warning fs-2'></i></div>
              <h5 className='card-title'>Near LPU University</h5>
              <p className='card-text mt-4' style={{ fontWeight: '500' }}>Deo Niwas is located at just a 300-meter walking distance to LPU University</p>
            </div>
          </div>
          <div className='card shadow-lg lg-ms-5'>
            <div className='card-body'>
              <div className='card-title'><i className='bi bi-house-door-fill text-warning fs-2'></i></div>
              <h5 className='card-title'>A Second Home</h5>
              <p className='card-text mt-4' style={{ fontWeight: '500' }}>Our aim to provide best facilities focusing on students where color, caste or religion do not form barriers to form bonds, learn and live together in harmony. </p>
            </div>
          </div>
          <div className='card shadow-lg lg-ms-5'>
            <div className='card-body'>
              <div className='card-title'><i className='bi bi-people-fill text-warning fs-2'></i></div>
              <h5 className='card-title'>Caring Staff</h5>
              <p className='card-text mt-4' style={{ fontWeight: '500' }}>Our staff is super friendly and will always lend a helping hand whenever you need.</p>
            </div>
          </div>
          <div className='card shadow-lg lg-ms-5'>
            <div className='card-body'>
              <div className='card-title'><i className='bi bi-suit-heart-fill text-warning fs-2'></i></div>
              <h5 className='cart-title'>Comfort</h5>
              <p className='card-text mt-4' style={{ fontWeight: '500' }}>The warm and friendly environment that we provide will make you feel at home.</p>
            </div>
          </div>
        </div>
        {/* end of cards */}

        {/* join our home */}
        <div className=' row mt-5 me-3 ms-3 bg-info text-center'>
          <div>
            <h1 className='mt-5' style={{ fontSize: '60px', marginTop: '0px' }}><b>Join Our Home!</b></h1>
            <button className='btn btn-dark mt-2 mb-5 ddrk' ><Link className='text-white text-decoration-none' to={'/register'} >SIGN UP FOR FREE NEWSLETTERS</Link> </button>
          </div>
        </div>
        {/* end of join our home */}
        {/* sports,scholarship,COVID19 */}
        <div className='row mt-5 me-3 ms-3 bg-dark text-center custom-dark-bg'>
          <h1 className='mt-5 text-light ms-3 me-3'>Our aim is to provide high quality services at Deo Hostel under affordable rent to our residents and We Care
          </h1>
          <div className='card-group mt-5 ms-3 me-3 d-flex justify-content-evenly'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-warning'>Single Occupancy</h5>
                <p className='card-text mt-4'>Rs. 90,000/-</p>
              </div>
            </div>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-warning'>Double Occupancy</h5>
                <p className='card-text mt-4'>Rs. 80,000/-</p>
              </div>
            </div>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-warning'>Triple Occupancy</h5>
                <p className='card-text mt-4'>Rs. 85,000/-</p>
              </div>
            </div>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-warning'>4/5 Seaters</h5>
                <p className='card-text mt-4'>Rs. 70,000/- , Rs. 65,000</p>
              </div>
            </div>
          </div>
          <div className='mt-5 text-center mb-3'>
            <h6 className='text-warning'>First Thirty Residents Early Booking Will Get Benefit Rebate Upto Rs.2,500/-</h6>
          </div>
          <div className='mb-5 '>
            <div className=' mt-5 me-lg-3 ms-lg-3 d-sm-block d-lg-flex justify-content-lg-evenly'>
              <button className={`btn btn-light custom-btn ddrk  w-100 ${activeCard === 0 || activeCard === null ? 'active' : ''}`} onClick={() => handleButtonClick(0)}>Jannat Sports Faculty</button>
              <button className={`ms-lg-3 btn btn-light custom-btn ddrk w-100 ${activeCard === 1 ? 'active' : ''}`} onClick={() => handleButtonClick(1)}>
                Scholarship
              </button>
              <button className={`ms-lg-3 me-3 btn btn-light custom-btn ddrk w-100 ${activeCard === 2 ? 'active' : ''}`} onClick={() => handleButtonClick(2)}>
                COVID19
              </button>
            </div>
            {activeCard === 0 | activeCard === null &&
              <div className=' ms-lg-3 card ' >
                <div className='row '>
                  <div className='col-md-7'>
                    <div className='card-body '>
                      <p className='card-text mt-5 mb-3 fs-4 text-start ms-lg-5' style={{ fontFamily: 'Open Sans' }}> Daily Physical exercise is essential for students because exercise not only helps students to stay healthy, but it also helps to improve their emotional fitness. In order to be mentally and physically fit, Deo Niwas provides Play Ground outdoor for sporting activities such as Cricket, Volleyball and Badminton that help residents stay as fit and to develop a spirit of sportsmanship. In order to encourage the students in sports activities the Deo Management conducts tournament in sports in every year with winning prizes.</p>
                      <div className='ms-5 text-lg-start text-sm-center'>
                        <Link to={'/sports'} className=' '>Read More</Link>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-5'>
                    <div className='m-auto p-2'>
                      <img className=' w-100' src='https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/12/18/634046-sports-ground.jpg' height={'400px'} width={'450px'} />
                    </div>
                  </div>
                </div>
              </div>
            }
            {activeCard === 1 &&
              <div className=' ms-lg-3 card ' >
                <div className='row '>
                  <div className='col-md-7'>
                    <div className='card-body '>
                      <p className='card-title mt-5 fs-5 text-start ms-lg-5'><b>TheThe Deo Niwas will award scholarship to DEO current residents for a total of Rs.1,00,000/- (One Lakh) in awards</b></p>
                      <p className='card-text mt-5 mb-3 fs-4 text-start ms-lg-5' style={{ fontFamily: 'Open Sans' }}>Note: All applications must be submitted before august-20 in every year Applicants must be resident of Deo Niwas with an active year as of August 10 and a book for next year.</p>
                      <p className='card-title fs-5 text-start ms-lg-5'>Who Is Eligible? Only Deo Niwas Resident's.</p>
                      <div className='ms-5 text-lg-start text-sm-center'>
                        <Link to={'scholarships'} className=' '>Read More</Link>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-5'>
                    <div className=' m-auto p-2'>
                      <img className='w-100' src='images/scholarships.jpg' height={'400px'} />
                    </div>
                  </div>
                </div>
              </div>
            }
            {activeCard === 2 &&
              <div className=' ms-lg-3 card mb-5 ' >
                <div className='row '>
                  <div className='col-md-7 '>
                    <div className='card-body '>
                      <p className='card-text mt-5 mb-5 fs-4 text-start ms-lg-5' style={{ fontFamily: 'Open Sans' }}>Given the current circumstances, We are taking necessary measures to ensure safety of our residents and Our Deo Niwas Home is safe for our residents</p>
                      <div className='ms-5 text-lg-start text-sm-center'>
                        <Link to={'covid19'} className=' '>Read More</Link>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-5 '>
                    <div className=' m-auto p-2'>
                      <img className='w-100' src='https://i.ytimg.com/vi/jVouw7urAKo/maxresdefault.jpg' height={'300px'} />
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
        {/* end 0f sports,scholarship,COVID19 */}

        {/* connect */}
        <div className='row custom-orange-bg pt-5 pb-5 '>
          <div className=' mb-5 bg-warning p-2 shadow-lg ' style={{ marginTop: '50px' }}>
            <h1 className='text-center '>Connect</h1>
            <p className='text-center fs-5'>We are happy to answer any questions. Call us, fill out the contact form or use WhatsApp!</p>
            <div className='card p-3'>
              <div className='row'>
                <div className='col-md-5'>
                  <div className='card-body'>
                    <img className='w-100' src='images/location.jpeg' height='300px' />
                  </div>
                </div>
                <div className='col-md-7'>
                  <div className='card-body'>
                    <div className='input-group'>
                      <span className='input-group-text'>F</span>
                      <div className='form-floating me-2 shadow-lg'>
                        <input type='text' className='form-control' id='First Name' placeholder='Enter your name' />
                        <label for='First Name'>First Name</label>
                      </div>
                      <span className='input-group-text'>L</span>
                      <div className='form-floating shadow-lg'>
                        <input type='text' className='form-control' id='lastname' placeholder='Enter your name' />
                        <label for='lastname'>lastname</label>
                      </div>
                    </div>
                    <div className='input-group mt-3 mb-3 shadow-lg'>
                      <span className='input-group-text'><i className='bi bi-envelope' /></span>
                      <div className='form-floating '>
                        <input type='email' className='form-control' id='email' placeholder='Enter your Email'></input>
                        <label for='email'>Email</label>
                      </div>
                    </div>
                    <div className='input-group mt-3 mb-3 shadow-lg'>
                      <span className='input-group-text'><i className='bi bi-telephone' /></span>
                      <div className='form-floating '>
                        <input type='number' className='form-control' id='phone_number' placeholder='Enter your phone number'></input>
                        <label for='phone_number'>Phone Number</label>
                      </div>
                    </div>
                    <div className='form-floating shadow-lg'>
                      <textarea type='number' className='form-control' style={{ height: '100px' }} id='message' placeholder='Type a mesage'></textarea>
                      <label for='message'>Type a message</label>
                    </div>
                    <div className='text-center'>
                      <button className=' w-50 btn btn-dark text-dark mt-3 bg-warning'><b>Send Message</b></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of connect */}
        <Footer />
      </div>

    </>
  )
}

export default Home