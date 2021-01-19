import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Example from './components/navbar';
import Home from './components/Home'
import Contact from './components/contact'
import About from './components/about'
import {BrowserRouter, Route} from 'react-router-dom'
ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
            <div className="App">
              <Example />
          </div>
           <Route exact path="/" component={Home}></Route>
             <Route path='/Contact' component={Contact}> </Route>
             <Route path='about' component={About}> </Route>
          </BrowserRouter>  
          
          </React.StrictMode>
        ,document.getElementById("root"));
    

