import React from 'react'
import Header from './Header'
import Text from './jsx_tut'
import Custom from './props'
import Count1 from './state'
import Quot from './rand_quote'

let age = 18

function App(){
    return <div>
        {/* <Header />
        <Text />
        <Count1 />
        <Custom Name={age} /> {/* porps = { name:"aman"} */}
            {/* <div id="content">
                <p>hello there!</p>
            </div>
        {age > 18 ? <p >Which may be visible</p>: <p>condition false</p>} */} */}

        <Quot />
    </div>
}

export default App