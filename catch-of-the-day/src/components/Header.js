import React from 'react';

const Header = (props)=>{
    return(
        // this is a stateless functional component meaning that what it does will never change therefore we dont need 
        // to make it a react component e.g extends . reat.component
        // instead make a funtion that takes in props and returns the HTML we made.
        <header className="top">
            <h1>Catch 
            <span className="ofThe">
                <span className="of">of</span>
                <span className="the">the</span>   
            </span>
            Day
            </h1>
            <h3 className="tagline"><span>{props.tagline}</span></h3>
        </header>
    )
        

}
    

export default Header