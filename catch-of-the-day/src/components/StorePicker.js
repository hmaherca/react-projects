import React from 'react';

class StorePicker extends React.Component{
    render(){
        //or comment regular here
     return (
         <form className="store-selector">
         {/* this is how you comment in JSX*/}
            <h2>Please Enter A Store</h2>
            <input type="text" required placeholder="Store Name"/>
            <button type="submit">Visit Store</button>
         </form>
     )
    } 
 }

 export default StorePicker