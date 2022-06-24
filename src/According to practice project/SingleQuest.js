import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './questions'
import './app.css'
import './ui.css'

function SingleQue() {
	return (
		<main>
			<div className="containerr">
				<h3>FAQ</h3>
				<section className="info">
					{/* map over data imported at the top and use SingleQuestion component */

data.map(question => {
  return <SingleQuestion key={question.id} title={question.title} />//i stuck in this line
                    })}
           
				</section>
			</div>
		</main>
	)
}

export default SingleQue