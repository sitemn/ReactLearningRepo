import React from 'react'

export default function Main3() {
  // const numbersOne = [1, 2, 3];
  // const numbersTwo = [4, 5, 6];
  // const numbersCombined = [...numbersOne, ...numbersTwo];

  // return (
  //   <div>
  //     Main3<br></br>
  //     {numbersOne}<br></br>
  //     {numbersTwo}<br></br>
  //     {numbersCombined}
  //   </div>
  // )

  const myCar = {
    brand: "Ford",
    model: "Mustang",
    color: "Red"
  };
  const updatedCar = {
    type: "sedan",
    year: "2000",
    color: "black"
  };

  const myUpdatedCar = {...myCar, ...updatedCar};
  return (
    <div>
      {myUpdatedCar.brand}
    </div>
  )
}
