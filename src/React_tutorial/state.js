import react, { useEffect } from 'react'
import React, {useState} from 'react'

// setCounter = function(value){
//     if(typeof value === 'function'){
        
//         const updatedValue = value(oldValue)
//         counter = updatedValue
//         rerender()
//     } else {
//         counter = value
//         rerender()
//     }
// }

function Count1(){
    const [counter, setCounter] = useState(0)

    useEffect(() => {console.log('i ran', counter)}
    , [counter])


    function Increase(){
        setCounter(oldCounterValue => oldCounterValue + 1)
    }

    function Decrease(){
        setCounter(oldCounterValue => oldCounterValue - 1)
    }

    return <div>
        <h1>Counter: {counter}</h1>
        <button onClick={Increase}>Increase The counter</button>
        <button onClick={Decrease}>Decrease The counter</button>
    </div>
}

export default Count1