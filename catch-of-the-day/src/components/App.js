import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory'

class App extends React.Component{
    constructor(){
        super();
        this.state={
            fishes: {},
            order:{}
        };
    }
    
    addFish(fish){
        //update our state

        //set state
    }
    render(){
        //'this' refers to the component, props is the object that contains the data we want
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                </div>
                <Order/>
                <Inventory/>
            </div>
        )
    }
}

export default App