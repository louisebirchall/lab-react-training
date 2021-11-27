import React from 'react';

function RandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function Random(min, max, number) {
  return (
    <p>
      Random value between {min} and {max} = {RandomNumber}
    </p>
  );
}

export default Random;
