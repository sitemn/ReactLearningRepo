import React from 'react';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';

export default function Body(props) {
    if(props.navigation === 0) { return (<Home/>) }
    else if (props.navigation === 1) { return (<Services/>) }
    else if (props.navigation === 2) { return (<About/>) }
    else if (props.navigation === 3) { return (<Contact/>) }
}
