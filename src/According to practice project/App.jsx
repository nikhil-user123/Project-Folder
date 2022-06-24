import React, { useState } from 'react'
import './app.css'
import './ui.css'
import data from './data'
import SingleQuestion from './questions'


function Project1() {
	return (
		<main>
			<div className="containerr">
				<h3>FAQ</h3>
				<section className="info">
					{data.map((question) => {
						return (
							<SingleQuestion
								title={question.title}
                                info={question.info}
								key={question.id}
							/>
						)
					})}
				</section>
			</div>
		</main>
	)
}

export default Project1

