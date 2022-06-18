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
								
		

								{/*2nd menu  part*/}
			<div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
				<ul>
					<li>
						<Link to='/App'>Practice Project</Link>
					</li>
					<li>
						<Link to='/Project1'>Project1</Link>
					</li>
					<li>
						<Link to='/Project2'>Project2</Link>
					</li>
					<li>
						<Link to='/Project3'>Project3</Link>
					</li>
                    <li>
						<Link to='/Project4'>Project4</Link>
					</li>
                    <li>
						<Link to='/Project5'>/Project5</Link>
					</li>
                    <li>
						<Link to='/Project6'>/Project6</Link>
					</li>
				</ul>
			</div>

						
			     <div >
			
					{/*hamburger menu start*/}
				<div className="hamburger-menu">
					<a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
						<GiHamburgerMenu />
					</a>
				</div>
		    </div>

	</nav>
			
								{/*my section*/}
			{/*<div className="hero-section">
				<p>So!! Here is our Today's Topic</p>
				<h1>Anchor Tag</h1>
				
					<p className="center">The &lt;a&gt; tag defines a hyperlink, which is used to link from one page to another.
					
							The most important attribute of the element is the href attribute, which indicates the link's destination.

							By default, links will appear as follows in all browsers:

							An unvisited link is underlined and blue
							A visited link is underlined and purple
							An active link is underlined and red.
					</p>
                
			</div>	*/}				
</>
);
};
export default Navbar;