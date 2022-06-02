import React from 'react'





const iamabove18 = true;

function onclickfun(){
    return alert("Hey! Did you just Click me")
}
 
function Text(){

    
    return <div id="content">
        <p>Hii {iamabove18 ? <p>iamabove18</p>: null}</p>

        <button onClick={onclickfun}>Click Me</button>

    </div>
}

export default Text