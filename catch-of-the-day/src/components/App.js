import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory'

class App extends React.Component{
    constructor(){
        super();
        this.addFish-this.addFish.bind(this);

        this.state={
            fishes: {},
            order:{}
        };
    }

    addFish(fish){
        //update our state
        // this... is an es6 way of copying (spread). it will take every item from our object and spread it into the new object we are declaring
        const fishes={...this.state.fishes};
        //add in our new fish
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        //set state
        this.setState(
            {
                fishes: fishes
            }
        )
    }
    render(){
        //'this' refers to the component, props is the object that contains the data we want
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                </div>
                <Order/>
                <Inventory addFish={this.addFish}/>
            </div>
        )
    }
}

export default App