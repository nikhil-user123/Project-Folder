import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
// import App from './mini_project/apps';
import reportWebVitals from './reportWebVitals';
import Nav from './mini_project/Webpage';

// In React v16 it's possible for render()
// to return an array of elements.

ReactDOM.render(

 <BrowserRouter>

    <Nav />
    
  </BrowserRouter>
 ,

 
	  document.getElementById('root')
);

// var h1 = document.createElement("h1");
// h1.innerHTML = "Thapa Technical";
// document.getElementById("root").appendChild(h1)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
