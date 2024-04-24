import React, { useEffect, useRef, useState } from 'react'
import Footer from '../../components/layouts/Footer'
import Navbar from '../../components/layouts/Navbar'
import { addRoom } from '../../api/roomApi'
import { Link } from 'react-router-dom'
const AddRoom = () => {
    const myref = useRef()
    const [room, setRoom] = useState({
        roomNumber:'',
        roomType:'',
        description:'',
        price:'',
        capacity:'',
        availablity:'',
        room_image:'',
        error:'',
        success:false,
        formdata:''
    })
    const {roomNumber,roomType,description,price,capacity,availablity,room_image,error,success,formdata} = room;
    useEffect(()=>{
        setRoom({...room, formdata: new FormData})
    },[])
    const handleChange =name=>e=>{
        let value;
        if(name =='room_image'){
            value = e.target.files[0]
        } else{
            value= e.target.value
        }
        setRoom({...room,[name]:value})
        formdata.set(name,value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        addRoom(formdata)
        .then(data=>{
            if(data.error){
                setRoom({...room, error:data.error,success:false})
            }else{
                setRoom({roomNumber:'', roomType:'', description:'', price:'',capacity:'',availablity:'', room_image:'', success:true,error:''})
                myref.current.value=''
            }
        })
    }
    const showError = () => {
        if (error) {
            return <div className='alert alert-danger mt-5 pt-5'>{error}</div>
        }
    }
    const showSuccess = () => {
        if (success) {
            return <div className='alert alert-success mt-5 pt-5'>Room added successfully<Link to="/admin/rooms">Go Back</Link></div>
        }
    }
  return (
    <>
    <div className='container-fluid'>
        <Navbar/>
        {showError()}
        {showSuccess()}
        <main className="form-signin w-50 mt-5 p-5 shadow-lg m-auto rounded-5">
                <form>
                    <div className='text-center mt-lg-5'>
                    <i class="bi bi-building-fill-up text-dark p-5"></i>
                    </div>
                    <h1 className="h3 mb-3 fw-normal">Add Room Details</h1>
                     <div className="form-floating">
                        <input type={ "text" }className="form-control" id="roomNumber" placeholder="roomNumber" onChange={handleChange('roomNumber')} value={roomNumber} />
                        <label htmlFor="floatingInput">Room Number</label>
                    </div>
                    <div className="form-floating">
                        <input type={ "text" }className="form-control" id="roomType" placeholder="roomType" 
                        onChange={handleChange('roomType')} value={roomType}/>
                        <label htmlFor="floatingInput">Room Type</label>
                    </div>
                    <div className="form-floating">
                        <textarea className="form-control" id="description" placeholder="description" 
                        onChange={handleChange('description')} value={description}/>
                        <label htmlFor="description">Description</label>
                    </div>
                    <div className="form-floating">
                        <input type={ "text" }className="form-control" id="price" placeholder="price" onChange={handleChange('price')} value={price}/>
                        <label htmlFor="price">Price</label>
                    </div>
                    {/* <div className="form-floating">
                        <input type="text" className="form-control" id="roomType" placeholder="roomtype" onChange={handleChange('roomType')} value={roomType} />
                        <label htmlFor="floatingInput">Room Type</label>
                    </div> */}
                    <div className="form-floating">
                        <input type={"text" }className="form-control" id="capacity" placeholder="capacity"  onChange={handleChange('capacity')} value={capacity}/>
                        <label htmlFor="floatingInput">Capacity</label>
                    </div>
                    <div className="form-floating">
                        <input type={"text"} className="form-control" id="availablity" placeholder="availablity" onChange={handleChange('availablity')} value={availablity}/>
                        <label htmlFor="floatingInput">Availablity</label>
                    </div>
                    <div className=" d-flex flex-column m-2">

                    <label htmlFor="floatingInput">Room Image</label>
                        <input type={"file"} 
                        ref={myref}
                        id="room_image" onChange={handleChange('room_image')} />
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Submit</button>
                    
                </form>
            </main>
        <Footer/>
    </div>
    </>
  )
}

export default AddRoom