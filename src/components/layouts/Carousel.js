import React from 'react'
import '../../Design.css'


const Carousel = () => {
  return (
    <>
      <div className='row'>

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true" style={{ padding: 0, margin: 0 }} >
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner" >
            <div className="carousel-item active slide-height"  >
              <img src="https://img.freepik.com/free-vector/student-bedroom-dormitory-night-with-bunk-bed-desk-chair_88138-1039.jpg?w=1060&t=st=1713357334~exp=1713357934~hmac=8c2d3d2c5c5d671a9deccc28877fc7920494c2205f5b2a5dd3c81cbf0f5aa804"
                className="d-block w-100 h-100" alt="..."/>
            </div>
            <div className="carousel-item slide-height">
              <img src="https://media.istockphoto.com/id/1411569766/vector/flat-students-in-dormitory-room-preparing-for-exams.jpg?s=1024x1024&w=is&k=20&c=mkZByi2ejNWGLO9l6-T5IuQdGCy3jEWZNmoOLu3JEoo="
                className="d-block w-100 h-100" alt="..." />
            </div>
            <div className="carousel-item slide-height">
              <img src="https://us.123rf.com/450wm/morris71/morris712211/morris71221100028/193620714-new-apartment-building-on-a-sunny-day-modern-residential-architecture-the-apartment-is-waiting-for.jpg?ver=6"
                className="d-block w-100 h-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon " aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Carousel