import React, { useState } from 'react'
import data from './data'
import './ui.css'
import SingleQuestion from './questions'
import './app.css'
function Fqe() {
   return <main>
<div className="containerr">
<h3>FAQ</h3>
<section className="info">
{data.map(question => {
    return (
        <h3 key={question.id}>{question.title}</h3>
    )
})}
</section>
</div>
</main>
}

export default Feq








