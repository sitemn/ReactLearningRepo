import React from 'react';
import { useState } from 'react';
import Body from './Body';
import './Header.css';

export default function Header() {
    const [navigation, setNavigation] = useState(0);

    return (
        <div className = "header">
        <div style={{width: '100px', float: 'left'}}>MyWebsite</div>
        <div>
        <button onClick={()=>setNavigation(0)}>Home</button>
        <span class="separator">|</span>
        <button onClick={()=>setNavigation(1)}>Services</button>
        <span class="separator">|</span>
        <button onClick={()=>setNavigation(2)}>About</button>
        <span class="separator">|</span>
        <button onClick={()=>setNavigation(3)}>Contact</button>
        <hr className='hr'/>
        </div>

        <Body navigation={navigation}/>
        </div>);
}
