
import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom"
import "./navbar.css"

import { FaFacebook,  FaInstagram, FaYoutube} from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar=()=>{
	const [showMediaIcons, setShowMediaIcons] = useState(false);
return(
<>
	<nav className="main-nav">
								{/*1st logo part*/}
		<div className="logo">
			
			<h2>
			<span>I</span>
			<span>L</span>
			<span>P</span>	
			</h2>

		</div>

								{/*2nd menu  part*/}
			<div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
				<ul>
					<li>
						<Link to='/Html'>Tutorial</Link>
					</li>
					<li>
						<Link to='/Home'>Home</Link>
					</li>
					<li>
						<Link to='/About'>AboutUs</Link>
					</li>
					<li>
						<Link to='/Contact'>ContactUs</Link>
					</li>
				</ul>
			</div>

							{/*3rd social	media links*/}
			<div className="social-media">
			<ul className="social-media-desktop">
				<li>
					<a href="https://www.facebook.com/"  target="_blank"><FaFacebook className="facebook" /></a>
				</li>
				<li>
					<a href="https://www.instagram.com/"  target="_blank"><FaInstagram className="instagram" /></a>
				</li>
				<li>
					<a href="https://www.youtube.com/"  target="_blank"><FaYoutube className="youtube"/></a>
				</li>
			</ul>

					{/*hamburger menu start*/}
				<div className="hamburger-menu">
					<a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
						<GiHamburgerMenu />
					</a>
				</div>
		    </div>

	</nav>
			
		
</>
);
};
export default Navbar;
