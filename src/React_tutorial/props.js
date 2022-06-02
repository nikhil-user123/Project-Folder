import react from 'react'
import ReactDom from 'react-dom'

function Custom (props){
    return <div>

        <p className="text">hello {props.Name}</p> 
    </div>

}
export default Custom 


//we can also pass variable and expession in props