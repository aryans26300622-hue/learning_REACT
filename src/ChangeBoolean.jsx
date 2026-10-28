import { useState } from 'react'

function ChangeBoolean(){
    const [isVisible , setIsVisible] = useState(false);
    function handleClick(){
        setIsVisible((prev)=>!prev)
    }
    const hello = <h1> AM I VISIBLE </h1>
    
    return(
        
        <>
        <button onClick ={handleClick}>
        {isVisible ? "Hide Message" : "Show Message"}
        </button>
        {isVisible && hello}
        {isVisible && <p>You Can See Me</p>}
        </>
    )
}

export default ChangeBoolean