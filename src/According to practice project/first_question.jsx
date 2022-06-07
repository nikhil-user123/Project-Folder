import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
   return <main>
<div className="container">
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

export default App







