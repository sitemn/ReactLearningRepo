import React from 'react';
import "./Header.css"
export default function Header() {
    // const mystyle = {
    //     backgroundColor: 'pink',
    //     color:'blue'
    // }
    return (
        <div>
        {/* <h1 style={{backgroundColor:'silver'}}>This is header component</h1> */}
        {/* <h1 style={mystyle}>This is header component</h1> */}
        <h1 className = "style1">This is header component</h1>
        <hr/>
        </div>
        
    )
}