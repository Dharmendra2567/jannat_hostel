import React, { useEffect, useState } from 'react'
import Footer from '../../components/layouts/Footer'
import Navbar from '../../components/layouts/Navbar'
import Paybtn from './Paybtn'
import Swal from 'sweetalert2'
import axios from 'axios'
const BookingRoom = () => {
    const [isClicked, setIsClicked] = useState(false)
    const handleClick=()=>{
       
            axios.post('http://localhost:5000/create-checkout-session')
              .then((res) => {
                console.log(res.data.url)
                if (res.data.url) {
                    // setIsLink(res.data.url)
                  window.location = res.data.url;
                }
              })
              .catch(error => {
                console.error('Error:', error);
                Swal.fire('Error', "internal server error", 'error');
              });
    };
  
  
    return (

        <>
            <div className='container-fluid'>
                <Navbar />
                <div className='row mt-5 p-5 justify-content-center text-center align-items-center' >
                    <h2>Book Room</h2>

                    {/* starting of modal  */}
                    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Payment Details</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                   <Paybtn/>
                                </div>
                                <div class="modal-footer">
                                    {/* <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button> */}
                                    {/* <button className='btn btn-warning w-100' id="paybtn" >Confirm Payment</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Hide this modal and show the first with the button below.
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end of modal  */}
                    <div className='col-8' style={{ marginTop: '150px' }} >
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex'>
                                <i class="bi bi-square-fill text-success me-2"></i>
                                <p>Available</p>
                            </div>
                            <div className='d-flex '>
                                <button className='btn disabled ' style={{ border: 'none' }}> <i class="bi bi-square-fill text-danger"></i></button>
                                <p className='mt-3'>Occupied</p>
                            </div>
                        </div>
                        <div className='card  p-4 shadow  '>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex'>
                                    <button className='btn btn-danger disabled'>S3</button>
                                    <button className='btn btn-danger disabled' >S3</button>
                                    <button className='btn btn-success' onClick={() => setIsClicked(!isClicked)}>S3</button>

                                    <button className='btn btn-danger disabled'>S3</button>
                                </div>

                                <div className='d-flex'>
                                    <button className='btn btn-danger disabled'>S3</button>
                                    <button className='btn btn-danger disabled'>S3</button>
                                    <button className='btn btn-danger disabled'>S3</button>
                                    <button className='btn btn-danger disabled'>S3</button>
                                </div>
                            </div>
                            <div className='btn-group'>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-success'>S3</button>
                                <button className='btn btn-success'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-success'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-success'>S3</button>
                                <button className='btn btn-success'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-success'>S3</button>
                                <button className='btn btn-success'>S3</button>
                                <button className='btn btn-success'>S3</button>

                            </div>
                            <div className='btn-group'>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-success'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-danger disabled' >S3</button>
                                <button className='btn btn-success'>S3</button>
                                <button className='btn btn-success'>S3</button>
                                <button className='btn btn-success'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-success'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>

                            </div>
                            <div className='btn-group'>
                                <button className='btn btn-success'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-success'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-success'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-success'>S3</button>
                                <button className='btn btn-success'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-success'>S3</button>
                                <button className='btn btn-success'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>

                            </div>
                            <div className='btn-group mx-5'>
                                <button className='btn btn-success'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-success'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>
                                <button className='btn btn-danger disabled'>S3</button>


                            </div>
                        </div>
                        {isClicked && (
                            <div className='mt-5 text-start'>
                                <h4>3 seater room</h4>
                                <p style={{ fontFamily: 'Arial, sans-serif' }}>This is a standard 3-Seater Room Charges with attached bathroom, Study Table Chair, Almirah, Air cooler (optional AC Room), Bed, Mattress, bucket Mug. ATTENTION: RS.5,500/- FOR JUNE-1 TO JULY-24 WITHOUT MEAL AND LAUNDRY SERVICE. IN SUMMER DEO HOSTEL MESS & LUNDRY SERVICE CLOSED. NOTE: If You Want Particular Room Then Mention In Notes Box on […]</p>
                                <img src='https://deohostel.com/wp-content/uploads/2022/02/3s-1.jpg' alt='room pic' className='image-fluid w-100' />
                                <details>
                                    <p className='' style={{ fontFamily: 'Arial, sans-serif' }}> &#8594; <b>menities:</b> 24 Hrs. Water Supply and Power Back-up, 24/7 CCTV Surveillance, Biometric facial recognition Entry, Free Sports Ground, Free WIFI & Computer lab with printing access, Open Kitchen for all, R.O. Drinking Water Supply, Regular Residence Room Sanitisation, SMS Alert Facility</p>
                                    <p>&#8594; <b>Categories</b>: Deo Niwas Hostel</p>
                                    <p><b>&#8594; Prices start at:</b> ₹5,500 for 54 nights

                                    </p>
                                </details>
                                <button className='btn btn-primary p-3 mt-4' onClick={handleClick}>Book Now</button>
                            </div>
                        )}
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default BookingRoom