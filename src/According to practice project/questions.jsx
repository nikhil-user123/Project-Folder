import React, { useState } from 'react'
import './app.css'
import './ui.css'

const SingleQuestion = (props) => {
	const { title, info } = props

	// update the UI here
	return (<article className='question'>
	<header>
	<h4>{title}</h4>
	<button className='btn'>
		+
	</button>
	</header>
	<p>{info}</p>
</article>)
}

export default SingleQuestion

