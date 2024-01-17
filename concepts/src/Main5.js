import React from 'react'

export default function () {
    let a = 2;
//   return (
//     <div>{a > 0 ? <h1>True</h1> : <h1>False</h1>}</div>
//   )

    return (
        <div>{a > 0 && <h1>True</h1>}</div>
    )
}
