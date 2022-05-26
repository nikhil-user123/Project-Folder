import React from 'react';

import Navbar from './Navbar';
import Html from './Tutorial';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {Route, Switch} from "react-router-dom";

const Nav = () => {
	return (
		<>	
			<Navbar />
			<Switch>
				<Route exact path='/Html' component={Html}/>
				<Route exact path='/Home' component={Home}/>
				<Route exact path='/About' component={About}/>
				<Route exact path='/Contact' component={Contact}/>
			</Switch>
			
			{/*<Navbar />*/}
			
		</>
		);
};

export default Nav;