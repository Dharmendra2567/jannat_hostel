import React, { useEffect, useState } from "react";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

const FAQs = () => {
  const [activeCard, setActiveCard] = useState(null)
  const handleClick = (cardIndex) => {
    setActiveCard(activeCard=== cardIndex?null:cardIndex)
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".custom-color")) {
        setActiveCard(null);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <div className=" d-flex justify-content-center align-items-center m-3 mt-5">
          <div className="col col-md-8 col-lg-6  ">
            <img
              className="img-fluid w-100"
              src="images/jannat_hostel.jpeg"
              alt="Jannat Hostel"
            />
          </div>
        </div>
        <div className="d-flex justify-content-start px-lg-5 flex-column">
          <h1 className="text-warning">F.A.Q </h1>
          <span className="" style={{ border: "2px solid orange" }}></span>
          <br />
          <h4 className="py-5">Frequently Asked Questions</h4>
        </div>
        <div className="d-flex flex-column px-lg-5">
          <div className="custom-color btn d-inline-flex flex-row justify-content-space-between align-items-start fs-5 mb-3" onClick={() => handleClick(1)}>
            <p className="w-100 text-start m-0">1. What is Jannat Hostel Scholarships award?</p>
            { activeCard===1 ?(
             <strong><b><i className="bi bi-dash"></i></b></strong>):
            <strong><b><i className="bi bi-plus"></i></b></strong>
          }
          </div>
          {activeCard === 1 &&
            <div className="card-none">
              <div className="card-text fs-5">
                <p>The Deo Niwas will award scholarship to DEO current residents for a total of Rs.1,00,000/- in awards.</p>
                <p>Note: All applications must be submitted before august-20 in every year Applicants must be resident of Deo Niwas with an active year as of August 2023 and a book for next year Who Is Eligible Only Deo Niwas Resident’s. Judging Criteria The judging committee will evaluate scholarship applicants and select scholarship winners based on the following criteria: Academic Scholarship (both graduate and undergraduate)</p>
                <p className="ms-3">.50% Behavior, character and personality/ Be a Helpful Person</p>
                <p className="ms-3">.30% Academic achievement ( last two semester Cumulative GPA at least 7.0)</p>
                <p className="ms-3">.10% Additional leadership / fitness/ involvement in games/ social work/ career planning</p>
                <p className="ms-3">.10% Financial need</p>
                <p >﻿Timeline August 20: Deadline to submit all application materials, please note: no fine or pending payment from Deo Niwas management</p>
              </div>
            </div>
          }
          <div className="custom-color btn d-inline-flex flex-row justify-content-space-between align-items-start fs-5 mb-3" onClick={() => handleClick(2)}>
            <p className="w-100 text-start m-0">2. Internet User's Agreement (2023-2024)?</p>
            { activeCard===2 ?(
             <strong><b><i className="bi bi-dash"></i></b></strong>):
            <strong><b><i className="bi bi-plus"></i></b></strong>
          }
          </div>
          {activeCard === 2 &&
            <div className="card-none">
              <div className="card-text fs-5">
                <p>I recognize that the use of the Internet through the DEO NIWAS is a privilege. I agree to abide by the following rules regulating use of the Internet, and I understand that failure to observe these rules or failure to observe other Deo Niwas Policies may result in a suspension of my use of the DEO NIWAS Internet workstation.</p>
                <p>I will not engage in any activity which:</p>
                <p>Seeks to gain unauthorized access to the resources of the DEO NIWAS or Internet databases.</p>
                <p style={{ fontWeight: '100' }}>Disrupts the intended use of the Internet Wastes any resources through such actions.</p>
                <p>Violates, compromises, or destroys the integrity of any information.</p>
                <p>Compromises the privacy of any user.</p>
                <p>Disrupts the Deo Niwas environment is illegal. I will be responsible for any costs incurred as a result of my Internet activities, I will not use the computers for unlawful purposes. I understand that the transmission of any material in violation of any India or state regulation is prohibited. This includes, but is not limited to, threatening or obscene material or any copyrighted or otherwise protected material. I agree to hold harmless the Deo Niwas for any and all claims of any nature arising from my use or inability to access these services. Knowing that the Internet, including email is currently an unregulated resource, I understand that I use information obtained via this service at my own risk, and that the Deo Niwas offers no guarantee as to the accuracy or validity of information obtained through the Internet. I will observe all copyright laws which might apply to files, software, or other resources on the Internet. I will observe the posted rules governing use of the Deo Niwas Internet hardware and software. I will take proper care of all equipment and will report any problem to the Deo Niwas staff member.</p>
                <p>I ACCEPT THIS BY  LOGIN TO INTERNET SERVICE
                </p>
              </div>
            </div>
          }
          <div className="custom-color btn d-inline-flex flex-row justify-content-space-between align-items-start fs-5 mb-3" onClick={() => handleClick(3)}>
            <p className="w-100 text-start m-0">3. What are the terms and conditions for residents?</p>
            { activeCard===3 ?(
             <strong><b><i className="bi bi-dash"></i></b></strong>):
            <strong><b><i className="bi bi-plus"></i></b></strong>
          }
          </div>
          {activeCard===3 &&
            <div className="card-none">
              <h5 className="card-title">TERMS AND CONDITIONS OF DEO NIWAS (2023-2024)</h5>
                <h5>Must be followed strictly</h5>
                <div className="card-text fs-5">
                <p>1.   Cooking is strictly prohibited in Deo Niwas rooms and Resident will strictly follow the mess timings menu and no request except in case of illness. Food, crockery, cutlery from the mess shall not be taken in the room. Any item such as: plate/spoon/glass found in room: will be fined.</p>
                <p>2.   Food will not be served in the room except in case of sickness. Mess worker’s of Deo Niwas must be informed of illness. Mess facility is available for 2 semester’s as time period defined</p>
                </div>
            </div>
          }
          <div className="custom-color btn d-inline-flex flex-row justify-content-space-between align-items-start fs-5 mb-3" onClick={() => handleClick(4)}>
            <p className="w-100 text-start m-0">4.What is the postal code of Jannat Hostel home?</p>
            { activeCard===4 ?(
             <strong><b><i className="bi bi-dash"></i></b></strong>):
            <strong><b><i className="bi bi-plus"></i></b></strong>
          }
          </div>
          {activeCard === 4 &&
            <div className="card-none px-3">
              <p className="ms-2">Jannat Boys Hostel</p>
              <p className="ms-2">V.P.O: Nanak Nagri, Chiheru On Maheru Rd,</p>
              <p className="ms-2">Near LPU Phagwara, District</p>
              <p className="ms-2">Kapurthala Punjab, India</p>
              <p className="ms-2">PIN: 144411</p>
            </div>
          }
          <div className="custom-color btn d-inline-flex flex-row justify-content-space-between align-items-start fs-5 mb-3" onClick={() => handleClick(5)}>
            <p className="w-100 text-start m-0">5.What should i do in case of Emergency?</p>
            { activeCard===5 ?(
             <strong><b><i className="bi bi-dash"></i></b></strong>):
            <strong><b><i className="bi bi-plus"></i></b></strong>
          }
          </div>
          {activeCard === 5 &&
            <div className="card-none px-3">
              <h5 className="dard-title">In case of emergency please call Mr.Ranjit Deo (owner)</h5>
              <p className="ms-2">-Mobile: +918235726702</p>
              <p className="ms-2">-MSN: ranadeo@hotmail.com</p>
              <p className="ms-2">-E-mail: ranjit@deohostel.com</p>
              <p className="ms-2">-Owner: Mr.Ranjit Deo</p>
            </div>

          }
          <div className="custom-color btn d-inline-flex flex-row justify-content-space-between align-items-start fs-5 mb-3">
            <p className="w-100 text-start m-0" onClick={() => handleClick(6)}>6.When is the offer booking time?</p>
            { activeCard===6 ?(
             <strong><b><i className="bi bi-dash"></i></b></strong>):
            <strong><b><i className="bi bi-plus"></i></b></strong>
          }
          </div>
          {activeCard === 6 &&
            <div className="card-none px-3">
              <h5 className="card-title mb-2">In case of emergency please call Mr.Ranjit Deo (owner)</h5>
              <div className="card-text fs-5">
                <p>Every Year Jan-22 to March-4. Minimum 30% of total rent needed in order to book your room</p>
              </div>
            </div>
          }
          <div className="custom-color btn d-inline-flex flex-row justify-content-space-between align-items-start fs-5 mb-3" onClick={() => handleClick(7)}>
            <p className="w-100 text-start m-0">7.Do i need to share my room with others?</p>
            { activeCard===7 ?(
             <strong><b><i className="bi bi-dash"></i></b></strong>):
            <strong><b><i className="bi bi-plus"></i></b></strong>
          }
          </div>
          {activeCard === 7 &&
            <div className="card-none px-3">
              <div className="card-text fs-5">
                <p>Its depends on your choice. We provide room such as:</p>
                <p className="ms-5">-single seaters</p>
                <p className="ms-5">-Two seaters</p>
                <p className="ms-5">-Three seaters</p>
                <p className="ms-5">-4/5 seaters</p>
              </div>
            </div>
          }
          <div className="custom-color btn d-inline-flex flex-row justify-content-space-between align-items-start fs-5 mb-3" onClick={() => handleClick(8)}>
            <p className="w-100 text-start m-0">8.So where is this Jannat Hostel located?</p>
            { activeCard===8 ?(
             <strong><b><i className="bi bi-dash"></i></b></strong>):
            <strong><b><i className="bi bi-plus"></i></b></strong>
          }
          </div>
          {activeCard === 8 &&
            <div className="card-none px-3">
              <div className="card-text fs-5">
                <p>We are Located in Village Chaheru In Phagwara (Punjab) and 5 minute walking distance from LPU university.</p>
              </div>
            </div>

          }
          <div className="custom-color btn d-inline-flex flex-row justify-content-space-between align-items-start fs-5 mb-3" onClick={() => handleClick(9)}>
            <p className="w-100 text-start m-0">9.Who is allowed to come in my room?</p>
            { activeCard===9 ?(
             <strong><b><i className="bi bi-dash"></i></b></strong>):
            <strong><b><i className="bi bi-plus"></i></b></strong>
          }
          </div>

          {activeCard === 9 &&
            <div className="card-none px-3">
              <div className="card-text fs-5">
                <p>Parents/Guardians/Visitors can meet their ward in hostel with the permission from owner before 8.00 pm. Female visitors are not allowed to visit students in their rooms.</p>
              </div>
            </div>
          }
          <div className="custom-color btn d-inline-flex flex-row justify-content-space-between align-items-start fs-5 mb-3" onClick={() => handleClick(10)}>
            <p className="w-100 text-start m-0">10.what are the room charges for academic year 2023-2024?</p>
            { activeCard===10 ?(
             <strong><b><i className="bi bi-dash"></i></b></strong>):
            <strong><b><i className="bi bi-plus"></i></b></strong>
          }
          </div>
          {activeCard === 10 &&
            <div className="card-none px-3">
              <h4 className="card-title">Room Charges:</h4>
              <div className="card-text fs-5">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>No. of seater</th>
                      <th>Non-AC</th>
                      <th>AC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 seater</td>
                      <td>Rs. 90,000</td>
                      <td>Rs. 90,000/ + Rs. 250/-(per day)</td>
                    </tr>
                    <tr>
                      <td>2 seaters</td>
                      <td>Rs. 85,000</td>
                      <td>Rs. 85,000/ + Rs. 150/-(per day)</td>
                    </tr>
                    <tr>
                      <td>3 seaters</td>
                      <td>Rs. 80,000</td>
                      <td>Rs. 80,000/ + Rs. 100/-(per day)</td>
                    </tr>
                    <tr>
                      <td>4 seaters</td>
                      <td>Rs. 75,000</td>
                      <td>Rs. 75,000/ + Rs. 80/-(per day)</td>
                    </tr>
                    <tr>
                      <td>5 seaters</td>
                      <td>Rs. 65,000</td>
                      <td>Rs. 65,000/ + Rs. 70/-(per day)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          }
        </div>

        <Footer />
      </div>
    </>
  );
};

export default FAQs;
