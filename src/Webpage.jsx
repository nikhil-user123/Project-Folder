import React from 'react';

import Navbar from './Navbar';
import App from './React_tutorial/APP11'
import Project1 from './According to practice project/App'
import Project4 from './React Quise Project/ques_score' 
import Project3 from './Tiktok UI Clone/TikTok'
import Project5 from './React Tours App/Tapp'
import Project2 from './React Birthday Reminder App/Displaying_ui'
import Project6 from './Restourent menu app/Rmenu'


import {Route, Switch} from "react-router-dom";

const Nav = () => {
	return (
		<>	
			 <Navbar />
			<Switch>
                <Route exact path='./App' component={App}/>
                <Route exact path='/Project1' component={Project1}/>
				<Route exact path='/Project1' component={Project1}/>
				<Route exact path='/Project2' component={Project2}/>
				<Route exact path='/Project3' component={Project3}/>
				<Route exact path='/Project4' component={Project4}/>
                <Route exact path='/Project4' component={Project5}/>
                <Route exact path='/Project4' component={Project6}/>
			</Switch>
			
			<Navbar />
			
		</>
		);
};

export default Nav;