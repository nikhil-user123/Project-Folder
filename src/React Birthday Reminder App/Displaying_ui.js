import React, {useState} from 'react'
import data from './data' 
import List from './list'
import Clear from './Adding_clear_bt'

function Project2() {
    return (
        <main>
            {/* <section className="container">
            <h3>{data.length} birthdays today</h3>
            <List people={data} />
            </section> */}
            <section>
                <Clear />
            </section>
        </main>
      
    )
        
    
}

export default Project2