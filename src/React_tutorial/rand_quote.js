import React, {useState} from 'react'

const quots = ['if you are good enough, never do it for free','quote ', 'quote 5',]

function Quot () {
    const [quote, setQuote] = useState(quote[0])


function randomizeQuote(){
    // const randomQuote =
    // quotes[Math.floor (Math.random() * quotes.length)] :
    //  setQuote(randomQuote)]
    // setQuote(randomQuote)
}
return (
  <div className="" >
  <div>(quote)</div>
  <button onClick = {randomizeQuote}> click Me </button>
  </div>
  )
  }
  
  export default Quot