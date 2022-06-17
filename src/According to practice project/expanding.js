import React, { useState } from 'react'
import './app.css'
import './ui.css'

const Question = (props) => {
	const { title, info } = props 


    const [visibility, setVisibility] = useState(false); 
	return (
		<article className="question">
			<header>
				<h4>{title}</h4>

				<button className="btn" onClick={() => setVisibility((visibility) => !visibility)}>{visibility===false ? '+' : '-'}</button>
			</header>

			<p>{visibility===false ? null : info}</p>
		</article>
	)
}

export default Question