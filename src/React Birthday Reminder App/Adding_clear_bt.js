import React, { useState } from 'react'
import './birthday.css'
import data from './data'
import List from './list'
import './index2.css'
function Clear() {
	// create a state variable here
	const [people, setPeople] = useState(data)

	// this should clear all records
	function clearAllRecords() {
		setPeople([])
	}
	return (
		<main>
			<section className="containerr">
				<h3>{people.length} birthdays today</h3>
				<List people={people} />
				<button onClick={clearAllRecords}>Clear All</button>
			</section>
		</main>
	)
}

export default Clear