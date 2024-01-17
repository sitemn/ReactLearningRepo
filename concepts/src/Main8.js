import React, {useState, useEffect} from 'react'

//find function
export default function Main8() {
    let Students = [
        {name:"John", Marks: 40},
        {name:"Mike", Marks: 30},
        {name:"Cathy", Marks: 20}
    ];

    let found = Students.find((Student) => {
        return Student.name === "John";
    })

    return <div>{found.name}-{found.Marks}</div>

//   return (
//     <div>
//         <h1>My Students</h1>

//         <ul>
//             {found.map((item, index) => (
//                 <div key={index}>{item.name}-{item.Marks}</div>
//             ))}
//         </ul>

//     </div>
//   )
}
