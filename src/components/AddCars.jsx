import axios from 'axios';
import React, { useState } from 'react'

const AddCars = () => {

    const [input, changeInput] = useState(
        {
            registration_number: "",
            brand: "",
            model: "",
            vehicle_type: "",
            fuel_type: "",
            transmission: "",
            seating_capacity: "",
            rent_per_day: "",
            city: "",
            availability_status: ""
        });

    const inputHandler = (event) => {

        changeInput({ ...input, [event.target.name]: event.target.value });
    };

    const readValue = () => {

        console.log(input)

        axios.post("https://host-demo-app.onrender.com/api/add-car",input)
            .then((response) => {
                console.log(response.data)
                alert("Success")
            }).catch();
    };

    return (
        <div>

            <div className="container form-container shadow-lg rounded-4 p-5 mt-5">

                <h2 className="text-white fw-bold text-center mb-2">

                    Add Vehicle
                </h2>
                <p className="text-center text-light mb-5">
                    Enter the vehicle details below.
                </p>
                <div className="row">
                    <div className="col col-12">

                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-3">

                                <label htmlFor="" className="form-label text-light fw-semibold small">Registration Number</label>
                                <input type="text" className="form-control"
                                    name="registration_number"
                                    value={input.registration_number}
                                    onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-3">

                                <label htmlFor="" className="form-label text-light fw-semibold small"> Brand</label>
                                <input type="text" className="form-control"
                                    name="brand"
                                    value={input.brand}
                                    onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-3">

                                <label htmlFor="" className="form-label text-light fw-semibold small"> Model</label>
                                <input type="text" className="form-control"
                                    name="model"
                                    value={input.model}
                                    onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-3">

                                <label htmlFor="" className="form-label text-light fw-semibold small"> Vehicle Type</label>
                                <select
                                    className="form-select"
                                    name="vehicle_type"
                                    value={input.vehicle_type}
                                    onChange={inputHandler}
                                >
                                    <option value="Hatchback">Hatchback</option>
                                    <option value="Sedan">Sedan</option>
                                    <option value="SUV">SUV</option>
                                    <option value="MUV">MUV</option>
                                    <option value="Luxury">Luxury</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-3">

                                <label htmlFor="" className="form-label text-light fw-semibold small"> Fuel Type</label>
                                <select id="" className="form-select"
                                    name="fuel_type"
                                    value={input.fuel_type}
                                    onChange={inputHandler}>
                                    <option value="Petrol">Petrol</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="CNG">CNG</option>
                                    <option value="Electric">Electric</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-3">

                                <label htmlFor="" className="form-label text-light fw-semibold small"> Transmission Type</label>
                                <select id="" className="form-select"
                                    name="transmission"
                                    value={input.transmission}
                                    onChange={inputHandler}>
                                    <option value="Manual">Manual</option>
                                    <option value="Automatic">Automatic</option>

                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-3">

                                <label htmlFor="" className="form-label text-light fw-semibold small"> Seating Capacity</label>
                                <input type="number" className="form-control"
                                    name="seating_capacity"
                                    value={input.seating_capacity}
                                    onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-3">

                                <label htmlFor="" className="form-label text-light fw-semibold small"> Rent per Day</label>
                                <input type="number" className="form-control"
                                    name="rent_per_day"
                                    value={input.rent_per_day}
                                    onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-3">

                                <label htmlFor="" className="form-label text-light fw-semibold small"> City</label>
                                <input type="text" className="form-control"
                                    name="city"
                                    value={input.city}
                                    onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 g-3">

                                <label htmlFor="" className="form-label text-light fw-semibold small"> Availability Status</label>
                                <select id="" className="form-select"
                                    name="availability_status"
                                    value={input.availability_status}
                                    onChange={inputHandler}>
                                    <option value="Available">Available</option>
                                    <option value="Booked">Booked</option>
                                    <option value="Maintainance">Maintainance</option>
                                </select>
                            </div>
                            <div className="col col-12 g-3 text-center p-3" onClick={readValue}>

                                <button className="btn btn-primary px-5 py-2 fw-semibold">Submit Application</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default AddCars