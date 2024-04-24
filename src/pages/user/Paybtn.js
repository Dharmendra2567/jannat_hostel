import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Paybtn = () => {
  const handleClick = () => {
    axios.post('http://localhost:5000/create-checkout-session')
      .then((res) => {
        console.log(res.data)
        if (res.data.url) {
           
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
      <div>
        <h3 style={{fontFamily:'Robust'}}>Stripe Payment Gateway</h3>
        <button className='btn btn-warning w-50 text center p-2' onClick={handleClick}>Checkout</button>
      </div>
    </>
  )
}

export default Paybtn;
