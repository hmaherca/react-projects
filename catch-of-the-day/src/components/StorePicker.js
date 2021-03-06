import React from 'react';
import {getFunName} from '../helpers'

class StorePicker extends React.Component{
    //we are gonna create a method that we will insert onSubmit for the form
    constructor(){
        super();
        this.goToStore=this.goToStore.bind(this);
    }

    goToStore(event){
        event.preventDefault();
        console.log('You Just changed the URL')
        //first grab the text from the boxt
        //console.log(this.storeInput.value)
        const storeId=this.storeInput.value;
        console.log(`going to ${storeId}`)
        //second we are gonna transition from /to/store/:storeId
        this.context.router.transitionTo(`/store/${storeId}`);

    }
    render(){
        //or comment regular here
        // defaultValue will hold a random value we imported from helper.js foler
        //we could also just put in anything ourselves but this way I generate something random everytime
        // the page loads
     return (
         <form className="store-selector" onSubmit={this.goToStore}>
         {/* this is how you comment in JSX*/}
            <h2>Please Enter A Store</h2>
            <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input)=>{this.storeInput=input}}/>
            <button type="submit">Visit Store</button>
         </form>
     )
    } 
 }
// below we are telling react that we are expecting router in this component
 StorePicker.contextTypes={
     router: React.PropTypes.object
 }

 export default StorePicker