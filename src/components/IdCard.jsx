import React from 'react';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div>
      <h3>First Name: {firstName}</h3>
      <h3>Last Name: {lastName}</h3>
      <p>Gender: {gender}</p>
      <p>Height: {height / 100}m</p>
      <p>Birth Date: {birth.toDateString()}</p>
      <img className="idImage" src={picture} alt={`${firstName} ${lastName}`} />
    </div>
  );
}

export default IdCard;
