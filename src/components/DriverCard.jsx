import React from 'react'
import Rating from "./Rating"


function DriverCard({name, rating, img, car}) {
    return (
      <div style={{ backgroundColor: 'blue', borderRadius: 25 }}>
        <img src={img} alt={name} />
        <h4>{name}</h4>
        <Rating {...rating} />
        {/* <p>
          {car.model} - {car.props.licensePlate}
        </p> */}
      </div>
    );
}

export default DriverCard