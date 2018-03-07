// let's go!
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';
import './css/style.css';

import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound'
import App from './components/App'

const Root = ()=> {
    //here we are saying if the path is "/" render the storepicker component
    // if the path is "/store/:storeId" render the app component
    // now on index.js we dont render out  App component anymore but instead Root
    return(
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={StorePicker}/>
                <Match exactly pattern="/store/:storeId" component={App}/>
                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}

render(<Root/>, document.querySelector('#main'));