import React, { useState } from 'react'

const Question = (props) => {
	const { title, info } = props // i can't understand this line


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