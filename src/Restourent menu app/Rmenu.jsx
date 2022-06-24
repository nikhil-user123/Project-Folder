import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data1'
import './Res.css'
import './Rmenu.css'


// dynamically calculate unqiue values here
const categories = ['all',...new Set(items.map(item => item['category']))]

function Project6() {
	const [menuItems, setMenuItems] = useState(items)

	const filterItems = (category) => {
		if (category === 'all') {
			setMenuItems(items)
		} else {
			setMenuItems(items.filter((item) => item.category === category))
		}
	}

	return (
		<main>
			<section className="menu section">
				<div className="title">
					<h2 className="h1_c" >our menu</h2>
					<div className="underline"></div>
				</div>
				<Categories categories={categories} filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	)
}

export default Project6
