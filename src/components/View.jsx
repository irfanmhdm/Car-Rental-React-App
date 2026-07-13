import axios from 'axios';
import React, { useEffect, useState } from 'react';

const View = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://host-demo-app.onrender.com/api/cars")
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          {data.map((value, index) => {
            return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 g-3" key={index}>
                <div className="card h-100 shadow">

                  <div className="card-body">
                    <h5 className="card-title text-center">
                      <strong>{value.brand} {value.model}</strong>
                    </h5>

                    <p className="card-text">
                      <strong>Registration No:</strong> {value.registration_number} <br />
                      <strong>Vehicle Type:</strong> {value.vehicle_type} <br />
                      <strong>Fuel Type:</strong> {value.fuel_type} <br />
                      <strong>Transmission:</strong> {value.transmission} <br />
                      <strong>Seating Capacity:</strong> {value.seating_capacity} <br />
                      <strong>Rent Per Day:</strong> ₹{value.rent_per_day} <br />
                      <strong>City:</strong> {value.city} <br />
                      <strong>Status:</strong> {value.availability_status}
                    </p>

                    <div className="text-center">
                      <button className="btn btn-primary">
                        Book Now
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default View;